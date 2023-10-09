import {
  AreaChartOutlined,
  ClockCircleOutlined,
  FileSearchOutlined,
  UsergroupAddOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import React from "react";

const TAGS = [
  { label: "Customer Support", icon: <UsergroupAddOutlined style={{color: "#A4f192"}} /> },
  { label: "Trend Analysis", icon: <FileSearchOutlined /> },
  { label: "Analytics", icon: <AreaChartOutlined /> },
  { label: "Cost Savings", icon: <WalletOutlined /> },
  { label: "Time Savings", icon: <ClockCircleOutlined /> },
];

function FeatureTags(): React.ReactElement {
  function renderTag(label: string, icon: any) {
    return (
      <div key={label} className='flex items-center justify-center gap-2 rounded-md bg-white py-2 px-4'>
        <span className="whitespace-nowrap">{label}</span>
        {icon}
      </div>
    );
  }

  return (
    <div className='flex gap-4 flex-wrap text-black text-sm xl:text-base md:items-start md:justify-start items-center justify-center'>
      {TAGS.map((tag) => {
        return renderTag(tag.label, tag.icon);
      })}
    </div>
  );
}

export default FeatureTags;
