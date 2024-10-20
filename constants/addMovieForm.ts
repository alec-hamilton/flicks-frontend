export const RATINGS = ["1", "2", "3", "4", "5"] as const;
export const CERTIFICATIONS = ["U", "PG", "12", "15", "18"] as const;
export const FORMATS = ["DVD", "BLU-R"] as const;

export const initialState = {
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
  cast: [] as {
    person: { id: string; name: string };
    role: { id: string; name: string };
  }[],
};

export type MovieFormState = typeof initialState;
