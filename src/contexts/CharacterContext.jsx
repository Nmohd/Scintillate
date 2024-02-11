/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";

const CharacterContext = createContext();
const BASEURL = "https://swapi.dev/api/";

// eslint-disable-next-line react/prop-types
function CharacterProvider({ children }) {
  const [characterData, setCharacterData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState({});

  let [counter, setCounter] = useState(1);

  console.log(counter);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASEURL}people/`);
        const data = await res.json();
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
      setCurrentCharacter(data);
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
      const res = await fetch(`${BASEURL}people/?page=${counter}`);
      const data = await res.json();
      setCharacterData(data);
      setIsLoading(false);
    } catch {
      alert("There was an error loading data....");
    } finally {
      setIsLoading(false);
    }
  }

  let onClickNextHandler = () => {
    if (counter == 9) return alert("You are on the last page...");
    setCounter(counter + 1);
    console.log(counter + 1);
    pagination(counter + 1);
    localStorage.setItem("myCat", "Tom");
    sessionStorage.setItem("mydog", "sheeba");
  };

  let onClickPreviousHandler = () => {
    if (counter <= 1) return alert("You are on the first page...");
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
        counter,
        onClickNextHandler,
        onClickPreviousHandler,
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
