import React from "react";
import FeatureTags from "./tags";

function LeftHighlight(): React.ReactElement {
  return (
    <>
      <span className='text-white'>FOR BUSINESS</span>

      <p className='text-right md:text-left text-4xl md:text-3xl xl:text-4xl font-medium'>
        Leverage AI to help you<br className="md:block hidden" /> run your business.
      </p>

      <p className='text-justify md:text-left'>
        BRAMK is an all-in-one system that will help manage your business. Get
        full control over your processes and track all expenses in real-time.
      </p>


      <FeatureTags />
    </>
  );
}

export default LeftHighlight;
