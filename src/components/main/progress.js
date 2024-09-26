import { Box, Text, Flex, Circle, Spacer } from "@chakra-ui/react";

const ProgressComp = ({ total, completed }) => {
  return (
    <Flex align="center" my={4}>
      {Array.from({ length: total }, (_, index) => (
        <Flex key={index} align="center">

          <Circle size="10px" bg={index < completed ? "#5876b7" : "gray.300"} />
          {index < total - 1 && (
            <Box
              w="40px"
              h="1.5px"
              bg={index < completed - 1 ? "#5876b7" : "gray.300"}
            />
          )}
        </Flex>
      ))}

      <Spacer />

      <Text fontSize="sm" color="gray.500">
        {completed}/{total} Done
      </Text>
    </Flex>
  );
};

export default ProgressComp;