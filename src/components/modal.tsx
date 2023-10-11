import React, { useEffect, useState } from "react";
import useStores from "@/core/stores/UseStores";
import Image from "next/image";
import { useGetLocation } from "@/hooks/useGetLocation";
import { regexLocation } from "@/utils/functions/regex";
import ChatBubble from "./chatBubble";
import LoadingResponse from "./loadingResponse";
interface props {
  show: boolean;
  modalOpener: any;
}
const Modal: React.FC<props> = ({ show, modalOpener }) => {
  const {
    uiStore: { modalData },
  } = useStores();
  const handleClose = (): void => {
    modalOpener(false);
  };

  if (!modalData) return <></>;

  const { image, name, url } = modalData;
  const { authStore } = useStores();
  const [userInput, setUserInput] = useState<string>("");
  const [response, setResponse] = useState<any[]>([]);
  const [aiRes, setAiRes] = useState<string>("");
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);

  const { location, loading } = useGetLocation();

  useEffect(() => {
    if (aiRes === "") return;
    setLoadingResponse(false);
    setResponse((prev) => [aiRes, ...prev]);
  }, [aiRes]);

  const submitUserInput = (
    e: any,
    commonQuestion: boolean = false,
    question: string = userInput
  ): void => {
    if ((e.key !== "Enter" && !commonQuestion) || loadingResponse) {
      return;
    }
    setLoadingResponse(true);
    setResponse((prev) => [{ content: question, role: "user" }, ...prev]);

    const history = [
      ...response,
      { content: regexLocation(question, location), role: "user" },
    ];

    const sendObj = {
      userInput: history,
      userId: authStore.userProfile?._id,
    };
    setUserInput("");
    const ENDPOINT = "http://localhost:5050/getReply";
    fetch(ENDPOINT, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendObj),
    })
      .then(async (res) => await res.json())
      .then((data) => {
        setAiRes(data);
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <div
      className={`
    ${show ? "absolute" : "hidden"}
    grid h-screen w-screen grid-cols-[1fr_20rem] gap-8 bg-[rgba(0,0,0,0.2)] p-24`}
    >
      <div className=' bg-white shadow-2xl'>
        <button
          onClick={handleClose}
          className='absolute right-5 top-5 text-xl text-black'
        >
          X
        </button>

        <div className='content flex h-full w-full flex-col'>
          <div className='banner relative h-[40%] w-full'>
            <Image
              src={image}
              fill
              style={{ objectFit: "cover" , objectPosition: "center"}}
              alt='business cover'
            />
          </div>

          <div className='px-12 py-4'>
            <span className='text-xl'>{name}</span>
          </div>

          <div className='flex h-full flex-col pb-8'>
            <div className='h-full  w-full p-12'>
              <div className='inner-shadow flex h-full w-full flex-col px-16 py-4'>
                <div className='scroll-container flex flex-col-reverse gap-6 overflow-auto px-2 pb-20 lg:gap-4'>
                  {loadingResponse ? <LoadingResponse /> : null}
                  {response.map((el: any, index: number) => {
                    return (
                      <ChatBubble
                        modalOpener={modalOpener}
                        key={index}
                        content={el}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <input
              onKeyDown={submitUserInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
              value={userInput}
              type='text'
              placeholder='How may I help you?'
              className='m-auto mt-auto h-10 w-[90%] rounded-3xl border-[1px] p-4 outline-none'
            />
          </div>
        </div>
      </div>

      <div className='flex h-full w-full flex-col bg-white shadow-xl gap-2 p-4'>
        <span className=''>location: {location}</span>
        <span className=''>website: <a href={url} className="text-blue-400">{url}</a></span>
      </div>
    </div>
  );
};

export default Modal;
