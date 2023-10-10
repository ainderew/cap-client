import React from "react";

import BusinessNavBar from "./businessNavbar";

import useStores from "@/core/stores/UseStores";
import DefaultChatNavbar from "./defaultChatNavbar";
import CustomerNavbar from "./customerNavbar";

const NavBar: React.FC = () => {
  const { authStore } = useStores();
  const userType = authStore.userProfile?.type;


  if (userType !== null && userType !== undefined) return <DefaultChatNavbar />;

  if (!userType) {
    return <CustomerNavbar />;
  }

  return <BusinessNavBar />;
  
};

export default NavBar;
