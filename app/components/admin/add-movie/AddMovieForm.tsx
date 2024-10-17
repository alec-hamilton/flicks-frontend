"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { queryOmdb } from "@/app/actions";
import { useReducer } from "react";
import { extractLastNumber } from "@/lib/helpers/helpers";
import { MultiSelect } from "@/components/ui/multi-select";
import { Tables } from "@/types/database.types";
import AddPeople from "./AddPeople";
import { AddMovieReducerAction } from "@/types/reducers.types";
import { createClient } from "@/lib/supabase/client";
import { ActionType } from "@/types/reducers.types";

type AddMovieFormProps = {
  categories: Tables<"categories">[];
  languages: Tables<"languages">[];
  nationalities: Tables<"nationalities">[];
  roles: Tables<"roles">[];
};

const RATINGS = ["1", "2", "3", "4", "5"];
const CERTIFICATIONS = ["U", "PG", "12", "15", "18"];
const FORMATS = ["DVD", "BLU-R"];

const initialState = {
  title: "",
  year: "",
  format: "DVD",
  certification: "PG",
  review: "",
  rating: "1",
  runningTime: "",
  imageUrl: "",
  categories: [] as string[],
  languages: [] as string[],
  nationalities: [] as string[],
  cast: [] as { personId: string; roleId: string }[],
};

const reducer = (state: typeof initialState, action: AddMovieReducerAction) => {
  switch (action.type) {
    case ActionType.TitleInput:
      return { ...state, title: action.payload };
    case ActionType.YearInput:
      return { ...state, year: action.payload };
    case ActionType.FormatInput:
      return { ...state, format: action.payload };
    case ActionType.CertificationInput:
      return { ...state, certification: action.payload };
    case ActionType.ReviewInput:
      return { ...state, review: action.payload };
    case ActionType.RatingInput:
      return { ...state, rating: action.payload };
    case ActionType.RunningTimeInput:
      return { ...state, runningTime: action.payload };
    case ActionType.ImageUrlInput:
      return { ...state, imageUrl: action.payload };
    case ActionType.CategoryInput:
      return { ...state, categories: action.payload };
    case ActionType.LanguageInput:
      return { ...state, languages: action.payload };
    case ActionType.NationalityInput:
      return { ...state, nationalities: action.payload };
    case ActionType.OmdbUpdate:
      return {
        ...state,
        title: action.payload.Title,
        year: action.payload.Year,
        review: action.payload.Plot,
        runningTime: extractLastNumber(action.payload.Runtime),
        imageUrl: action.payload.Poster,
      };
    case ActionType.AddCastMember:
      return { ...state, cast: [...state.cast, action.payload] };
    default:
      return state;
  }
};

