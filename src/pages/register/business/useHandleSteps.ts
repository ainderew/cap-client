import { useState } from "react";


const description = "";
export default function useHandleSteps(){
  const [currentStep, setCurrentStep] = useState<number>(1);

  const steps =[
    {
      title: "Login Info",
      description,
    },
    {
      title: "Additional Info",
      description,
    },
    {
      title: "Photo",
      description,
    },
  ]


  function backwards(){
    if(currentStep === 1) return;
    setCurrentStep(prev => prev-=1)
  }
  function forwards(){
    if(currentStep === 3) return;
    setCurrentStep(prev => prev+=1)
  }
  return{
    currentStep,
    backwards,
    forwards,
    steps
  }
}