import React from "react";
import FeatureTags from "./tags";

function LeftHighlight(): React.ReactElement {
  return (
    <>
      <span className='text-white'>FOR BUSINESS</span>

      <p className='text-4xl font-medium'>
        Leverage AI to help you<br /> run your business.
      </p>

      <p className=''>
        BRAMK is an all-in-one system that will help manage your business. Get
        full control over your processes and track all expenses in real-time.
      </p>


      <FeatureTags />
    </>
  );
}

export default LeftHighlight;
