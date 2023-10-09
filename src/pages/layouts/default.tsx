import NavBar from "@/components/navbar/navbar";
import React, { type ReactElement } from "react";

interface props {
  children?: ReactElement | null;
}

function DefaultLayout({ children }: props): React.ReactElement {
  return (
    <div className='h-full w-full'>
      <NavBar />
      <div className='h-[calc(100vh-5rem)] w-full mt-20 relative'>{children}</div>
    </div>
  );
}

export default DefaultLayout;
