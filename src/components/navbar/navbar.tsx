import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import NavOptions from "./options";
import NavActions from "./actions";
import HelpSection from "./quickAccess/help";
import useNavBar from "./useNavBar";

function Logo() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/")}
      className='logo relative h-full w-7'
    >
      <Image src='/logo.svg' alt='Logo' fill />
    </button>
  );
}

function NavBar(): React.ReactElement {
  const hideNav = useNavBar();
  return (
    <div
      className={`${
        hideNav ? "slide-out-top opacity-0" : "opacity-100"
      } fixed top-0 z-10 hidden lg:flex h-20 w-full items-center gap-9 bg-[rgba(255,255,255,0.5)] px-28 shadow-sm transition-all duration-300`}
    >
      <Logo />
      <NavOptions />

      <div className='flex items-center gap-3'>
        <HelpSection />
        <NavActions />
      </div>
    </div>
  );
}

export default NavBar;
