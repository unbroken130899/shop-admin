import React, { useContext } from "react";
import { MenuSizeContext } from "../../../context/menuSize";

export default function MenuResizer() {
  const {toggleMenu, size} = useContext(MenuSizeContext);
  return (
    <i
      onClick={() => toggleMenu(!size)}
      className="fa-solid fa-bars-staggered"
    />
  );
}
