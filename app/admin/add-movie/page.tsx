import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AddMovieForm from "@/app/components/admin/add-movie/AddMovieForm";

export default async function AddMovie() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <p>Hello {data.user.email}</p>
      <AddMovieForm />
    </div>
  );
}
