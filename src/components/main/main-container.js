import { Button, Flex, Text } from "@chakra-ui/react";
import { FaCirclePlus } from "react-icons/fa6";
import NavigationTabs from "./main-tabs";

const MainContainer = () => {
  return (
    <Flex m={4} position="relative">
      <NavigationTabs />

      {/* <Button
        bg="#5876b7" 
        color="white"
        position={{ base: "fixed", md: "relative" }} 
        right={{ base: "20px", md: "auto" }} 
        top={{ base: "20px", md: "auto" }} 
        width={{ base: "170px", md: "auto" }} 
        zIndex={1000}
        className="create-project-button"
        _hover={{ color: "#5876b7", bg: "white" }} 
      >
        <FaCirclePlus />
        <Text ml={2} fontSize={14}>
          Create a Project
        </Text>
      </Button> */}
    </Flex>
  );
};

export default MainContainer;
