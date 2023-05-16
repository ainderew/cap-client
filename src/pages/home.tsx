import ChatWindow from '@/components/chatWindow'
import NavBar from '@/components/navbar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ENDPOINT = 'http://localhost:8989/getReply'
const General: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [response, setResponse] = useState<any[]>([])
  const [aiRes, setAiRes] = useState<string>('')

  useEffect(() => {
    if (aiRes === '') return
    setResponse((prev) => [aiRes, ...prev])
  }, [aiRes])

  const submitSearch = (e: any): void => {
    if (e.key !== 'Enter') {
      return
    }

    setResponse((prev) => [{ message: { content: searchInput } }, ...prev])
    const sendObj = {
      searchInput
    }
    setSearchInput('')

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
        console.log(data)
        setAiRes(data)
      })
      .catch((err) => {
        throw err
      })
  }
  return (
    <div className="flex h-screen flex-col">
      <NavBar />
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
              onKeyDown={submitSearch}
              onChange={(e) => {
                setSearchInput(e.target.value)
              }}
              value={searchInput}
              type="text"
              placeholder="How may I help you?"
              className="h-10 w-1/2 rounded-3xl border-[1px] p-4 outline-none"
            />
            <div className="flex w-[45%] flex-col items-center gap-5 ">
              <span className="text-gray-400">COMMON QUESTIONS</span>

              <div className="w-full bg-[#EBEBEB] px-4 py-4">
                Options for returning my orders to Lorem ipsum store
              </div>
              <div className="w-full bg-[#EBEBEB] px-4 py-6">
                Options for returning my orders to Lorem ipsum store
              </div>
              <div className="w-full bg-[#EBEBEB] px-4 py-6">
                Options for returning my orders to Lorem ipsum store
              </div>
              <div className="w-full bg-[#EBEBEB] px-4 py-6">
                Options for returning my orders to Lorem ipsum store
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ChatWindow
          response={response}
          userinputSetter={setSearchInput}
          sendChat={submitSearch}
          searchInput={searchInput}
        />
      )}
    </div>
  )
}

export default General
