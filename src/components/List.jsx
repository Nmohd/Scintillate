import { useCharacter } from "../contexts/CharacterContext";
import { Spinner } from "@chakra-ui/react";
import SingleCharacter from "./SingleCharacter";

const List = () => {
  const {
    characterData,
    isLoading,
    counter,
    onClickNextHandler,
    onClickPreviousHandler,
  } = useCharacter();

  if (isLoading) return <Spinner />;

  let addFav = characterData.results;
  if (addFav == undefined) return <Spinner />;

  const characters = addFav.map((character) => {
    return { ...character, favourite: false }; // You can use a different method to generate unique IDs if needed
  });
  console.log(characters);

  return (
    <>
      <ul>
        {characters.map((e) => (
          <SingleCharacter characterDetails={e} key={e.name} />
        ))}
      </ul>
      <button onClick={onClickPreviousHandler}>Prvious</button>
      {counter}
      <button onClick={onClickNextHandler}>Next</button>
    </>
  );
};

export default List;
