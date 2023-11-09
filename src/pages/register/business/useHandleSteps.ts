import { useState } from "react";


const description = "test";
export function useHandleSteps(){
  const [currentStep, setCurrentStep] = useState<number>(1);

  const steps =[
    {
      title: "Login Info",
      description,
    },
    {
      title: "Additional Business Info",
      description,
    },
    {
      title: "Images",
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