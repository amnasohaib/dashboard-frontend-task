import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Flex,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import ProjectCard from "./project-card";

import projectsData from "@/public/app.json";
import { FaCirclePlus } from "react-icons/fa6";

function NavigationTabs() {
  const { projects } = projectsData;

  return (
    <Tabs variant="unstyled">
      <TabList
        // display="flex"
        // alignItems="center"
        // justifyContent="space-between"
      >
        <Box display="flex">
          <Tab _selected={{color: "#5876b7"}}>Ongoing</Tab>
          <Tab _selected={{color: "#5876b7"}}>Completed</Tab>
          <Tab _selected={{color: "#5876b7"}}>Cancelled</Tab>
          <Tab _selected={{color: "#5876b7"}}>Drafts</Tab>
        </Box>

        <Button
          bg="#5876b7"
          color="white"
          position={"absolute"}
          right={0}
          _hover={{ color: "#5876b7", bg: "white" }}
        >
          <FaCirclePlus />
          <Text ml={2} fontSize={14}>
            Create a Project
          </Text>
        </Button>
      </TabList>

      <TabIndicator mt="-1.5px" height="2px" bg="#5876b7" borderRadius="1px" />

      <TabPanels>
        {/* Ongoing Tab */}
        <TabPanel>
          <Flex flexWrap={"wrap"} mb={55}>
            {projects
              .filter((project) => project.status === "Ongoing")
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </Flex>
        </TabPanel>

        {/* Completed Tab */}
        <TabPanel>
          <Flex flexWrap={"wrap"} mb={55}>
            {projects
              .filter((project) => project.status === "Completed")
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </Flex>
        </TabPanel>

        {/* Cancelled Tab */}
        <TabPanel>
          <Flex flexWrap={"wrap"} mb={55}>
            {projects
              .filter((project) => project.status === "Cancelled")
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </Flex>
        </TabPanel>

        {/* Drafts Tab */}
        <TabPanel>
          <Flex flexWrap={"wrap"} mb={55}>
            {projects
              .filter((project) => project.status === "Drafts")
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default NavigationTabs;