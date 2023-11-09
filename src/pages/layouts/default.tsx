import NavBar from "@/components/navbar/navbar";
import React, { type ReactElement } from "react";

interface props {
  children?: ReactElement | null;
}

function DefaultLayout({ children }: props): React.ReactElement {
  return (
    <div className='h-full w-full'>
      <NavBar />
      <div className='min-h-[calc(100vh-5rem)] h-[calc(100vh-5rem)] max-h-full w-full mt-0 lg:mt-20 relative'>{children}</div>
    </div>
  );
}

export default DefaultLayout;
