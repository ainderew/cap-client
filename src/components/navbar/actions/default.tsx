import { Button } from "antd";
import React from "react";
import { useRouter } from "next/router";


function DefaultNavActions(){
    const router = useRouter();
    return(
      <>
        <Button onClick={() => { void router.push('/login') }} className='bg-none border-none shadow-none'>Login</Button>
        <Button onClick={() => { void router.push('/register/business') }} className='bg-primary border-none text-white hover:!text-white hover:bg-secondary hover:border-none'>Sign Up</Button>
      </>
    )
}

export default DefaultNavActions