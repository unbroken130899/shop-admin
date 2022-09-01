import { useNavigate } from "react-router-dom";
import Button from "../../common/button/button";
import Categories from "./categories/categories";
import FilterAccordion from "./filter-accordion/filter-accordion";
import { AccordionBody, FilterSection, Head, Wrapper } from "./filter.e";
import useTags from "../../../hooks/useTags";

function Filter() {
  const navigate = useNavigate();
  const { tagDropdown } = useTags();
  return (
    <Wrapper>
      <Head>
        <h5>
          Filters{" "}
          <Button
            onClick={() => {
              localStorage.removeItem("products_tab");
              navigate("/products/all");
            }}
            text="Clear"
            color="link"
          />
        </h5>
      </Head>
      <FilterSection>
        <p className="text">Products</p>
        <AccordionBody>
          <Categories />
        </AccordionBody>
      </FilterSection>
      {/* <FilterAccordion title="Brands" name="brand" items={tagDropdown} /> */}
      <FilterAccordion
        path="/products/tag"
        title="Tags"
        name="tags"
        items={tagDropdown}
      />
    </Wrapper>
  );
}

export default Filter;
