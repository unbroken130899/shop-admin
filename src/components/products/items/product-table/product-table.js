import { Wrapper } from "./product-table.e";
import Row from "./row/row";

function ProductTable({ data, setSortBy, setSortOrder, sortBy, sortOrder }) {
  return (
    <Wrapper className="responsive-table">
      <table>
        <thead>
          <tr>
            <th
              onClick={() => {
                if (sortOrder === 1) {
                  setSortOrder(-1);
                } else {
                  setSortBy("");
                  setSortOrder();
                }
                if (sortBy !== "name") {
                  setSortBy("name");
                  setSortOrder(1);
                }
              }}
            >
              Product{" "}
              <i
                className={
                  sortBy === "name"
                    ? "fa-solid fa-sort active"
                    : "fa-solid fa-sort"
                }
              />
            </th>
            <th
              width="15%"
              onClick={() => {
                if (sortOrder === 1) {
                  setSortOrder(-1);
                } else {
                  setSortBy("");
                  setSortOrder();
                }
                if (sortBy !== "brand") {
                  setSortBy("brand");
                  setSortOrder(1);
                }
              }}
            >
              Brand{" "}
              <i
                className={
                  sortBy === "brand"
                    ? "fa-solid fa-sort active"
                    : "fa-solid fa-sort"
                }
              />
            </th>
            <th
              width="10%"
              onClick={() => {
                if (sortOrder === 1) {
                  setSortOrder(-1);
                } else {
                  setSortBy("");
                  setSortOrder();
                }
                if (sortBy !== "in_stock") {
                  setSortBy("in_stock");
                  setSortOrder(1);
                }
              }}
            >
              Stock{" "}
              <i
                className={
                  sortBy === "in_stock"
                    ? "fa-solid fa-sort active"
                    : "fa-solid fa-sort"
                }
              />
            </th>
            <th width="12%">Desciption</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, i) => {
              return <Row item={item} key={i} />;
            })}
        </tbody>
      </table>
    </Wrapper>
  );
}

export default ProductTable;
