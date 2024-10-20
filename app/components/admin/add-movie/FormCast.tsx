import { Button } from "@/components/ui/button";
import { MovieFormState } from "@/constants/addMovieForm";

type Props = {
  cast: MovieFormState["cast"];
};

const FormCast = ({ cast }: Props) => {
  function removeCastMember() {
    // dispatch({ type: ActionType.RemoveCastMember, payload: "" });
  }
  return (
    <div>
      {cast.map((member, index) => {
        return (
          <div key={index}>
            <p>{member.person.name}</p>
            <p>{member.role.name}</p>
            <Button>Remove</Button>
          </div>
        );
      })}
    </div>
  );
};

export default FormCast;
