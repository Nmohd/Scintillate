/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../contexts/CharacterContext";
import { fetchFilmTitles } from "../utils/supportingFunctions";
import Loading from "./Loading";
import {
  Spinner,
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Center,
  Avatar,
  Divider,
  Grid,
  GridItem,
  Skeleton,
  Progress,
} from "@chakra-ui/react";

const Character = () => {
  const { getCharacter, isLoading, currentCharacter } = useCharacter();
  let [filmTitles, setFilmTitles] = useState();
  const { id, liked } = useParams();
  const favourite = liked;
  console.log(favourite);

  const {
    name,
    films,
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
  } = currentCharacter;

  useEffect(() => {
    getCharacter(id);
    const fetchData = async () => {
      try {
        if (currentCharacter.films) {
          const titles = await fetchFilmTitles(currentCharacter.films);
          setFilmTitles(titles);
        }
      } catch (error) {
        console.error("Error fetching film titles:", error);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading || !currentCharacter) return <Loading />;

  console.log(filmTitles);
  return (
    // <Container>
    <Center mt="10%">
      <Card minW="40%" boxShadow="dark-lg" pt={5}>
        <CardBody>
          <Center>
            <Avatar
              size="2xl"
              name={name}
              src="https://bit.ly/tioluwani-kolawole"
            />
          </Center>

          <Stack mt="6" spacing="5">
            <Center>
              <Heading size="md">{name}</Heading>
            </Center>
            <Center>
              <Grid templateColumns="repeat(4, 5fr)" gap={6}>
                <GridItem w="100%" h="10">
                  <Text>Gender: {gender}</Text>
                </GridItem>
                <GridItem h="10">
                  <Text>Birth Year:{birth_year}</Text>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Text>
                    <span>Eye Color:</span> {eye_color}
                  </Text>
                </GridItem>

                <Text>
                  <span>Height:</span> {height}
                </Text>
                <Text>
                  <span>Hair Color:</span> {hair_color}
                </Text>
                <Text>
                  <span>Mass:</span> {mass}
                </Text>
                <Text>
                  <span>Skin Color:</span> {skin_color}
                </Text>

                {/* <Text color="blue.600" fontSize="2xl">
              $450
            </Text> */}
              </Grid>
            </Center>
          </Stack>
        </CardBody>

        <Divider />
        <Center>
          <CardFooter>
            <Grid templateColumns="repeat(3, 2fr)" gap={6}>
              {filmTitles ? (
                filmTitles.map((titles) => (
                  <GridItem key={titles}>{titles}</GridItem>
                ))
              ) : (
                <Center>
                  <Spinner />
                </Center>
              )}
            </Grid>
          </CardFooter>
        </Center>
      </Card>
    </Center>
  );
};

export default Character;
