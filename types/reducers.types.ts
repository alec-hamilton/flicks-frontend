import { OmdbResponse } from "@/types/omdbResponse.types";

export type AddMovieReducerAction =
  | { type: "titleInput"; payload: string }
  | { type: "yearInput"; payload: string }
  | { type: "formatInput"; payload: string }
  | { type: "certificationInput"; payload: string }
  | { type: "reviewInput"; payload: string }
  | { type: "ratingInput"; payload: string }
  | { type: "runningTimeInput"; payload: string }
  | { type: "imageUrlInput"; payload: string }
  | { type: "categoryInput"; payload: string[] }
  | { type: "languageInput"; payload: string[] }
  | { type: "nationalityInput"; payload: string[] }
  | { type: "omdbUpdate"; payload: OmdbResponse }
  | { type: "addCastMember"; payload: { personId: string; roleId: string } };
