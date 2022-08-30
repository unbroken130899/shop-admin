import { createContext, useState } from "react";

export const MenuSizeContext = createContext();
export function MenuSizeProvider(props) {
  const [size, setSize] = useState(false);
  const toggleMenu = () => {
    setSize(!size);
  };
  return (
    <div>
      <MenuSizeContext.Provider  value={{size, toggleMenu}}>
        {props.children}
      </MenuSizeContext.Provider>
    </div>
  );
}
