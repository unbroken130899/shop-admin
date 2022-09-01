import React, { useContext, useEffect } from "react";
import FullScreen from "react-fullscreen-crossbrowser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Container,
  Flex,
  GlobalStyle,
} from "./components/common/global/global";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import { AuthContext } from "./context/auth";
import { DarkModeContext } from "./context/darkMode";
import { FullScreenContext } from "./context/fullScreen";
import Auth from "./pages/auth/auth";
import Products from "./pages/products/products";
import Reports from "./pages/reports/reports";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { full } = useContext(FullScreenContext);
  const { isLogged } = useContext(AuthContext);

  useEffect(() => {
    if (window.fullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    localStorage.removeItem("products_tab");
  }, []);

  return (
    <>
      <FullScreen enabled={full}>
        <BrowserRouter>
          <GlobalStyle isFull={full} isLight={darkMode} />
          {isLogged ? (
            <Flex>
              <Menu />
              <Container>
                <Header />
                <Routes>
                  <Route path="/" element={<Reports />} />
                  <Route path="*" element={<Reports/>} />
                  <Route path="/products/:query" element={<Products />} />
                  <Route path="/products/tag/:tag" element={<Products />} />
                  <Route
                    path="/products/:query/:cat_id"
                    element={<Products />}
                  />
                </Routes>
              </Container>
            </Flex>
          ) : (
            <Auth />
          )}
        </BrowserRouter>
      </FullScreen>
    </>
  );
}

export default App;
