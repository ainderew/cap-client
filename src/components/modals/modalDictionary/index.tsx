import { Spin } from "antd";
import dynamic from "next/dynamic";

type ModalDictionary = {
    [key: string]: React.ComponentType<{}>;
};

// const options = 

const SpecificChat = dynamic(
    () => import("./specificChat/specificChatModal"),
    {
        loading: () => <Spin />,
        ssr: false
    }
)



export const ModalDictionary: ModalDictionary = {
    SpecificChat: SpecificChat
}