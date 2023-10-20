/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import ChatWindow from '@/components/chatWindow'
import CommonQuestions from '@/components/commonQuestions'
import SideBar from '@/components/sidebar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import LoadingPage from '@/components/loadingPage'
import useStores from '@/core/stores/UseStores'
import { regexLocation } from '@/utils/functions/regex'
import Modal from '@/components/modals/modalContainer'
import { useGetLocation } from '@/hooks/useGetLocation'
import { Input } from 'antd'
const ENDPOINT = 'http://localhost:5050/getReply'

const GeneralChatUI: React.FC = () => {
  const { authStore } = useStores()
  const [userInput, setUserInput] = useState<string>('')
  const [response, setResponse] = useState<any[]>([])
  const [aiRes, setAiRes] = useState<string>('')
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)

  const { location, loading } = useGetLocation()

  const { Search } = Input

  useEffect(() => {
    if (aiRes === '') return
    setLoadingResponse(false)
    setResponse((prev) => [aiRes, ...prev])
  }, [aiRes])

  const submitUserInput = (
    e: any,
    commonQuestion: boolean = false,
    question: string = userInput
  ): void => {
    if ((e.key !== 'Enter' && !commonQuestion) || loadingResponse) {
      return
    }
    setLoadingResponse(true)
    setResponse((prev) => [{ content: question, role: 'user' }, ...prev])

    const history = [
      ...response,
      { content: regexLocation(question, location), role: 'user' }
    ]

    const sendObj = {
      userInput: history,
      userId: authStore.userProfile?._id
    }
    setUserInput('')

    fetch(ENDPOINT, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendObj)
    })
      .then(async (res) => await res.json())
      .then((data) => {
        setAiRes(data)
      })
      .catch((err) => {
        throw err
      })
  }

  return loading ? (
    <LoadingPage />
  ) : (
    <div className="flex">
      <SideBar />
      <div className="flex h-full w-full flex-col">
        {response.length === 0 ? (
          <div className="">
            <div className="flex h-[calc(35vh-4rem)] items-end justify-center border-b-2 py-14">
              <div className="flex items-center gap-4">
                <Image src={'/logo.svg'} width={40} height={40} alt="Logo" />
                <h2 className="text-3xl font-thin">
                  <span className="font-bold">ChatXpert </span>
                  AI Support Center
                </h2>
              </div>
            </div>
            <div className="flex h-[calc(100vh-35vh)] w-full flex-col items-center justify-start gap-10 border-t-[0.5px] bg-[#FCFCFC] py-10">
              <input
                onKeyDown={submitUserInput}
                onChange={(e) => {
                  setUserInput(e.target.value)
                }}
                value={userInput}
                type="text"
                placeholder="How may I help you?"
                className="h-10 w-1/2 rounded-3xl border-[1px] p-4 outline-none"
              />
              {/* <Search className='w-1/2'
               placeholder="How may I help?"
               onChange={(e) => {
                 setUserInput(e.target.value)
               }}
               onSearch={(e) => { submitUserInput(e) }}
               enterButton type='primary' allowClear size='large' /> */}
              <div className="flex w-[45%] flex-col items-center gap-5 ">
                <span className="text-gray-400">COMMON QUESTIONS</span>
                <CommonQuestions
                  submit={submitUserInput}
                  question="Stores that sell cake near me"
                />
                <CommonQuestions
                  submit={submitUserInput}
                  question="What are good anniversary gifts near me"
                />
                <CommonQuestions
                  submit={submitUserInput}
                  question="Trending cake flavors"
                />
                <CommonQuestions
                  submit={submitUserInput}
                  question="Stores that sell cake near me"
                />
              </div>
            </div>
          </div>
        ) : (
          <ChatWindow
            response={response}
            userinputSetter={setUserInput}
            sendChat={submitUserInput}
            searchInput={userInput}
            loadingResponse={loadingResponse}
            modalOpener={setShow}
          />
        )}
      </div>
    </div>
  )
}

export default GeneralChatUI
