/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";

const CharacterContext = createContext();
const BASEURL = "https://swapi.dev/api/";

// eslint-disable-next-line react/prop-types
function CharacterProvider({ children }) {
  const [characterData, setCharacterData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState({});
  //   const [paginatedData, setPaginatedData] = useState({});
  let [counter, setCounter] = useState(1);
  const [like, setLike] = useState(false);
  console.log(counter);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASEURL}people/`);
        const data = await res.json();
        // console.log("data", data);
        setCharacterData(data);
        setIsLoading(false);
      } catch {
        alert("There was an error loading data....");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCharacters();
  }, []);

  async function getCharacter(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASEURL}people/${id}`);
      const data = await res.json();
      //   console.log("data", data);
      setCurrentCharacter(data);
      //   console.log("loading false after this");
      setIsLoading(false);
    } catch {
      alert("There was an error loading data....");
    } finally {
      setIsLoading(false);
    }
  }

  async function pagination(counter) {
    try {
      console.log("context counter:", counter);
      setIsLoading(true);
      //   const res = await fetch(`${BASEURL}people/page=${1}`);
      const res = await fetch(`${BASEURL}people/?page=${counter}`);
      const data = await res.json();
      //   console.log("data", data);
      setCharacterData(data);
      //   console.log(paginatedData);
      setIsLoading(false);
    } catch {
      alert("There was an error loading data....page");
    } finally {
      setIsLoading(false);
    }
  }

  let onClickNextHandler = () => {
    if (counter == 9) return;
    setCounter(counter + 1);
    console.log(counter + 1);
    pagination(counter + 1);
  };
  // console.log(paginatedData);

  let onClickPreviousHandler = () => {
    if (counter <= 1) return;
    setCounter(counter - 1);
    console.log(counter - 1);
    pagination(counter - 1);
  };

  return (
    <CharacterContext.Provider
      value={{
        characterData,
        isLoading,
        currentCharacter,
        getCharacter,
        like,
        counter,
        onClickNextHandler,
        onClickPreviousHandler,
        pagination,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
function useCharacter() {
  const context = useContext(CharacterContext);
  if (context === undefined)
    throw new Error("CharacterContext was used outside the CharacterProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CharacterProvider, useCharacter };
