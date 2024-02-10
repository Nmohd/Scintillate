/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";

const CharacterContext = createContext();
const BASEURL = "https://swapi.dev/api/";

// eslint-disable-next-line react/prop-types
function CharacterProvider({ children }) {
  const [characterData, setCharacterData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState({});

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

  return (
    <CharacterContext.Provider
      value={{ characterData, isLoading, currentCharacter, getCharacter }}
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
