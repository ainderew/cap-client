import React from "react";
import SpecificChatHeader from "./specificChatHeader";
import { AppstoreFilled } from "@ant-design/icons";
import { Tooltip } from "antd";

const tags = ["Food", "Beverage", "Dessert", "Milk Tea"];

function SpecificChatCategories(): React.ReactElement {
  return (
    <div className='col-end- col-start-1 row-start-5 row-end-7 overflow-hidden rounded-md  bg-white text-gray-500 shadow-lg'>
      <SpecificChatHeader image={<AppstoreFilled />} label='Business data' />
      <div className='flex flex-wrap items-center gap-4 p-4'>
        {tags.map((tag) => {
          return (
            <Tooltip title={`Click to see more "${tag}" stores`} >
              <div className=' rounded-2xl bg-gradient-to-r from-primary to-tertiary px-4  py-1 text-sm text-white'>
                <span className=''>{tag}</span>
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}

export default SpecificChatCategories;
