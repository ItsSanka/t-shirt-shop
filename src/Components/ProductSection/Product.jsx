import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {add} from "../../actions/action";
import { assets } from "../Assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Product() {

  const cart = useSelector(state => state.updateCart)
  const dispatch = useDispatch()
  console.log(cart);
  

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sizeFilter, setSizeFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState([0, 100]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await fetch(
          "https://my-json-server.typicode.com/poddatest/test-project/db"
        );
        const data = await res.json();
        setProducts(data.shipments);
        setLoading(false);
      } catch (error) {
        console.error(error); 
        setLoading(false);
      }
    };
    fetchProductData();
  }, []); 

  const filteredProducts = products.filter((product) => {
    const isSizeMatch = sizeFilter ? product.details.size === sizeFilter : true;
    const isPriceMatch =
      product.details.price >= priceFilter[0] &&
      product.details.price <= priceFilter[1];
    return isSizeMatch && isPriceMatch;
  });

  const send =(product)=>{
    dispatch(add(product))
  }

  return (
    <>
      <div className="headings md:flex md:text-left justify-between items-center pb-6 min-[320px]:block min-[320px]:text-center">
        <h3 className="font-robo text-3xl text-blue-950 font-semibold">
          <span className="text-lg text-black">
            Hard to choose right products for your choice?
          </span>{" "}
          <br /> Our Products
        </h3>
        <button
          type="button"
          href="#"
          className="rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2 md:m-0 min-[320px]:m-auto min-[320px]:mt-2"
        >
          View More <img src={assets.right} alt="play" />
        </button>
      </div>

      <div className="row">
        <div className="col-lg-2 col-md-12 col-xs-12">
          <div className="mb-3">
            <h5>Sizes</h5>
            <div className="flex flex-col gap-2">
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="size"
                  value=""
                  checked={sizeFilter === ""}
                  onChange={() => setSizeFilter("")}
                />
                All
              </label>
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="size"
                  value="xsmall"
                  checked={sizeFilter === "xsmall"}
                  onChange={() => setSizeFilter("xsmall")}
                />
                XS
              </label>
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="size"
                  value="small"
                  checked={sizeFilter === "small"}
                  onChange={() => setSizeFilter("small")}
                />
                S
              </label>
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="size"
                  value="medium"
                  checked={sizeFilter === "medium"}
                  onChange={() => setSizeFilter("medium")}
                />
                M
              </label>
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="size"
                  value="large"
                  checked={sizeFilter === "large"}
                  onChange={() => setSizeFilter("large")}
                />
                L
              </label>
            </div>
          </div>
          <div>
            <h5>Price</h5>
            <label className="">
              <input
                type="number"
                placeholder="Min"
                value={priceFilter[0]}
                onChange={(e) =>
                  setPriceFilter([Number(e.target.value), priceFilter[1]])
                }
                className="mr-2 p-2 border rounded w-20"
              />
              -
              <input
                type="number"
                placeholder="Max"
                value={priceFilter[1]}
                onChange={(e) =>
                  setPriceFilter([priceFilter[0], Number(e.target.value)])
                }
                className="ml-2 p-2 border rounded w-20"
              />
            </label>
          </div>
        </div>
        <div className="col-lg-10 col-md-12 col-xs-12">
          {loading ? (
            <h2 className="flex items-center justify-center text-slate-800 text-center px-5 text-3xl font-bold uppercase">
              Loading...
            </h2>
          ) : (
            <section>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <article
                      key={product.id}
                      className="shadow-lg p-3 rounded-2xl relative"
                    >
                      <img
                        src={product.details.image}
                        alt={product.name}
                        className="rounded-2xl pb-3 w-100 h-[300px]"
                      />
                      <h3 className="text-blue-950 font-bold text-lg">
                        {product.name}
                      </h3>
                      <p className="text-neutral-600 text-sm font-bold">
                        Product: {product.details.type} | Size:{" "}
                        {product.details.size}
                      </p>
                      <h4 className="text-blue-950 font-bold text-md mt-1">
                        ${product.details.price}
                      </h4>
                      <div className="flex items-center ju gap-3 p-2 mt-2 rounded-lg bg-yellow-200">
                        <img src={assets.gift} alt="gift" />
                        <h4 className="text-blue-950 font-semibold text-sm m-0">
                          | {product.details.tag || "No special tag"}
                        </h4>
                      </div>
                      <button
                        onClick={()=>send(product)}
                        title="Add to cart"
                        className="absolute z-10 right-6 top-5 border bg-orange-100 w-10 h-10 rounded-full flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          className="text-blue hover:text-black duration-500 cursor-pointer hover:scale-105"
                          icon={faCartShopping}
                        />
                      </button>
                    </article>
                  ))
                ) : (
                  <h3 className="text-center text-2xl text-red-600">
                    No products match the selected size
                  </h3>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
