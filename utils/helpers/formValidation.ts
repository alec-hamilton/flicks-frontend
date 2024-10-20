import { MovieFormState } from "@/constants/addMovieForm";

export const areFormInputsValid = (state: MovieFormState) => {
  if (!state.categories.length) {
    alert("Please select at least one category");
    return false;
  }
  if (!state.languages.length) {
    alert("Please select at least one language");
    return false;
  }
  if (!state.nationalities.length) {
    alert("Please select at least one nationality");
    return false;
  }
  if (!state.cast.length) {
    alert("Please add at least one cast member");
    return false;
  }
  return true;
};
