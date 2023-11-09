/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/ban-types */
import { Spin } from 'antd'
import dynamic from 'next/dynamic'

type ModalDictionary = Record<string, React.ComponentType<{}>>

// const options =

const SpecificChat = dynamic(
  async () => await import('./specificChat/specificChatModal'),
  {
    loading: () => <Spin />,
    ssr: false
  }
)

export const ModalDictionary: ModalDictionary = {
  SpecificChat
}
