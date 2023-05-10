import CharacterCard from "./Charactercard";
import PropTypes from "prop-types";

const CharList = ({ data }) => {
  return (
    <div>
      {data.map((char, index) => {
        return <CharacterCard key={index} {...char} />;
      })}
    </div>
  );
};

export default CharList;

CharList.propTypes = {
  data: PropTypes.object
};
