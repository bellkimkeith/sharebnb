"use client";

import React from "react";
import CustomButton from "../form/CustomButton";

const ConversationDetail = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4 ">
        <div className="w-[80%] rounded-xl bg-gray-200 px-6 py-4 ">
          <p className="text-gray-500 font-bold">Jon Snow</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            animi in distinctio expedita culpa inventore nobis at? Modi vitae
            aut ipsa numquam, similique, cumque cupiditate ea non consequuntur
            eum fugiat.
          </p>
        </div>
        <div className="w-[80%] ml-[20%] rounded-xl bg-blue-200 px-6 py-4 ">
          <p className="text-gray-500 font-bold">Rick Sanchez</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            animi in distinctio expedita culpa inventore nobis at? Modi vitae
            aut ipsa numquam, similique, cumque cupiditate ea non consequuntur
            eum fugiat.
          </p>
        </div>
      </div>
      <div className="mt-4 px-4 py-4 flex border border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="Type here..."
          className="w-full p-2 rounded-xl bg-gray-200"
        />
        <CustomButton
          label="Send"
          onClick={() => console.log("send clicked")}
          className="w-[100px]"
        />
      </div>
    </>
  );
};

export default ConversationDetail;
