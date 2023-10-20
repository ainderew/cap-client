import { useEffect, useState } from "react";
import useStores from "@/core/stores/UseStores";


function useHandleWidget(){
    const [visible, setVisible] = useState<boolean>(true);
    const {uiStore: {clearConversation}} = useStores()

    useEffect(() =>{
        if(!visible){
            clearConversation();
        }
    },[visible])

    function handleShowChat(){
        setVisible(prev => !prev);
    }

    return{
        handleShowChat,
        visible
    }
}


export default useHandleWidget