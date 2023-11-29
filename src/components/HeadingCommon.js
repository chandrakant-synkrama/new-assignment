import React from "react";

export default function HeadingCommon(props) {
  return (
    <>
      <div className="text-xl font-medium text-[#CE6CAA]">{props.heading}</div>
      <div className="w-full">
        <hr
          style={{
            border: 0,
            borderTop: "2px solid #CE6CAA",
            margin: 0,
          }}
        />
      </div>
    </>
  );
}
