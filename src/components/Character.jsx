import { useEffect } from "react";
import { useCharacter } from "../contexts/CharacterContext";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { fetchFilmTitles } from "../utils/supportingFunctions";

const Character = () => {
  const { getCharacter, isLoading, currentCharacter } = useCharacter();
  const { id } = useParams();
  //   console.log(id);
  //   console.log(currentCharacter);

  useEffect(() => {
    getCharacter(id);
  }, [id]);
  if (isLoading) return <Spinner />;
  const { name, films } = currentCharacter;
  if (films == undefined) return <Spinner />;
//   console.log(films);

  (async () => {
    try {
      const titles = await fetchFilmTitles(films);
        console.log("Film titles:", titles);
      return titles;
    } catch (error) {
      console.error("Error fetching film titles:", error);
    }
  })();

  return <div>{name}</div>;
};

export default Character;
