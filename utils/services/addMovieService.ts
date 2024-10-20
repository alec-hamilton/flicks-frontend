import { MovieFormState } from "@/constants/addMovieForm";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const movieService = {
  async submitMovie(state: MovieFormState) {
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
    await Promise.all([
      this.insertCategories(titleId, state.categories),
      this.insertLanguages(titleId, state.languages),
      this.insertNationalities(titleId, state.nationalities),
      this.insertCast(
        titleId,
        state.cast.map((member) => {
          return {
            personId: member.person.id,
            roleId: member.role.id,
          };
        })
      ),
    ]);
  },

  async insertCategories(titleId: number, categories: string[]) {
    if (!categories.length) return;
    const { error } = await supabase.from("titles2categories").insert(
      categories.map((category) => ({
        title_id: titleId,
        cat_id: parseInt(category),
      }))
    );
    if (error) throw new Error("Error inserting categories");
  },

  async insertLanguages(titleId: number, languages: string[]) {
    if (!languages.length) return;
    const { error } = await supabase.from("titles2languages").insert(
      languages.map((language) => ({
        title_id: titleId,
        language_id: parseInt(language),
        is_primary: true,
      }))
    );
    if (error) throw new Error("Error inserting languages");
  },

  async insertNationalities(titleId: number, nationalities: string[]) {
    if (!nationalities.length) return;
    const { error } = await supabase.from("titles2nationalities").insert(
      nationalities.map((nationality) => ({
        title_id: titleId,
        nationality_id: parseInt(nationality),
      }))
    );
    if (error) throw new Error("Error inserting nationalities");
  },

  async insertCast(
    titleId: number,
    cast: { personId: string; roleId: string }[]
  ) {
    if (!cast.length) return;
    const { error } = await supabase.from("titles2people").insert(
      cast.map((person) => ({
        title_id: titleId,
        person_id: parseInt(person.personId),
        role_id: parseInt(person.roleId),
      }))
    );
    if (error) throw new Error("Error inserting cast");
  },
};
