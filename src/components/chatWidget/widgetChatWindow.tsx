import { SendOutlined } from "@ant-design/icons";
import { Badge, Input, message } from "antd";
import Image from "next/image";
import React from "react";
import useChatWithAi from "@/hooks/useChatWithAi";
import { ChatMessage } from "@/utils/types/base";
import { observer } from "mobx-react";
import ChatBubble from "../chatBubble";
import LoadingResponse from "../loadingResponse";

type WidgetChatWindowProps = {
  visible: boolean;
};

function WidgetChatWindow({ visible }: WidgetChatWindowProps) {
  const { conversation, sendChat, input, handleInputChange,loading } = useChatWithAi();
  return (
    <div
      className={`absolute -left-64 -top-[29rem] flex h-[28rem] w-80 flex-col overflow-hidden rounded-md bg-white shadow-md ${
        visible ? "opacity-100" : "-top-0 left-0 scale-0 opacity-0"
      }  transition-all duration-150`}
    >
      <div className='header flex h-10 w-full items-center gap-4 bg-slate-600 p-2'>
        <Badge status='success' dot offset={[-1, "80%"]}>
          <div className='relative h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-white'>
            <Image src={"/mascot.svg"} alt='Bramk bot' fill />
          </div>
        </Badge>
        <span className='text-md text-white'>Bramk Bot</span>
      </div>

      <div className='overflow-scroll p-4'>
        <div className='flex flex-grow flex-col gap-4'>
          {conversation.map((message: ChatMessage) => {
            return <ChatBubble small={true} content={message} />;
          })}
          {loading && <LoadingResponse /> }
        </div>
      </div>

      <div className='mt-auto flex items-center gap-4 px-4'>
        <Input
          className='!border-none bg-gray-100 !outline-none'
          placeholder='Send message'
          value={input}
          onChange={handleInputChange}
          onKeyDown={sendChat}
        />
        <button className='flex h-full items-center justify-center rounded-full p-2 hover:bg-gray-100'>
          <SendOutlined className='text-primary' />
        </button>
      </div>
      <div className='flex justify-center p-2 text-xs'>
        <p className=''>
          Powered by <span className='text-primary'> BRAMK</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default observer(WidgetChatWindow);
