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
import { MultiSelect } from "@/components/ui/multi-select";
import { Tables } from "@/types/database.types";
import AddPeople from "./AddPeople";
import { useReducer, useState } from "react";
import { queryOmdb } from "@/app/actions";
import { ActionType } from "@/types/reducers.types";
import {
  RATINGS,
  CERTIFICATIONS,
  FORMATS,
  initialState,
} from "@/constants/addMovieForm";
import { movieFormReducer } from "@/utils/reducers/movieFormReducer";
import { movieService } from "@/utils/services/addMovieService";
import { areFormInputsValid } from "@/utils/helpers/formValidation";
import FormCast from "./FormCast";

type Props = {
  categories: Tables<"categories">[];
  languages: Tables<"languages">[];
  nationalities: Tables<"nationalities">[];
  roles: Tables<"roles">[];
};

const AddMovieForm = ({
  categories,
  languages,
  nationalities,
  roles,
}: Props) => {
  const [state, dispatch] = useReducer(movieFormReducer, initialState);

  const [isLoading, setIsLoading] = useState(false);

  const categoriesList = categories.map((category) => {
    return { label: category.description, value: category.id.toString() };
  });

  const languagesList = languages.map((language) => {
    return { label: language.language, value: language.id.toString() };
  });

  const nationalitiesList = nationalities.map((nationality) => {
    return { label: nationality.country, value: nationality.id.toString() };
  });

  const handleOmdbFill = async (e: React.MouseEvent) => {
    e.preventDefault();
    const data = await queryOmdb(state.title, state.year);
    if (data.Response === "True") {
      dispatch({ type: ActionType.OmdbUpdate, payload: data });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!areFormInputsValid(state)) return;
    setIsLoading(true);
    await movieService.submitMovie(state);
    dispatch({ type: ActionType.ResetForm });
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 items-end gap-x-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            value={state.title}
            onChange={(e) =>
              dispatch({
                type: ActionType.TitleInput,
                payload: e.target.value.toUpperCase(),
              })
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
        <Button variant="secondary" onClick={handleOmdbFill}>
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
        disabled
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
      <div className="grid grid-cols-3 gap-x-4">
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </div>
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
      <AddPeople roles={roles} dispatch={dispatch} />

      <FormCast cast={state.cast} />

      <Button type="submit" disabled={isLoading}>
        Submit
      </Button>
    </form>
  );
};

export default AddMovieForm;