const AddMovieForm = ({
  categories,
  languages,
  nationalities,
  roles,
}: AddMovieFormProps) => {
  const supabase = createClient();

  const [state, dispatch] = useReducer(reducer, initialState);

  const categoriesList = categories.map((category) => {
    return { label: category.description, value: category.id.toString() };
  });

  const languagesList = languages.map((language) => {
    return { label: language.language, value: language.id.toString() };
  });

  const nationalitiesList = nationalities.map((nationality) => {
    return { label: nationality.country, value: nationality.id.toString() };
  });

  async function submitForm() {
    const { data: titlesData, error: titlesError } = await supabase
      .from("titles")
      .insert({
        title: state.title,
        date_1: state.year,
        format: state.format,
        certification: state.certification,
        review: state.review,
        rating: parseInt(state.rating),
        runningtime: parseInt(state.runningTime),
        image_url: state.imageUrl,
      })
      .select();

    if (titlesError || !titlesData) throw new Error("Error inserting title");

    const titleId = titlesData[0].id;

    if (state.categories.length > 0) {
      const { error: categoriesError } = await supabase
        .from("titles2categories")
        .insert(
          state.categories.map((category) => {
            return {
              title_id: titleId,
              cat_id: parseInt(category),
            };
          })
        );
      if (categoriesError) throw new Error("Error inserting categories");
    }

    if (state.languages.length > 0) {
      const { error: languagesError } = await supabase
        .from("titles2languages")
        .insert(
          state.languages.map((language) => {
            return {
              title_id: titleId,
              language_id: parseInt(language),
              is_primary: true,
            };
          })
        );
      if (languagesError) throw new Error("Error inserting languages");
    }

    if (state.nationalities.length > 0) {
      const { error: nationalitiesError } = await supabase
        .from("titles2nationalities")
        .insert(
          state.nationalities.map((nationality) => {
            return {
              title_id: titleId,
              nationality_id: parseInt(nationality),
            };
          })
        );
      if (nationalitiesError) throw new Error("Error inserting nationalities");
    }

    if (state.cast.length > 0) {
      const { error: castError } = await supabase.from("titles2people").insert(
        state.cast.map((person) => {
          return {
            title_id: titleId,
            person_id: parseInt(person.personId),
            role_id: parseInt(person.roleId),
          };
        })
      );
      if (castError) throw new Error("Error inserting cast");
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
    >
      <div className="flex">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            value={state.title}
            onChange={(e) =>
              dispatch({ type: ActionType.TitleInput, payload: e.target.value })
            }
            required
          />
        </div>
        <div>
          <Label htmlFor="year">Year</Label>
          <Input
            type="text"
            id="year"
            value={state.year}
            onChange={(e) =>
              dispatch({ type: ActionType.YearInput, payload: e.target.value })
            }
            required
          />
        </div>
        <Button
          variant="secondary"
          onClick={async (e) => {
            e.preventDefault();
            const data = await queryOmdb(state.title, state.year);
            if (data.Response === "True") {
              dispatch({ type: ActionType.OmdbUpdate, payload: data });
            }
          }}
        >
          Fill from OMDb
        </Button>
      </div>
      <Label htmlFor="running-time">Running time</Label>
      <Input
        type="number"
        id="running-time"
        value={state.runningTime}
        onChange={(e) =>
          dispatch({
            type: ActionType.RunningTimeInput,
            payload: e.target.value,
          })
        }
        required
      />
      <Label htmlFor="image-url">Image url</Label>
      <Input
        type="url"
        id="image-url"
        value={state.imageUrl}
        onChange={(e) =>
          dispatch({ type: ActionType.ImageUrlInput, payload: e.target.value })
        }
      />
      <Label htmlFor="review">Review</Label>
      <Textarea
        id="review"
        value={state.review}
        onChange={(e) =>
          dispatch({ type: ActionType.ReviewInput, payload: e.target.value })
        }
        required
      />
      <Label>Format</Label>
      <Select
        value={state.format}
        onValueChange={(format) => {
          dispatch({ type: ActionType.FormatInput, payload: format });
        }}
      >
        <SelectTrigger>{state.format}</SelectTrigger>
        <SelectContent>
          {FORMATS.map((format) => {
            return (
              <SelectItem value={format} key={format}>
                {format}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Label>Certification</Label>
      <Select
        value={state.certification}
        onValueChange={(certification) => {
          dispatch({
            type: ActionType.CertificationInput,
            payload: certification,
          });
        }}
        required
      >
        <SelectTrigger>{state.certification}</SelectTrigger>
        <SelectContent>
          {CERTIFICATIONS.map((certification) => {
            return (
              <SelectItem value={certification} key={certification}>
                {certification}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Label>Rating</Label>
      <Select
        value={state.rating}
        onValueChange={(rating) =>
          dispatch({ type: ActionType.RatingInput, payload: rating })
        }
        required
      >
        <SelectTrigger>
          <SelectValue>{state.rating}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {RATINGS.map((rating) => {
            return (
              <SelectItem value={rating} key={rating}>
                {rating}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Label>Categories</Label>
      <MultiSelect
        options={categoriesList}
        onValueChange={(category) => {
          dispatch({ type: ActionType.CategoryInput, payload: category });
        }}
        defaultValue={state.categories}
        placeholder="Categories"
      />
      <Label>Languages</Label>
      <MultiSelect
        options={languagesList}
        onValueChange={(language) => {
          dispatch({ type: ActionType.LanguageInput, payload: language });
        }}
        defaultValue={state.languages}
        placeholder="Languages"
      />
      <Label>Nationalities</Label>
      <MultiSelect
        options={nationalitiesList}
        onValueChange={(nationality) => {
          dispatch({ type: ActionType.NationalityInput, payload: nationality });
        }}
        defaultValue={state.nationalities}
        placeholder="Nationalities"
      />
      <div className="flex">
        <AddPeople roles={roles} dispatch={dispatch} />
      </div>
      {state.cast.map((person, index) => {
        return (
          <div key={index}>
            <p>{person.personId}</p>
            <p>{person.roleId}</p>
          </div>
        );
      })}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddMovieForm;
