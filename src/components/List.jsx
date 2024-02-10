import { useCharacter } from "../contexts/CharacterContext";
import { Spinner } from "@chakra-ui/react";
import SingleCharacter from "./SingleCharacter";
import { useState } from "react";

const List = () => {
  const {
    characterData,
    isLoading,
    // pagination,
    // paginatedData,
    counter,
    onClickNextHandler,
    onClickPreviousHandler,
  } = useCharacter();

  if (isLoading) return <Spinner />;
  // console.log(characterData);

  let characters = characterData.results;

  if (characters == undefined) return <Spinner />;

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
