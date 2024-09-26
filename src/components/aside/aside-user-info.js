import { useState } from "react";
import { Box, Collapse, Button, Text, Image, Flex } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import user from "@/app/assets/Avatar.png";
import { PiUserSwitch } from "react-icons/pi";

const UserInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // dummy data
  const userName = "Haseena Jameela";
  const userEmail = "haseenajameela@gmail.com";

  return (
    <Box>
      <div className="user-container">
        <Button
          variant="ghost"
          rightIcon={isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          onClick={toggleDropdown}
          fontSize="sm"
          fontWeight="bold"
          justifyContent="space-between"
          p={0}
          _hover={{ bg: "transparent" }}
        >
          <Image src={user.src} width={12} borderRadius="20px"></Image>
          <div className="user-info">
            <Text className="userName">{userName}</Text>
            <Text className="userEmail">{userEmail}</Text>
          </div>
        </Button>
      </div>

      {/* Dropdown Items */}
      <Collapse in={isOpen} animateOpacity>
        <Box mt={1}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            py={2}
          >
            <Flex>
              <Button fontSize="15px">
                <PiUserSwitch />
                <Text ml={3}>Switch Account</Text>
              </Button>
            </Flex>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default UserInfo;