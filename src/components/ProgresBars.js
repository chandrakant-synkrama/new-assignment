import { Progress } from "antd";
import React from "react";

export default function ProgresBars({
  type,
  percent,
  strokeColor,
  storkeWidth,
  width,
}) {
  return (
    <>
      <Progress
        type={type ? type : ""}
        percent={percent}
        strokeColor={strokeColor}
        strokeWidth={storkeWidth}
        width={width ? width : ""}
      />
    </>
  );
}
