import BusinessRegisterForm from "@/components/businessRegister/form";
import React from "react";
import DefaultLayout from "../../layouts/default";
import { Steps } from "antd";
import { useHandleSteps } from "./useHandleSteps";

const BusinessRegisterUI: React.FC = () => {
  
  const {currentStep, backwards, forwards,steps } = useHandleSteps()
  return (
    <DefaultLayout>
      <div className='flex h-full w-full flex-col items-center gap-12 py-16 px-28'>
        <div className='steps w-1/2'>
          <Steps
            current={currentStep-1}
            items={steps}
          />
        </div>

        <BusinessRegisterForm currentStep={currentStep} backwards={backwards} forwards={forwards} steps={steps} />
      </div>
    </DefaultLayout>
  );
};

export default BusinessRegisterUI;
