import Pagename from "../../components/common/pagename/pagename";
import { Grid1x4, PageWrapper } from "../../components/common/global/global";
import Filter from "../../components/products/filter/filter";
import Items from "../../components/products/items/items";

function Products() {
  return (
    <>
      <Pagename text={"Products"} />
      <PageWrapper>
        <Grid1x4>
          <Filter />
          <Items />
        </Grid1x4>
      </PageWrapper>
    </>
  );
}

export default Products;
