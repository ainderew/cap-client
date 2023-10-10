import React from "react";
import PreviewHeadBar from "./dummyComponents/headBar";
import PreviewAppBody from "./dummyComponents/appBody";

const ProductPreview: React.FC = () => {
  return (
    <div className='hidden h-screen w-full items-center justify-center md:flex'>
      <div className='m-auto h-[80%] w-[70%] rounded-xl bg-[rgba(255,255,255,0.3)] p-4 backdrop-blur-2xl'>
        <div className='card relative grid h-full w-full grid-rows-[2rem_2rem_1fr] rounded-xl bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl'>
          <PreviewHeadBar />

          <PreviewAppBody />

        </div>

      </div>
    </div>
  );
};

export default ProductPreview;
