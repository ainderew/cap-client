import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

function useNavBar(){
  const currScroll = useRef(0);
  const [hideNav, setHideNav] = useState(false);

  function handleHideNav(){
    if(currScroll.current < window.scrollY){
      setHideNav(true)
    }else{
      setHideNav(false)
    }

    currScroll.current = window.scrollY;
  }

  const debounceFunc = debounce(handleHideNav,35)
  
  useEffect(() =>{
    window.addEventListener("scroll", debounceFunc)

    return () => window.removeEventListener("scroll", () => {})
  },[])


  return hideNav
}

export default useNavBar