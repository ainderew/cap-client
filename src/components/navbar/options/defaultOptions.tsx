import React from "react";
import { useRouter } from "next/router";

function DefaultOptions(): React.ReactElement {
  const router = useRouter();
  const { pathname } = router;
  const currPath = pathname.split("/")[2];

  const options = [
    { key: "aboutUs", label: "About us" },
    { key: "contactUs", label: "Contact us" },
  ];

  return (
    <>
      {options.map((option) => (
        <button
          onClick={() => void router.replace(`/${option.key}`)}
          className={`${
            currPath === option.key ? "text-primary" : null
          } h-full w-auto hover:text-primary`}
        >
          {option.label}
        </button>
      ))}
    </>
  );
}

export default DefaultOptions;
