import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/darkMode";
import Button from "../../common/button/button";

export default function DarkMode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <Button
      ghost="secondary"
      icon="header"
      text={
        darkMode ? (
          <i className="fa-regular fa-moon" />
        ) : (
          <i className="fa-solid fa-brightness"></i>
        )
      }
      onClick={(e)=>toggleDarkMode(e)}
    />
  );
}
