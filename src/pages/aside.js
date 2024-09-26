import { Image } from "@chakra-ui/react";

import logo from "@/app/assets/Logo.svg";

import PersonalInvitedButtonGroup from "@/components/aside/personal-invited-comp";
import AsideBottom from "@/components/aside/aside-bottom";
import UserInfo from "@/components/aside/aside-user-info";

const Aside = () => {

  return (
    <div className="aside">

      {/* logo  */}
      <Image src={logo.src} width={28} ml={3}></Image>


      {/* user's info */}
      <UserInfo />


      {/* personal / invited options */}
      <PersonalInvitedButtonGroup />

      {/* bottom fixed buttons */}
      <AsideBottom />

    </div>
  );
};

export default Aside;