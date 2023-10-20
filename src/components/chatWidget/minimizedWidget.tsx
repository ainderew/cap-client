import { MessageFilled } from "@ant-design/icons";
import { Badge, Popover } from "antd";
import React from "react";
import WidgetChatWindow from "./widgetChatWindow";
import useHandleWidget from "./hooks/useHandleWidget";

function MinimizedWidget() {
  const { visible, handleShowChat } = useHandleWidget();

  return (
    <div className='absolute bottom-10 right-10'>
      <WidgetChatWindow visible={visible} />
      <Badge count='1'>
        <button
          onClick={handleShowChat}
          className='flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary shadow-md shadow-blue-400 transition-transform duration-150 hover:scale-110 '
          >
          <MessageFilled style={{ color: "#fff", fontSize: "1.3rem" }} />
        </button>
      </Badge>
    </div>
  );
}

export default MinimizedWidget;
