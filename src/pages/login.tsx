import useStores from "@/core/stores/UseStores";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { config } from "../../config";
import usePostData from "@/hooks/usePostData";
import { type userProfile } from "@/utils/types/auth";
import { message } from "antd";
import { AccountType } from "@/utils/enums";
import DefaultLayout from "./layouts/default";

interface LoginReply {
  message?: string;
  authToken: string;
  profile: userProfile;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { authStore } = useStores();
  const router = useRouter();
  const { data,handlePostRequest, loading } = usePostData(
    `${config.BACKEND_ENDPOINT}/login`
  );

  async function submitForm(): Promise<void> {
    const bodyObj = {
      email,
      password,
    };

    try {
      await handlePostRequest(bodyObj);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    if(!data) return;

    if (data?.message === "Invalid Credentials") {
      void message.error(data.message);
      return;
    }

    authStore.loginUser(data);
    if (data.profile.type === AccountType.business) {
      void router.replace("/business/dashboard");
    } else {
      void router.replace("/home");
    }
  },[data])
  return (
    <DefaultLayout>
      <div className='flex  items-center justify-center font-poppins'>
        <div>
          <div className='text-center text-[5rem] font-[600] tracking-[.5rem]'>
            LOGIN
          </div>
          <div className='text-center font-[500]'>
            Manage customer support with the help of AI
          </div>
          <div className='my-[2.5rem] font-[400]'>
            <div className='py-[.7rem]'>Email</div>
            <input
              value={email}
              type='text'
              className='w-[25rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className='my-[2.5rem] font-[400]'>
            <div className='py-[.7rem]'>Password</div>
            <input
              value={password}
              type='password'
              className='w-[25rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <div className='text-[.85rem] text-[#2B99FF]'>Forget Password?</div>
          </div>
          <div className='my-[2rem] text-center font-[600]'>
            <button
              onClick={submitForm}
              className='w-[10rem] rounded-[.3rem] bg-[#D9D9D9] px-[2rem] py-[.5rem]'
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Login;
