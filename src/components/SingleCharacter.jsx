/* eslint-disable react/prop-types */

// import { useCharacter } from "../contexts/CharacterContext";
import { Link } from "react-router-dom";
import { extractNumberFromUrl } from "../utils/supportingFunctions";
import { useEffect, useState } from "react";

const SingleCharacter = ({ characterDetails }) => {
  // State to track whether the character is liked
  const [liked, setLiked] = useState(false);
  // const { currentCharacter } = useCharacter();
  const { name, url, favourite } = characterDetails;
  //   console.log("cdd", characterDetails);
  console.log(favourite);

  const urlId = extractNumberFromUrl(url);
  //   console.log(urlId);

  // Load liked characters from local storage when component mounts
  useEffect(() => {
    const likedCharacters =
      JSON.parse(localStorage.getItem("likedCharacters")) || {};
    setLiked(likedCharacters[name] || false);
  }, [name]);

  // Function to handle liking/unliking a character
  const toggleLike = () => {
    const updatedLiked = !liked;
    setLiked(updatedLiked);

    // Update liked characters in local storage
    const likedCharacters =
      JSON.parse(localStorage.getItem("likedCharacters")) || {};
    likedCharacters[name] = updatedLiked;
    localStorage.setItem("likedCharacters", JSON.stringify(likedCharacters));
  };

  return (
    <li>
      <Link to={`characterDetails/${urlId}`}>{name}</Link>

      <button onClick={toggleLike}>{liked ? "Unlike" : "Like"}</button>
    </li>
  );
};

export default SingleCharacter;
