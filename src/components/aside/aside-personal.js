import { Card, CardBody, Divider } from "@chakra-ui/react";
import DashboardButtonGroup from "./dashboard-button-group";
import Workspaces from "./aside-workspaces";
import Launchpad from "./aside-launchpad";
import PinnedProjects from "./pinned-projects";

const AsideProjects = () => {
  return (
    <div>
      <Card bg="#ebf0fa">
        <CardBody>
          <DashboardButtonGroup />
          <Divider orientation="horizontal" my={4} borderColor="gray.400" />

          <Workspaces />
          <Divider orientation="horizontal" my={4} borderColor="gray.400" />

          <Launchpad />
        </CardBody>
      </Card>
      <Card bg="transparent" shadow="none">
        <CardBody>
          <PinnedProjects />
        </CardBody>
      </Card>
    </div>
  );
};

export default AsideProjects;