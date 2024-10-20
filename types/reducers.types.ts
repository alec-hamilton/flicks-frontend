import { OmdbResponse } from "@/types/omdbResponse.types";

export enum ActionType {
  TitleInput = "titleInput",
  YearInput = "yearInput",
  FormatInput = "formatInput",
  CertificationInput = "certificationInput",
  ReviewInput = "reviewInput",
  RatingInput = "ratingInput",
  RunningTimeInput = "runningTimeInput",
  ImageUrlInput = "imageUrlInput",
  CategoryInput = "categoryInput",
  LanguageInput = "languageInput",
  NationalityInput = "nationalityInput",
  OmdbUpdate = "omdbUpdate",
  AddCastMember = "addCastMember",
  ResetForm = "resetForm",
}

export type AddMovieReducerAction =
  | { type: ActionType.TitleInput; payload: string }
  | { type: ActionType.YearInput; payload: string }
  | { type: ActionType.FormatInput; payload: string }
  | { type: ActionType.CertificationInput; payload: string }
  | { type: ActionType.ReviewInput; payload: string }
  | { type: ActionType.RatingInput; payload: string }
  | { type: ActionType.RunningTimeInput; payload: string }
  | { type: ActionType.ImageUrlInput; payload: string }
  | { type: ActionType.CategoryInput; payload: string[] }
  | { type: ActionType.LanguageInput; payload: string[] }
  | { type: ActionType.NationalityInput; payload: string[] }
  | { type: ActionType.OmdbUpdate; payload: OmdbResponse }
  | {
      type: ActionType.AddCastMember;
      payload: {
        person: { id: string; name: string };
        role: { id: string; name: string };
      };
    }
  | { type: ActionType.ResetForm };
