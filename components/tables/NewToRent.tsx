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
          <tr className="border-b border-primary">
            <td className="p-2 border-r border-primary">
              Indiana Jones and the Kingdom of the mega crystal
            </td>
            <td className="p-2 text-center">1984</td>
          </tr>
          <tr className="border-b border-primary">
            <td className="p-2 border-r border-primary">
              Indiana Jones and the Kingdom of the mega crystal
            </td>
            <td className="p-2 text-center">1984</td>
          </tr>
          <tr className="border-b border-primary">
            <td className="p-2 border-r border-primary">
              Indiana Jones and the Kingdom of the mega crystal
            </td>
            <td className="p-2 text-center">1984</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default NewToRent;
