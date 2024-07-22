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
import { OmdbResponse } from "@/types/omdbResponse.types";

type ReducerAction =
  | { type: "titleInput"; payload: string }
  | { type: "yearInput"; payload: string }
  | { type: "formatInput"; payload: string }
  | { type: "certificationInput"; payload: string }
  | { type: "reviewInput"; payload: string }
  | { type: "ratingInput"; payload: string }
  | { type: "runningTimeInput"; payload: string }
  | { type: "imageUrlInput"; payload: string }
  | { type: "omdbUpdate"; payload: OmdbResponse };

const ratings = ["1", "2", "3", "4", "5"];

const initialState = {
  title: "",
  year: "",
  format: "",
  certification: "",
  review: "",
  rating: "1",
  runningTime: "",
  imageUrl: "",
};

type State = typeof initialState;

const reducer = (state: State, action: ReducerAction) => {
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
    case "omdbUpdate":
      return {
        ...state,
        title: action.payload.Title,
        year: action.payload.Year,
        review: action.payload.Plot,
        runningTime: extractLastNumber(action.payload.Runtime),
        imageUrl: action.payload.Poster,
      };

    default:
      return state;
  }
};

const AddMovieForm = () => {
  const [state, dispatch] = useReducer<React.Reducer<State, ReducerAction>>(
    reducer,
    initialState
  );

  return (
    <form>
      <div className="flex">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={state.title}
            onChange={(e) =>
              dispatch({ type: "titleInput", payload: e.target.value })
            }
          />
        </div>
        <div>
          <Label htmlFor="year">Year</Label>
          <Input
            type="text"
            id="year"
            name="year"
            value={state.year}
            onChange={(e) =>
              dispatch({ type: "yearInput", payload: e.target.value })
            }
          />
        </div>
        <Button
          variant="secondary"
          onClick={async (e) => {
            e.preventDefault();
            const data = await queryOmdb(state.title, state.year);
            dispatch({ type: "omdbUpdate", payload: data });
          }}
        >
          Fill from OMDb
        </Button>
      </div>
      <Label htmlFor="format">Format</Label>
      <Input
        type="text"
        id="format"
        value={state.format}
        onChange={(e) =>
          dispatch({ type: "formatInput", payload: e.target.value })
        }
      />
      <Label htmlFor="certification">Certification</Label>
      <Input
        type="text"
        id="certification"
        value={state.certification}
        onChange={(e) =>
          dispatch({ type: "certificationInput", payload: e.target.value })
        }
      />
      <Label htmlFor="review">Review</Label>
      <Textarea
        id="review"
        value={state.review}
        onChange={(e) =>
          dispatch({ type: "reviewInput", payload: e.target.value })
        }
      />
      <Select
        value={state.rating}
        onValueChange={(rating) =>
          dispatch({ type: "ratingInput", payload: rating })
        }
        name="rating"
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
      <Label htmlFor="running-time">Running time</Label>
      <Input
        type="number"
        id="running-time"
        value={state.runningTime}
        onChange={(e) =>
          dispatch({ type: "runningTimeInput", payload: e.target.value })
        }
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
    </form>
  );
};

export default AddMovieForm;
