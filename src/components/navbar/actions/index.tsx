import React from "react";
import DefaultNavActions from "./default";
import useStores from "@/core/stores/UseStores";
import BusinessNavActions from "./business";
import CustomerNavActions from "./customer";
import NotificationSection from "../quickAccess/notificaitons";

const actions = {
  business: <BusinessNavActions />,
  customer: <CustomerNavActions />,
  default: <DefaultNavActions />,
};

function NavActions(): React.ReactElement {
  const {
    authStore: { userProfile },
  } = useStores();

  return (
    <div className='flex items-center gap-3'>
      {actions[userProfile ? userProfile?.type : "default"]}
    </div>
  );
}

export default NavActions;
