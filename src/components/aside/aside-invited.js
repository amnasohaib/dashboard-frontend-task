import { useState } from "react";
import { Box, Collapse, Button, Text, Icon, Divider } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Icons for up/down arrows


const Invited = () => {
    const [isOpen, setIsOpen] = useState(true);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      
     <Button 
        variant="ghost" 
        leftIcon={isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />} 
        onClick={toggleDropdown} 
        fontSize="sm" 
        fontWeight="bold"
        justifyContent="flex-start"
        p={0}
        _hover={{bg:"transparent"}}
      >
        INVITED
      </Button>

      {/* Dropdown Items */}
      <Collapse in={isOpen} animateOpacity>
        <Box mt={1} ml={10}>
          <Box display="flex" height={7} justifyContent="space-between" alignItems="center" py={2}>
            <Text fontSize="13px">Invited Project 1</Text>
            <IoIosArrowDown />
          </Box>
          <Divider />
          <Box display="flex" height={7} justifyContent="space-between" alignItems="center" py={2}>
            <Text fontSize="13px">Invited Project 2</Text>
            <IoIosArrowDown />
          </Box>
          <Divider />
          <Box display="flex" height={7} justifyContent="space-between" alignItems="center" py={2}>
            <Text fontSize="13px">Invited Project 3</Text>
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
}

export default Invited;