import { useCharacter } from "../contexts/CharacterContext";
import { List, Container } from "@chakra-ui/react";

import SingleCharacter from "./SingleCharacter";
import Loading from "./Loading";
import Footer from "./Footer";

const CharacterList = () => {
  const { characterData } = useCharacter();

  // if (isLoading) return <Loading />;

  let characters = characterData.results;
  if (characters == undefined) return <Loading />;

  console.log(characters);

  return (
    <>
      <Container mt={10} pt={4} mb={10}>
        <List spacing={3}>
          {characters.map((e) => (
            <SingleCharacter characterDetails={e} key={e.name} />
          ))}
        </List>
      </Container>

      <Footer />
    </>
  );
};

export default CharacterList;
