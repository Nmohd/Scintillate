/* eslint-disable react/prop-types */

// import { useCharacter } from "../contexts/CharacterContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { extractNumberFromUrl } from "../utils/supportingFunctions";
import { PiHeartStraightFill, PiHeartStraightLight } from "react-icons/pi";
import { Avatar, ListItem, Box, Container, Flex } from "@chakra-ui/react";

const SingleCharacter = ({ characterDetails }) => {
  const [liked, setLiked] = useState(false);
  const { name, url } = characterDetails;

  const urlId = extractNumberFromUrl(url);

  useEffect(() => {
    const likedCharacters =
      JSON.parse(localStorage.getItem("likedCharacters")) || {};
    setLiked(likedCharacters[name] || false);
  }, [name]);

  const toggleLike = () => {
    const updatedLiked = !liked;
    setLiked(updatedLiked);

    const likedCharacters =
      JSON.parse(localStorage.getItem("likedCharacters")) || {};
    likedCharacters[name] = updatedLiked;
    localStorage.setItem("likedCharacters", JSON.stringify(likedCharacters));
  };

  return (
    <>
      <Container maxW="md">
        <Box
          borderRadius="md"
          w="100%"
          p={2}
          boxShadow="xs"
          rounded="md"
          bg="white"
        >
          <Flex
            minWidth="max-content"
            alignItems="center"
            gap="2"
            color="balck"
            justifyContent="space-between"
          >
            <Link to={`characterDetails/${urlId}/${liked}`}>
              <ListItem>
                <Flex alignItems="center" gap="5">
                  <Avatar name={name} src="https://bit.ly/tioluwani-kolawole" />
                  <h1>{name}</h1>
                </Flex>
              </ListItem>
            </Link>

            <button onClick={toggleLike}>
              {liked ? (
                <PiHeartStraightFill
                  color="red"
                  style={{ height: "40px", width: "40px" }}
                />
              ) : (
                <PiHeartStraightLight
                  color="red"
                  style={{ height: "40px", width: "40px" }}
                />
              )}
            </button>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default SingleCharacter;
