import React from "react";
import { Wrapper } from "./loader.e";

function Loader() {
  return (
    <Wrapper>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
}

export default Loader;
