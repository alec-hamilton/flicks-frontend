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
import { BiX } from "react-icons/bi";
import { AddMovieReducerAction } from "@/types/reducers.types";

type AddMovieFormProps = {
  categories: Tables<"categories">[];
  languages: Tables<"languages">[];
  nationalities: Tables<"nationalities">[];
  roles: Tables<"roles">[];
};

const ratings = ["1", "2", "3", "4", "5"];
const certifications = ["U", "PG", "12", "15", "18"];
const formats = ["DVD", "BLU-R"];

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
  people: [{ id: "" }],
};

const reducer = (state: typeof initialState, action: AddMovieReducerAction) => {
  switch (action.type) {
    case "titleInput":
      return { ...state, title: action.payload };
    case "yearInput":
      return { ...state, year: action.payload };
    case "formatInput":
      return { ...state, format: action.payload };
    case "certificationInput":
      return { ...state, certification: action.payload };
    case "reviewInput":
      return { ...state, review: action.payload };
    case "ratingInput":
      return { ...state, rating: action.payload };
    case "runningTimeInput":
      return { ...state, runningTime: action.payload };
    case "imageUrlInput":
      return { ...state, imageUrl: action.payload };
    case "categoryInput":
      return { ...state, categories: action.payload };
    case "languageInput":
      return { ...state, languages: action.payload };
    case "nationalityInput":
      return { ...state, nationalities: action.payload };
    case "omdbUpdate":
      return {
        ...state,
        title: action.payload.Title,
        year: action.payload.Year,
        review: action.payload.Plot,
        runningTime: extractLastNumber(action.payload.Runtime),
        imageUrl: action.payload.Poster,
      };
    case "addPersonRow":
      return {
        ...state,
        people: [...state.people, { id: "" }],
      };
    case "removePersonRow":
      console.log(action.payload);
      return {
        ...state,
        people: state.people.filter((_, index) => {
          console.log(
            "Comparing index:",
            index,
            "with payload:",
            action.payload
          );
          return index !== action.payload;
        }),
      };

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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(state);
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
              dispatch({ type: "titleInput", payload: e.target.value })
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
              dispatch({ type: "yearInput", payload: e.target.value })
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
              dispatch({ type: "omdbUpdate", payload: data });
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
          dispatch({ type: "runningTimeInput", payload: e.target.value })
        }
        required
      />
      <Label htmlFor="image-url">Image url</Label>
      <Input
        type="url"
        id="image-url"
        value={state.imageUrl}
        onChange={(e) =>
          dispatch({ type: "imageUrlInput", payload: e.target.value })
        }
      />
      <Label htmlFor="review">Review</Label>
      <Textarea
        id="review"
        value={state.review}
        onChange={(e) =>
          dispatch({ type: "reviewInput", payload: e.target.value })
        }
        required
      />
      <Label>Format</Label>
      <Select
        value={state.format}
        onValueChange={(format) => {
          dispatch({ type: "certificationInput", payload: format });
        }}
      >
        <SelectTrigger>{state.format}</SelectTrigger>
        <SelectContent>
          {formats.map((format) => {
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
          dispatch({ type: "certificationInput", payload: certification });
        }}
        required
      >
        <SelectTrigger>{state.certification}</SelectTrigger>
        <SelectContent>
          {certifications.map((certification) => {
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
          dispatch({ type: "ratingInput", payload: rating })
        }
        required
      >
        <SelectTrigger>
          <SelectValue>{state.rating}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {ratings.map((rating) => {
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
          dispatch({ type: "categoryInput", payload: category });
        }}
        defaultValue={state.categories}
        placeholder="Categories"
      />
      <Label>Languages</Label>
      <MultiSelect
        options={languagesList}
        onValueChange={(language) => {
          dispatch({ type: "languageInput", payload: language });
        }}
        defaultValue={state.languages}
        placeholder="Languages"
      />
      <Label>Nationalities</Label>
      <MultiSelect
        options={nationalitiesList}
        onValueChange={(nationality) => {
          dispatch({ type: "nationalityInput", payload: nationality });
        }}
        defaultValue={state.nationalities}
        placeholder="Nationalities"
      />
      {state.people.map((person, index) => {
        return (
          <div key={index} className="flex">
            <AddPeople roles={roles} />
            <Button
              type="button"
              onClick={() => dispatch({ type: "addPersonRow" })}
            >
              add another
            </Button>
            <button
              type="button"
              onClick={() => {
                if (state.people.length > 1) {
                  dispatch({ type: "removePersonRow", payload: index });
                }
              }}
            >
              <BiX />
            </button>
          </div>
        );
      })}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddMovieForm;
