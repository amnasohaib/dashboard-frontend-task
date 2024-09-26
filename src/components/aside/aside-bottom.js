import { Button } from "@chakra-ui/react";

import { FaRegStar } from "react-icons/fa6";

const AsideBottom = () => {
  return (
    <div className="aside-bottom-buttons">
      <div className="aside-button">
      <FaRegStar />
        <Button bg="transparent" fontWeight={100} _hover={{ bg: "transparent", fontWeight: "bold" }}>
          Account Settings
        </Button>
      </div>
      <div className="aside-button">
        <FaRegStar />
        <Button bg="transparent" fontWeight={100} _hover={{ bg: "transparent", fontWeight: "bold" }}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AsideBottom;