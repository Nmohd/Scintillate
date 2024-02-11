import { AbsoluteCenter, Box, Spinner, Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box h="700px">
      <AbsoluteCenter axis="both" mt={10}>
        <Spinner color="red" ml={4} mt={10} />
        <Text> Loading...</Text>
      </AbsoluteCenter>
    </Box>
  );
};

export default Loading;
