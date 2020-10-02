import React from "react";
import types from "./questionTypes/_questionTypes";

const Answer = (props) => {
  // console.log("props", props);
  return (
    <button
      // onClick={console.log("clicked from answer component")}
      onClick={() => props.onClick(props.index)}
    >
      {props.children}
    </button>
  );
};

export default Answer;
