"use server";

export async function queryOmdb(title: string, year: string) {
  const url = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${title}&y=${year}`;

  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
}
