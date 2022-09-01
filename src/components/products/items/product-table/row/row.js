import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ClickAwayListener from "react-click-away-listener";
import { useNavigate } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  ProductImg,
  Dropdown,
  CardProductImg,
  CardProductInfo,
  CardProductBrand,
  CardProductNumbers,
  CardProductNumber,
  CardProductInfoItem,
} from "../product-table.e";
import Badge from "../../../../common/badge/badge";
import Button from "../../../../common/button/button";
import { Grid1x4 } from "../../../../common/global/global";
import Modal from "../../../../common/modal/modal";

function Row({ item }) {
  const [dropdown, setDropdown] = useState(false);
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  return (
    <ClickAwayListener onClickAway={() => setDropdown(false)}>
      <tr>
        <td className="title">
          <ProductImg>
            <LazyLoadImage alt="" effect="blur" src={item.representation} />
          </ProductImg>
          <div>
            <p>{item.name}</p>
            <span>Category: {item.category_name}</span>
          </div>
        </td>
        <td>{item.brand}</td>
        <td>{Math.round(item.in_stock)}</td>
        <td>
          <Badge
            soft={item.compound ? "success" : "danger"}
            text={item.compound ? "yes" : "no"}
          />
        </td>
        <td>
          <Button
            onClick={() => setDropdown(!dropdown)}
            soft="secondary"
            size="sm"
            text="..."
          ></Button>

          {dropdown && (
            <Dropdown>
              <li onClick={() => setView(true)}>
                <i className="fa-regular fa-eye" />
                View
              </li>
              <li onClick={() => navigate(`/item/edit/${item._id}`)}>
                <i className="fa-regular fa-pen" />
                Edit
              </li>
              <li>
                <i className="fa-regular fa-trash-can" />
                Delete
              </li>
            </Dropdown>
          )}

          {view && (
            <Modal
              width={window.innerWidth < 800 ? "350px" : "auto"}
              setOpen={() => setView(false)}
              open={view}
            >
              <Grid1x4>
                <CardProductImg>
                  <img src={item.representation} alt={item.name} />
                </CardProductImg>
                <CardProductInfo>
                  <h4>{item.name}</h4>
                  <CardProductBrand>
                    <p>
                      <span>Brand: </span>
                      {item.brand}
                    </p>
                    <p>
                      <span>Category: </span>
                      {item.category_name}
                    </p>
                    <p>
                      <span>Manufacturer: </span>
                      {item.manufacturer ? item.manufacturer : "None"}
                    </p>
                  </CardProductBrand>
                  <CardProductNumbers>
                    <CardProductNumber>
                      <i className="fa-solid fa-circle-dollar" />
                      <p>
                        <span>Narx:</span>
                        {item.price !== 0 && item.price}
                        {item.prices[0]?.price && (
                          <b>
                            {item.prices[0]?.price.toLocaleString()}
                            {item.prices[0]?.from && (
                              <span>({item.prices[0]?.from} ta)</span>
                            )}
                          </b>
                        )}
                        {item.prices[1]?.price && (
                          <b>
                            {item.prices[1]?.price.toLocaleString()}
                            <span>({item.prices[1]?.from} ta)</span>
                          </b>
                        )}
                        {item.prices[2]?.price && (
                          <b>
                            {item.prices[2]?.price.toLocaleString()}
                            <span>({item.prices[2].from} ta)</span>
                          </b>
                        )}
                      </p>
                    </CardProductNumber>
                    <CardProductNumber>
                      <i className="fa-solid fa-badge-check" />
                      <p>
                        <span>Sotilgan: </span>
                        {Math.floor(Math.random() * (400 - 20 + 1)) + 20}
                      </p>
                    </CardProductNumber>
                    <CardProductNumber>
                      <i className="fa-solid fa-clone" />
                      <p>
                        <span>Mavjud:</span>
                        {Math.round(item.in_stock)}
                      </p>
                    </CardProductNumber>
                  </CardProductNumbers>
                  <CardProductInfoItem>
                    <span>Size:</span>
                    <p>
                      {item.size} {item.size_type}
                    </p>
                  </CardProductInfoItem>
                  <CardProductInfoItem>
                    <span>Description</span>
                    <p>{item.compound}</p>
                  </CardProductInfoItem>
                </CardProductInfo>
              </Grid1x4>
            </Modal>
          )}
        </td>
      </tr>
    </ClickAwayListener>
  );
}

export default Row;
