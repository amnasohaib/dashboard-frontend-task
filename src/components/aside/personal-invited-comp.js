import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import AsideProjects from "./aside-personal";
import AsideInvitedTab from "./aside-invited-tab";
const PersonalInvitedButtonGroup = () => {
  return (
    <div className="tab-group-container">
      <Tabs variant="unstyled">
        <TabList bg={"white"} p={2} borderRadius={5} justifyContent="center">
          <Tab
            width={"full"}
            _selected={{
              color: "#334876",
              bg: "#dbe2f0",
              fontWeight: "bold",
              borderRadius: "10px",
            }}
          >
            Personal
          </Tab>
          <Tab
            width={"full"}
            _selected={{
              color: "#334876",
              bg: "#dbe2f0",
              fontWeight: "bold",
              borderRadius: "10px",
            }}
          >
            Invited
          </Tab>
        </TabList>

        {/* content after choosing tabs */}
        <TabPanels>
          <TabPanel>
            <AsideProjects />
          </TabPanel>
          <TabPanel>
            <AsideInvitedTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default PersonalInvitedButtonGroup;
