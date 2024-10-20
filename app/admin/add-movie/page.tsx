import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import AddMovieForm from "@/app/components/admin/add-movie/AddMovieForm";

export default async function AddMovie() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const { data: categories, error: categoriesError } = await supabase
    .from("categories")
    .select("*")
    .order("description", { ascending: true });
  const { data: languages, error: languagesError } = await supabase
    .from("languages")
    .select("*")
    .order("language", { ascending: true });
  const { data: nationalities, error: nationalitiesError } = await supabase
    .from("nationalities")
    .select("*")
    .order("country", { ascending: true });
  const { data: roles, error: rolesError } = await supabase
    .from("roles")
    .select("*")
    .order("role_name", { ascending: true });

  if (categoriesError) return <p>{categoriesError.message}</p>;
  if (languagesError) return <p>{languagesError.message}</p>;
  if (nationalitiesError) return <p>{nationalitiesError.message}</p>;
  if (rolesError) return <p>{rolesError.message}</p>;

  return (
    <div>
      <p>Hello {data.user.email}</p>
      <AddMovieForm
        categories={categories}
        languages={languages}
        nationalities={nationalities}
        roles={roles}
      />
    </div>
  );
}
