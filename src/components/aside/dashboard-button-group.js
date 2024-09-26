import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

import { FaRegStar, FaStar } from "react-icons/fa6";

const DashboardButtonGroup = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = ["Dashboard", "Project History", "Client History", "Emails"];

  return (
    <div className="dashboard-group-container">
      <ButtonGroup isAttached className="dashboard-button-group">
        {tabs.map((tab, index) => (
          <div
            className="dashboard-icon-button-group"
            style={{
              backgroundColor: activeTab !== tab ? "transparent" : "white",
              borderRadius: "5px"
            }}
          >
            {activeTab == tab ? <FaStar /> : <FaRegStar />}
            <Button
              variant="ghost"
              key={index}
              onClick={() => setActiveTab(tab)}
              height={7}
              fontWeight={activeTab !== tab ? "100" : "bold"}
              _hover={{bg:"transparent", fontWeight:"bold"}}
            >
              {tab}
            </Button>
          </div>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default DashboardButtonGroup;