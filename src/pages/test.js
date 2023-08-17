import React from "react";

import { Button } from "@nextui-org/react";

import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter();
  const buttonClick = () => {
    router.push("/");
  };
  return (
    <>
      <div className="h-[50px] flex flex-row justify-between px-3 items-center cursor-default">
        <h1 className="">Name</h1>
        <Button bordered className="bg-indigo-600 text-black ">
          Click
        </Button>
        <div className="flex flex-row space-x-5 hover:bg-sky-700">
          <h1 className="">Address</h1>
          <h1 className="">Position</h1>
          <h1 className="">Position</h1>
        </div>
      </div>
      <div>
        <button
          onClick={buttonClick}
          className="border-solid border-2 border-indigo-600 px-7 rounded-lg cursor-progress"
        >
          click me
        </button>
      </div>
    </>
  );
};

export default Test;
