import { useState } from "react";
import { Box, Collapse, Button, Text } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Workspaces = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <div className="workspace-container">
        <Button
          variant="ghost"
          leftIcon={isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          onClick={toggleDropdown}
          fontSize="sm"
          fontWeight="bold"
          justifyContent="flex-start"
          p={0}
          _hover={{ bg: "transparent" }}
        >
          WORKSPACES
        </Button>
        <Text
          fontSize="10px"
          fontWeight="bold"
          bg="#DADAD7"
          px={2}
          height={6}
          alignContent="center"
          borderRadius="full"
          color="#3C3C34"
        >
          Coming Soon
        </Text>
      </div>

      {/* Dropdown Items */}
      <Collapse in={isOpen} animateOpacity>
        <Box mt={1} ml={10}>

          <Box
            display="flex"
            height={7}
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Text fontSize="13px">Work Space Name 1</Text>
            <IoIosArrowDown />
          </Box>
          
          <Box
            display="flex"
            height={7}
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Text fontSize="13px">Work Space Name 2</Text>
            <IoIosArrowDown />
          </Box>
          
          <Box
            display="flex"
            height={7}
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Text fontSize="13px">Work Space Name 3</Text>
            <IoIosArrowDown />
          </Box>
        </Box>

        {/* See All Link */}
        <Box mt={2} textAlign="center">
          <Text as="a" href="#" color="blue.500" fontWeight="medium">
            See All
          </Text>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Workspaces;