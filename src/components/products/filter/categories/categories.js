import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../../../../hooks/useCategory";
import Badge from "../../../common/badge/badge";
import { AccordionBody, Wrapper } from "../filter.e";
import { Category, SubCategories, SubCategory } from "./categories.e";

function Categories() {
  const { categories } = useCategories();
  const [open, setOpen] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    let categoryId =
      localStorage.getItem("products_tab") &&
      JSON.parse(localStorage.getItem("products_tab")).category;
    categoryId && navigate(`/products/category/${categoryId}`);
  }, []);

  return (
    <Wrapper>
      {categories &&
        categories.map((category, i) => {
          return (
            <Category key={i}>
              <h5 onClick={() => (open === i ? setOpen(-1) : setOpen(i))}>
                {category.name}
                <Badge
                  soft="primary"
                  text={category.children.length && category.children.length}
                />
              </h5>
              <AccordionBody
                style={open !== i ? { display: "none" } : { display: "block" }}
              >
                <SubCategories>
                  {category.children &&
                    category.children.map((child, i) => {
                      return (
                        <SubCategory
                          onClick={() => {
                            navigate(`/products/category/${child._id}`);
                            let previousState = localStorage.getItem(
                              "products_tab"
                            )
                              ? JSON.parse(localStorage.getItem("products_tab"))
                              : {};
                            previousState.category = child._id;
                            localStorage.setItem(
                              "products_tab",
                              JSON.stringify(previousState)
                            );
                          }}
                          key={i}
                        >
                          {child.name}
                        </SubCategory>
                      );
                    })}
                </SubCategories>
              </AccordionBody>
            </Category>
          );
        })}
    </Wrapper>
  );
}

export default Categories;
