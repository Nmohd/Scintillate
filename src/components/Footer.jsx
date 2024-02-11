import { useCharacter } from "../contexts/CharacterContext";
import { Button, Container, Flex, Box, Center, Text } from "@chakra-ui/react";
import { FcNext, FcPrevious } from "react-icons/fc";

const Footer = () => {
  const { counter, onClickNextHandler, onClickPreviousHandler } =
    useCharacter();
  return (
    <Container mt={5}>
      <Center>
        <Flex>
          <Button
            borderRadius="md"
            onClick={onClickPreviousHandler}
            alignItems="center"
          >
            <FcPrevious />
          </Button>
          <Box
            borderRadius="md"
            bg="White"
            w="20%"
            pr={8}
            pl={5}
            pt={2}
            color={"black"}
          >
            <Text fontSize={15}>{counter}</Text>
          </Box>
          <Button
            borderRadius="md"
            // colorScheme="blue"
            onClick={onClickNextHandler}
          >
            <FcNext />
          </Button>
        </Flex>
      </Center>
    </Container>
  );
};

export default Footer;
