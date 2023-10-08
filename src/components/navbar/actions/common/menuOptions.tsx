import IconContainer from "@/components/iconContainer";
import { LockOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import React from "react";

const MenuOptions:MenuProps["items"] = [
    {
      label: "Settings",
      key: "settings",
      icon: (
        <IconContainer>
          <SettingOutlined />
        </IconContainer>
      ),
    },
    {
      label: "Change Password",
      key: "changePassword",
      icon: (
        <IconContainer>
          <LockOutlined />
        </IconContainer>
      ),
    },
    {
      label: "Logout",
      key: "logout",
      icon: (
        <IconContainer>
          <LogoutOutlined />
        </IconContainer>
      ),
    },
  ];


export default MenuOptions
