import { Card, CardBody } from "@chakra-ui/react";

import PinnedProjects from "./pinned-projects";
import Invited from "./aside-invited";

const AsideInvitedTab = () => {
  return (
    <div>
      <Card bg="#ebf0fa" className="aside-projects-card">
        <CardBody>
          <Invited />
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

export default AsideInvitedTab;