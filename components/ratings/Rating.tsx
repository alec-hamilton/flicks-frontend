import {
  MdOutlineStarBorder as Empty,
  MdOutlineStar as Filled,
} from "react-icons/md";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  const filled = Array.from({ length: rating }, (_, i) => i);
  const empty = Array.from({ length: 5 - rating }, (_, i) => i);

  return (
    <div className="flex text-fuchsia-400">
      {filled.map((_, index) => (
        <Filled key={index} size="1.5rem" />
      ))}
      {empty.map((_, index) => (
        <Empty key={index} size="1.5rem" />
      ))}
    </div>
  );
};

export default Rating;
