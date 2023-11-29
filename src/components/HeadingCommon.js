import React from "react";

export default function HeadingCommon(props) {
  return (
    <>
      <div className="text-xl font-medium text-[#CE6CAA]">{props.heading}</div>
      <hr
        style={{
          border: 0,
          height: "1.5px",
          backgroundColor: "#CE6CAA",
          margin: 0,
        }}
      />
    </>
  );
}
