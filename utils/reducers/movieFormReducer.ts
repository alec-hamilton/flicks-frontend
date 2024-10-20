import { ActionType, AddMovieReducerAction } from "@/types/reducers.types";
import { initialState, MovieFormState } from "@/constants/addMovieForm";
import { extractLastNumber } from "@/utils/helpers/helpers";

export const movieFormReducer = (
  state: MovieFormState,
  action: AddMovieReducerAction
) => {
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
        title: action.payload.Title.toUpperCase(),
        year: action.payload.Year,
        review: action.payload.Plot,
        runningTime: extractLastNumber(action.payload.Runtime),
        imageUrl: action.payload.Poster,
      };
    case ActionType.AddCastMember:
      return { ...state, cast: [...state.cast, action.payload] };
    case ActionType.ResetForm:
      return initialState;
    default:
      return state;
  }
};
