import { Badge, Popover } from "antd";
import React from "react";
import IconContainer from "../../iconContainer";
import { NotificationOutlined } from "@ant-design/icons";
import NotificationBar from "../../notification";

function NotificationSection(): React.ReactElement {
  return (
    <Popover content={<NotificationBar />} trigger={"click"}>
      <Badge count={1}>
        <IconContainer>
          <NotificationOutlined />
        </IconContainer>
      </Badge>
    </Popover>
  );
}

export default NotificationSection;
