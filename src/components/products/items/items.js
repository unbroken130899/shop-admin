import { useState, useEffect } from "react";
import axios from "axios";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { useParams } from "react-router-dom";
import Search from "../../common/search/search";
import Badge from "../../common/badge/badge";
import { Tabs, Tab, Wrapper, Flex } from "./items.e";
import ProductTable from "./product-table/product-table";
import Navigation from "../../common/navigation/navigation";

function Items() {
  const [defaultData, setDefaultData] = useState();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState();
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("products_tab"))?.tab
      ? JSON.parse(localStorage.getItem("products_tab")).tab
      : "all"
  );
  const [total, setTotal] = useState();
  const [page, setPage] = useState(1);
  let { cat_id, tag } = useParams();
  useEffect(() => {
    axios
      .post(
        "https://beeto.in1.uz/api/item/moderator/get-pagin",
        {
          limit: 20,
          page: page,
          search: `${search}`,
          category_id: cat_id,
          tag_id: tag,
          show_on_bot:
            state === "active" ? true : state === "inactive" ? false : null,
          sort_by: sortBy,
          sort_order: sortOrder,
        },
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlZXRvYWRtaW4iLCJyb2xlIjoibW9kZXJhdG9yIiwiaWF0IjoxNjQ5NDIwNjUzLCJleHAiOjE2NTAwMjU0NTN9.-rpYtkFwSEFDRK2VpQSyxHdjf0ZqEFh-ZRbN6TJQ_PY",
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        setTotal(res.data.data.total);
        setDefaultData(res.data.data.data);
        window.scrollTo(0, 0);
      });
  }, [search, page, cat_id, tag, state, sortBy, sortOrder]);

  const getAll = () => {
    axios
      .post(
        "https://beeto.in1.uz/api/item/moderator/get-pagin",
        {
          limit: 100000,
          page: page,
          search: `${search}`,
          category_id: cat_id,
          tag_id: tag,
          show_on_bot:
            state === "active" ? true : state === "inactive" ? false : null,
        },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userData")).token
            }`,
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        let custom = [];
        response.data.data.data.map((item, i) => {
          custom[i] = {
            Name: item.name,
            "Category Name": item.category_name,
            Prices: item.prices.map(
              (p) => `${p.from} product - ${p.price.toLocaleString()} sum`
            ),
            Brand: item.brand,
            Manufacturer: item.manufacturer,
            Stock: Math.floor(item.in_stock),
            Compound: item.compound,
          };
        });
        exportToCSV(custom, "products");
      })

      .catch((error) => {
        alert(error?.message);
      });
  };

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Wrapper>
      <Flex>
        <Tabs>
          <Tab
            className={state === "all" ? "active" : ""}
            onClick={() => {
              setState("all");
              let previousState = localStorage.getItem("products_tab")
                ? JSON.parse(localStorage.getItem("products_tab"))
                : {};
              previousState.tab = "all";
              localStorage.setItem(
                "products_tab",
                JSON.stringify(previousState)
              );
            }}
          >
            <span>All</span>{" "}
            {state === "all" && <Badge text={total} rounded soft="danger" />}
          </Tab>
          <Tab
            className={state === "active" ? "active" : ""}
            onClick={() => {
              setState("active");
              let previousState = localStorage.getItem("products_tab")
                ? JSON.parse(localStorage.getItem("products_tab"))
                : {};
              previousState.tab = "active";
              localStorage.setItem(
                "products_tab",
                JSON.stringify(previousState)
              );
            }}
          >
            <span>Active</span>{" "}
            {state === "active" && <Badge text={total} rounded soft="danger" />}
          </Tab>
          <Tab
            className={state === "inactive" ? "active" : ""}
            onClick={() => {
              setState("inactive");
              let previousState = localStorage.getItem("products_tab")
                ? JSON.parse(localStorage.getItem("products_tab"))
                : {};
              previousState.tab = "inactive";
              localStorage.setItem(
                "products_tab",
                JSON.stringify(previousState)
              );
            }}
          >
            <span>Inactive</span>{" "}
            {state === "inactive" && (
              <Badge text={total} rounded soft="danger" />
            )}
          </Tab>
        </Tabs>
        <Flex>
          <Search
            value={search}
            onChange={setSearch}
            small={true}
            placeholder="Search Products ..."
          />
          <i onClick={getAll} className="fa-regular fa-file-export" />
        </Flex>
      </Flex>
      <ProductTable
        sortBy={sortBy}
        sortOrder={sortOrder}
        setSortBy={setSortBy}
        setSortOrder={setSortOrder}
        data={defaultData}
      />
      <Navigation
        current={page}
        total={Math.round(total / 20)}
        next={() => setPage(page + 1)}
        prev={() => setPage(page - 1)}
        onChange={setPage}
      />
    </Wrapper>
  );
}

export default Items;
