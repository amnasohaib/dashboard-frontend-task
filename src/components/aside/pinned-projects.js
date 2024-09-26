import { useState } from "react";
import {
  Box,
  Collapse,
  Button,
  Text,
  Icon,
  Divider,
  Image,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Icons for up/down arrows

import logo1 from "@/app/assets/launchpad1.jpg";
import { FaRegStar } from "react-icons/fa6";

const PinnedProjects = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const totalProjects = 3;
  const completedProjects = 3;

  return (
    <Box>
      {/* Pinned Projects Header */}
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
          PINNED PROJECTS
        </Button>
        <Text fontSize="sm" fontWeight="bold" alignContent="center">
          {completedProjects}/{totalProjects}
        </Text>
      </div>

      {/* Dropdown Items */}
      <Collapse in={isOpen} animateOpacity>
        <Box mt={1} ml={3}>
        <Box
            display="flex"
            height={7}
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Flex>
              <FaRegStar />
              <Text ml={5} fontSize="13px">
                Project Name 1
              </Text>
            </Flex>
            <IoIosArrowDown />
          </Box>
          
          <Box
            display="flex"
            height={7}
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Flex>
              <FaRegStar />
              <Text ml={5} fontSize="13px">
                Project Name 2
              </Text>
            </Flex>
            <IoIosArrowDown />
          </Box>
          
          <Box
            display="flex"
            height={7}
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Flex>
              <FaRegStar />
              <Text ml={5} fontSize="13px">
                Project Name 3
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

export default PinnedProjects;
