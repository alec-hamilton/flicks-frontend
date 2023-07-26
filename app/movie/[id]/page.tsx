type MoviePageProps = {
  params: {
    id: string;
  };
};

const MoviePage = ({ params: { id } }: MoviePageProps) => {
  return <div>ID: {id}</div>;
};

export default MoviePage;
