import React, { useEffect, useState } from "react";
import { assets } from "../Assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

      {loading ? (
        <h2 className="flex items-center justify-center text-slate-800 text-center px-5 text-3xl font-bold uppercase">
          Loading...
        </h2>
      ) : (
        <section>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6">
            {products.map((product) => (
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
                  {" "}
                  {product.name}
                </h3>
                <p className="text-neutral-600 text-sm font-bold">
                  Product: {product.details.type} | Size: {product.details.size}
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
                <button title="Add to cart" className="absolute z-10 right-6 top-5 border bg-orange-100 w-10 h-10 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon
                    className="text-blue hover:text-black duration-500 cursor-pointer hover:scale-105"
                    icon={faCartShopping}
                  />
                </button>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Product;
