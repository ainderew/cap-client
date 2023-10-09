import React, { useEffect } from "react";
import useStores from "@/core/stores/UseStores";
import { useRouter } from "next/router";

function Logout(){
    const {authStore} = useStores()
    const router = useRouter()

    useEffect(() =>{
        authStore.logoutUser()
        router.replace("/")
    },[])
    return <>Loging out</>
}

export default Logout