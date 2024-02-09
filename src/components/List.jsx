import { useCharacter } from "../contexts/CharacterContext";
import { Spinner } from "@chakra-ui/react";

const List = () => {
  const { characterData, isLoading } = useCharacter();
  if (isLoading) return <Spinner />;
  // console.log("character data:", characterData);
  let characters = characterData.results;
  console.log(characters);
  return <div>List</div>;
};

export default List;
