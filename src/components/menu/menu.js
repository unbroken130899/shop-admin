import { useEffect, useState } from "react";
import axios from "axios";
import { Collapser, Trigger, Panel } from "react-collapser";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import LogoIcon from "../../assets/images/logo-icon.svg";
import {
  ForDesktop,
  LinkItem,
  Links,
  Logo,
  Responsive,
  Wrapper,
  Closer,
} from "./menu.e";
import { MenuSizeContext } from "../../context/menuSize";

function Menu() {
  const { size, toggleMenu } = useContext(MenuSizeContext);
  const [newOrder, setNewOrder] = useState(0);

  useEffect(() => {
    axios
      .post(
        "https://beeto.in1.uz/api/moderator-order/get-pagin",
        {
          page: 1,
          state: "new-order",
          limit: 10,
        },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userData")).token
            }`,
          },
        }
      )
      .then((response) => {
        setNewOrder(response.data.data?.new_orders);
      });
  }, []);

  return (
    <>
      <ForDesktop>
        <Wrapper className={size ? "small" : ""}>
          <Logo
            onClick={() => window.location.reload()}
            className={size ? "small" : ""}
          >
            <img src={LogoIcon} alt="Beeto" /> <span>Beeto</span>
          </Logo>
          <Links className={size ? "small" : ""}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <LinkItem>
                <i className="fa-regular fa-gauge-high" /> <span>Reports</span>
              </LinkItem>
            </NavLink>
            <NavLink
              to="/orders"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <LinkItem>
                <i className="fa-regular fa-bookmark" />
                <span>Orders</span>
                {newOrder > 0 && <b>{newOrder}</b>}
              </LinkItem>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/drivers"
            >
              <LinkItem>
                <i className="fa-regular fa-car-side" />
                <span>Drivers</span>
              </LinkItem>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/clients"
            >
              <LinkItem>
                <i className="fa-regular fa-user" />
                <span>Clients</span>
              </LinkItem>
            </NavLink>
            <Collapser className="accordion">
              <Trigger>
                <LinkItem>
                  <i className="fa-regular fa-cart-shopping" />
                  <span>Products</span>
                  <i className="fa-solid fa-chevron-down" />
                </LinkItem>
              </Trigger>
              <Panel>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/new-products"
                >
                  <LinkItem>
                    <i className="fa-regular fa-circle-plus" />
                    <span>New Products</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/new-category"
                >
                  <LinkItem>
                    <i className="fa-regular fa-folder-plus" />
                    <span>New Category</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/products/all"
                >
                  <LinkItem>
                    <i className="fa-regular fa-bag-shopping" />
                    <span>Products</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/tags"
                >
                  <LinkItem>
                    <i className="fa-regular fa-hashtag" /> <span>Tags</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/categories"
                >
                  <LinkItem>
                    <i className="fa-solid fa-align-left" />{" "}
                    <span>Categories</span>
                  </LinkItem>
                </NavLink>
              </Panel>
            </Collapser>
            <Collapser className="accordion">
              <Trigger>
                <LinkItem>
                  <i className="fa-regular fa-sliders-up" />{" "}
                  <span>Settings</span>{" "}
                  <i className="fa-solid fa-chevron-down" />
                </LinkItem>
              </Trigger>
              <Panel>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/settings"
                >
                  <LinkItem>
                    <i className="fa-regular fa-gears" />
                    <span>General</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/banners"
                >
                  <LinkItem>
                    <i className="fa-regular fa-layer-plus" />
                    <span>Banners</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/news"
                >
                  <LinkItem>
                    <i className="fa-regular fa-bullhorn" />
                    <span>News</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/regions"
                >
                  <LinkItem>
                    <i className="fa-regular fa-location-dot" />{" "}
                    <span>Regions</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/promo-code"
                >
                  <LinkItem>
                    <i className="fa-solid fa-percent" />
                    <span>Promo Code</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/ads"
                >
                  <LinkItem>
                    <i className="fa-regular fa-rectangle-ad" />
                    <span>Advertisements</span>
                  </LinkItem>
                </NavLink>
                {/* <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/organizations"
                >
                  <LinkItem>
                    <i className="fa-regular fa-apartment" />{" "}
                    <span>Organizations</span>
                  </LinkItem>
                </NavLink> */}
                {/* <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/moderators"
                >
                  <LinkItem>
                    <i className="fa-regular fa-user-pilot" />
                    <span>Moderators</span>
                  </LinkItem>
                </NavLink> */}
              </Panel>
            </Collapser>
          </Links>
        </Wrapper>
      </ForDesktop>
      <Responsive style={size ? { display: "block" } : { display: "none" }}>
        <Wrapper className="responsive">
          <Closer onClick={() => toggleMenu(!size)}>
            <i className="fa-solid fa-xmark" />
          </Closer>
          <Logo
            onClick={() => {
              window.location.reload();
              toggleMenu(!size);
            }}
          >
            <img src={LogoIcon} alt="Beeto" /> <span>Beeto</span>
          </Logo>
          <Links>
            <NavLink
              onClick={() => toggleMenu(!size)}
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <LinkItem>
                <i className="fa-regular fa-gauge-high" /> <span>Reports</span>
              </LinkItem>
            </NavLink>
            <NavLink
              onClick={() => toggleMenu(!size)}
              to="/orders"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <LinkItem>
                <i className="fa-regular fa-bookmark" />
                <span>Orders</span>
                {newOrder > 0 && <b>{newOrder}</b>}
              </LinkItem>
            </NavLink>
            <NavLink
              onClick={() => toggleMenu(!size)}
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/drivers"
            >
              <LinkItem>
                <i className="fa-regular fa-car-side" />
                <span>Drivers</span>
              </LinkItem>
            </NavLink>
            <NavLink
              onClick={() => toggleMenu(!size)}
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/clients"
            >
              <LinkItem>
                <i className="fa-regular fa-user" />
                <span>Clients</span>
              </LinkItem>
            </NavLink>
            <Collapser className="accordion">
              <Trigger>
                <LinkItem>
                  <i className="fa-regular fa-cart-shopping" />
                  <span>Products</span>
                  <i className="fa-solid fa-chevron-down" />
                </LinkItem>
              </Trigger>
              <Panel>
                <NavLink
                  onClick={() => toggleMenu(!size)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/new-products"
                >
                  <LinkItem>
                    <i className="fa-regular fa-circle-plus" />
                    <span>New Products</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  onClick={() => toggleMenu(!size)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/new-category"
                >
                  <LinkItem>
                    <i className="fa-regular fa-folder-plus" />
                    <span>New Category</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  onClick={() => toggleMenu(!size)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/products/all"
                >
                  <LinkItem>
                    <i className="fa-regular fa-bag-shopping" />
                    <span>Products</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  onClick={() => toggleMenu(!size)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/tags"
                >
                  <LinkItem>
                    <i className="fa-regular fa-hashtag" /> <span>Tags</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  onClick={() => toggleMenu(!size)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/categories"
                >
                  <LinkItem>
                    <i className="fa-solid fa-align-left" />{" "}
                    <span>Categories</span>
                  </LinkItem>
                </NavLink>
              </Panel>
            </Collapser>
            <Collapser className="accordion">
              <Trigger>
                <LinkItem>
                  <i className="fa-regular fa-sliders-up" />{" "}
                  <span>Settings</span>{" "}
                  <i className="fa-solid fa-chevron-down" />
                </LinkItem>
              </Trigger>
              <Panel>
                <NavLink
                  onClick={() => toggleMenu(!size)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/settings"
                >
                  <LinkItem>
                    <i className="fa-regular fa-gears" />
                    <span>General</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  onClick={() => toggleMenu(!size)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/banners"
                >
                  <LinkItem>
                    <i className="fa-regular fa-layer-plus" />
                    <span>Banners</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  onClick={() => toggleMenu(!size)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/news"
                >
                  <LinkItem>
                    <i className="fa-regular fa-bullhorn" />
                    <span>News</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  onClick={() => toggleMenu(!size)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/regions"
                >
                  <LinkItem>
                    <i className="fa-regular fa-location-dot" />{" "}
                    <span>Regions</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/promo-code"
                >
                  <LinkItem>
                    <i className="fa-solid fa-percent" />
                    <span>Promo Code</span>
                  </LinkItem>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/ads"
                >
                  <LinkItem>
                    <i className="fa-regular fa-rectangle-ad" />
                    <span>Advertisements</span>
                  </LinkItem>
                </NavLink>
                {/* <NavLink
                  onClick={() => toggleMenu(!size)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/organizations"
                >
                  <LinkItem>
                    <i className="fa-regular fa-apartment" />{" "}
                    <span>Organizations</span>
                  </LinkItem>
                </NavLink> */}
                {/* <NavLink
                  onClick={() => toggleMenu(!size)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/moderators"
                >
                  <LinkItem>
                    <i className="fa-regular fa-user-pilot" />
                    <span>Moderators</span>
                  </LinkItem>
                </NavLink> */}
              </Panel>
            </Collapser>
          </Links>
        </Wrapper>
      </Responsive>
    </>
  );
}

export default Menu;
