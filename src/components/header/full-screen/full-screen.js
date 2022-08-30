import React, { useContext } from "react";
import { FullScreenContext } from "../../../context/fullScreen";
import Button from "../../common/button/button";

export default function FullScreen() {
  const { full, toggleScreen } = useContext(FullScreenContext);
  return (
    <Button
      ghost="secondary"
      icon="header"
      text={
        !full ? (
          <i className="fa-regular fa-expand" />
        ) : (
          <i className="fa-regular fa-up-right-and-down-left-from-center" />
        )
      }
      onClick={(e) => toggleScreen(!full)}
    />
  );
}
