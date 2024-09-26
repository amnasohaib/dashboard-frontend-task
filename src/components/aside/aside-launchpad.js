import { useState } from "react";
import { Box, Collapse, Button, Text, Image, Flex } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import logo1 from "@/app/assets/launchpad1.jpg";

const Launchpad = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        _hover={{ bg: "transparent" }}
      >
        LAUNCHPAD
      </Button>

      {/* Dropdown Items */}
      <Collapse in={isOpen} animateOpacity>
        <Box mt={1}>
          <Box
            display="flex"
            height={9}
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Flex align="center">
              <Image src={logo1.src} width={7} borderRadius="full"></Image>
              <Text ml={4} fontSize="13px">
                Business Name 1
              </Text>
            </Flex>
            <IoIosArrowDown />
          </Box>

          <Box
            display="flex"
            height={9}
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Flex align="center">
              <Image src={logo1.src} width={7} borderRadius="full"></Image>
              <Text ml={4} fontSize="13px">
                Business Name 2
              </Text>
            </Flex>
            <IoIosArrowDown />
          </Box>

          <Box
            display="flex"
            height={9}
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Flex align="center">
              <Image src={logo1.src} width={7} borderRadius="full"></Image>
              <Text ml={4} fontSize="13px">
                Business Name 3
              </Text>
            </Flex>
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

export default Launchpad;