import { Dropdown, message } from "antd";
import React from "react";
import UserAvatar from "./common/avatar";
import MenuOptions from "./common/menuOptions";
import { useRouter } from "next/router";

function CustomerNavActions() {
  const router = useRouter();

  function handleClick(e: any): void {
    switch (e.key) {
      case "logout":
        router.replace("/logout");
        break;
      default:
        message.error("Something went wrong");
    }
  }
  const menuProps = {
    items: MenuOptions,
    onClick: handleClick,
  };
  return (
      <Dropdown placement='bottomRight' menu={menuProps} trigger={["click"]}>
        {UserAvatar()}
      </Dropdown>
  );
}

export default CustomerNavActions;
