import React from "react";
const ContentBox = ({contentTitle, contentDesc}) => {
  return (
    <>
      <h5 className="fw-bold">{contentTitle}</h5>
      <p>{contentDesc}</p>
    </>
  );
};
export default ContentBox;
