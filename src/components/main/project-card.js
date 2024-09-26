import { Button, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { FaEllipsisVertical } from "react-icons/fa6";

import Pointer from "@/app/assets/pointer.png";
import ProgressComp from "./progress";

const ProjectCard = ({ project }) => {
  return (
    <Card _hover={{ boxShadow: "lg" }} className="project-card">
      <CardBody>
        <div className="project-card-heading">
          <Text className="project-card-heading-text">{project.name}</Text>
          <Button variant="ghost">
            <FaEllipsisVertical />
          </Button>
        </div>
        <Text fontSize={"12px"}>{project.type}</Text>

        <ProgressComp
          total={project.totalTasks}
          completed={project.completedTasks}
        />

        <div>
          <Text className="project-card-highlighted">{project.status}</Text>
          <Text className="project-card-highlighted">
            Next milestone: {project.nextMilestone}
          </Text>
        </div>

        <div className="project-card-bottom">
          <Text className="project-card-bottom-text">
            Follow up with manager
          </Text>
          <Button
            variant="ghost"
            _hover={{
              bg: "transparent",
              "& img": { filter: "brightness(0.7)" },
            }}
            className="pointer-button"
          >
            <Image src={Pointer.src}></Image>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;