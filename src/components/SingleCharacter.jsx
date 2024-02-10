/* eslint-disable react/prop-types */

import { useCharacter } from "../contexts/CharacterContext";
import { Link, Navigate } from "react-router-dom";
import { extractNumberFromUrl } from "../utils/supportingFunctions";

const SingleCharacter = ({ characterDetails }) => {
  const { currentCharacter } = useCharacter();
  const { name, url } = characterDetails;
  //   console.log("cdd", characterDetails);

  const urlId = extractNumberFromUrl(url);
  //   console.log(urlId);

  return (
    <li>
      <Link to={`characterDetails/${urlId}`}>{name}</Link>
    </li>
  );
};

export default SingleCharacter;
