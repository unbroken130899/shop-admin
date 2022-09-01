import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FilterSection, AccordionBody, FilterItems, Flex } from "../filter.e";

function FilterAccordion({ title, items, name, path }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let tagId =
      localStorage.getItem("products_tab") &&
      JSON.parse(localStorage.getItem("products_tab")).tag;
    tagId && navigate(`${path}/${tagId}`);
  }, []);

  return (
    <FilterSection>
      <p
        onClick={() => setOpen(!open)}
        className={`text ${open ? "open" : ""}`}
      >
        {title} <i className="fa-solid fa-chevron-down" />
      </p>
      <AccordionBody style={!open ? { display: "none" } : { display: "block" }}>
        <FilterItems>
          {items.map((item, i) => {
            return (
              <Flex key={i}>
                <h5
                  onClick={() => {
                    let previousState = localStorage.getItem("products_tab")
                      ? JSON.parse(localStorage.getItem("products_tab"))
                      : {};
                    previousState.tag = item.value;
                    localStorage.setItem(
                      "products_tab",
                      JSON.stringify(previousState)
                    );
                    navigate(`${path}/${item.value}`);
                  }}
                >
                  {name === "tags" && "#"}
                  {item.label}
                </h5>
              </Flex>
            );
          })}
        </FilterItems>
      </AccordionBody>
    </FilterSection>
  );
}

export default FilterAccordion;
