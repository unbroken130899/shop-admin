import { createContext, useState } from "react";

export const FullScreenContext = createContext();

export function FullScreenProvider(props) {
  const [full, setFull] = useState(false);
  const toggleScreen = () => {
    setFull(!full);
  };

  return (
    <div>
      <FullScreenContext.Provider value={{ full, toggleScreen, setFull }}>
        {props.children}
      </FullScreenContext.Provider>
    </div>
  );
}
