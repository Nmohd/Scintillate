import { useCharacter } from "../contexts/CharacterContext";
import { Spinner } from "@chakra-ui/react";
import SingleCharacter from "./SingleCharacter";

const List = () => {
  const { characterData, isLoading } = useCharacter();
  if (isLoading) return <Spinner />;
  // console.log("character data:", characterData);
  let addId = characterData.results;
  if (addId == undefined) return <Spinner />;
  let characters = addId.map((e, i) => {
    return { ...e, id: i + 1 };
  });

  // if (characters == undefined) return <Spinner />;
  // console.log(characters);

  return (
    <ul>
      hi
      {characters.map((e) => (
        <SingleCharacter characterDetails={e} key={e.id} />
      ))}
    </ul>
  );
};

export default List;
