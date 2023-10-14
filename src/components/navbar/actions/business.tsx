import { Dropdown, MenuProps, message } from "antd";
import { useRouter } from "next/router";
import React from "react";
import MenuOptions from "./common/menuOptions";
import UserAvatar from "./common/avatar";
import IconContainer from "@/components/iconContainer";
import { LockOutlined, LogoutOutlined, MailOutlined } from "@ant-design/icons";
import NotificationSection from "../quickAccess/notifications";

function BusinessNavActions() {
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
    <div className='flex gap-3 items-center'>
      <NotificationSection />
      <Dropdown menu={menuProps} trigger={["click"]}>
        {UserAvatar()}
      </Dropdown>
    </div>
  );
}

export default BusinessNavActions;
