import Link from "next/link";

const newMovies = [
  {
    id: "tt14208870",
    title: "The Fabelmans",
    year: "2022",
  },
  {
    id: "tt10293406",
    title: "The Power of the Dog",
    year: "2021",
  },
  {
    id: "tt14444726",
    title: "Tár",
    year: "2022",
  },
  {
    id: "tt7405458",
    title: "A Man Called Otto",
    year: "2022",
  },
  {
    id: "tt10640346",
    title: "Babylon",
    year: "2022",
  },
];

const NewToRent = () => {
  return (
    <section className="p-4 md:p-6 my-4 md:my-6 border border-primary bg-black2">
      <h2 className="pb-4 md:pb-6">New to rent...</h2>
      <table className="w-full border border-primary">
        <thead className="border-b border-primary">
          <tr>
            <th className="p-2 text-start border-r border-primary">Title</th>
            <th className="p-2 text-center">Year</th>
          </tr>
        </thead>
        <tbody>
          {newMovies.map(({ id, title, year }) => {
            return (
              <tr key={id} className="border-b border-primary">
                <td className="p-2 border-r border-primary">
                  <Link
                    href={`/movie/${id}`}
                    className="underline lg:hover:text-fuchsia-400"
                  >
                    {title}
                  </Link>
                </td>
                <td className="p-2 text-center">{year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default NewToRent;
