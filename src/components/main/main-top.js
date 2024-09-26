import { Image, Text } from "@chakra-ui/react";

import Folder1 from "@/app/assets/Folders/Folder1.png";
import Folder2 from "@/app/assets/Folders/Folder2.png";
import Folder3 from "@/app/assets/Folders/Folder3.png";
import Folder4 from "@/app/assets/Folders/Folder4.png";

import projectsData from "@/public/app.json";

const MainTop = () => {
  const { projects } = projectsData;

  {
    /* filtering the projects from the app.json (dummy data file) 
   and showing the amount according to their status  */
  }

  const ongoingProjects = projects.filter(
    (project) => project.status === "Ongoing"
  ).length;
  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;
  const draftedProjects = projects.filter(
    (project) => project.status === "Drafts"
  ).length;
  const cancelledProjects = projects.filter(
    (project) => project.status === "Cancelled"
  ).length;

  const firstName = "Haseena"; // dummy data

  return (
    <div className="main-top-container">
      <Text className="main-top-text">Welcome Back, {firstName}!</Text>
      <Text>You have accomplished a lot today. Let us handle the rest.</Text>

      <div className="main-top-tasks">
        <div className="main-task">
          <Image src={Folder1.src}></Image>
          <div className="main-task-text">
            <Text className="task-mainText">{completedProjects}</Text>
            <Text className="task-subText">Completed</Text>
          </div>
        </div>
        <div className="main-task">
          <Image src={Folder2.src}></Image>
          <div className="main-task-text">
            <Text className="task-mainText">{ongoingProjects}</Text>
            <Text className="task-subText">Ongoing</Text>
          </div>
        </div>
        <div className="main-task">
          <Image src={Folder3.src}></Image>
          <div className="main-task-text">
            <Text className="task-mainText">{draftedProjects}</Text>
            <Text className="task-subText">Drafts</Text>
          </div>
        </div>
        <div className="main-task">
          <Image src={Folder4.src}></Image>
          <div className="main-task-text">
            <Text className="task-mainText">{cancelledProjects}</Text>
            <Text className="task-subText">Cancelled</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTop;