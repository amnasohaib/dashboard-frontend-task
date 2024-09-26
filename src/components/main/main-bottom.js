import { Button, Flex, Spacer } from "@chakra-ui/react";

import { FaFileAlt } from "react-icons/fa";
import { AiFillCalculator } from "react-icons/ai";

const MainBottom = () => {
  return (
    <Flex className="main-bottom-buttons">
      <Flex className="main-button">
        <Button variant="ghost" className="main-button">
      <FaFileAlt />
          Explore Documentation
        </Button>
      </Flex>
      <Flex className="main-button">
        <Button variant="ghost" className="main-button">
      <AiFillCalculator />
          Cost Calculator
        </Button>
      </Flex>
      <Flex className="main-button">
        <Button variant="ghost" className="main-button">
      <FaFileAlt />
      Billing Calculator
        </Button>
      </Flex>
    </Flex>
  );
};

export default MainBottom;
