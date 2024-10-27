import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { assets } from "../Assets/images";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import { Table } from "react-bootstrap";

import { add, removeOne, remove } from "../../actions/action";

function NavBar() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  const { cart } = useSelector((state) => state.updateCart);

  const getTotal = () => {
    let price = 0;
    cart.map(
      (product) =>
        (price = product.details.price * product.rating.count + price)
    );
    setTotal(price);
  };

  useEffect(() => {
    getTotal()
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="navigation flex items-center justify-between w-full py-4">
        <div className="nav-logo xl:block min-[320px]:hidden">
          <Link to="/">
            <img className="w-[135px]" src={assets.logo} alt="logo" />
          </Link>
        </div>
        <Navbar expand="lg" className="lg:w-auto md:w-4/12 min-[320px]:w-full">
          <Navbar.Brand className="xl:hidden">
            <Link to="/">
              <img className="w-[135px]" src={assets.logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4">
              <Nav.Link>
                <Link
                  className="text-md text-blue-950 font-bold hover:ease-in-out duration-500 hover:text-black"
                  to="/"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-md text-blue-950 font-bold hover:ease-in-out duration-500 hover:text-black"
                  to="/ProductPage"
                >
                  Product
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-md text-blue-950 font-bold hover:ease-in-out duration-500 hover:text-black"
                  to="/contact"
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="lg:block md:block sm:block min-[320px]:hidden">
          <form>
            <input
              className="py-2 px-6 rounded-full text-grey fas"
              type="search"
              placeholder="&#xF002; Search clothing"
            />
          </form>
        </div>

        <div className="xl:block lg:hidden min-[320px]:hidden">
          <button
            type="button"
            href="#"
            className="rounded-full text-white bg-blue-950 py-2 px-6 font-bold hover:ease-in-out duration-500 hover:bg-black hover:scale-105"
          >
            Join the community
          </button>
        </div>

        <div className="lg:flex items-center justify-center gap-3">
          <Button onClick={handleClick}>
            <Badge badgeContent={cart.length} color="primary">
              <FontAwesomeIcon
                className="text-yellow-950 text-lg hover:text-black duration-500 cursor-pointer hover:scale-105"
                icon={faCartShopping}
              />
            </Badge>
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem>
              {cart.length === 0 ? (
                <div>Your cart is empty</div>
              ) : (
                <div className="w-[40rem]">
                  <div>
                    <Table className="striped bordered hover">
                      <thead>
                        <tr>
                          <td>Image</td>
                          <td>Details</td>
                        </tr>
                      </thead>
                      {cart.map((product) => {
                        return (
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  className="w-[5rem] h-[5rem]"
                                  src={product.details.image}
                                  alt={product.name}
                                />
                              </td>
                              <td className="text-sm">
                                <p>{product.name}</p>
                                <p>Price: $ {product.details.price}</p>
                                <p>No of products</p>
                                <div className="flex justify-between w-28 items-center">
                                  <p
                                    className="text-3xl cursor-pointer"
                                    onClick={
                                      product.rating.count === 1
                                        ? () => dispatch(remove(product))
                                        : () => dispatch(removeOne(product))
                                    }
                                  >
                                    -
                                  </p>
                                  <p>{product.rating.count}</p>
                                  <p
                                    className="text-xl cursor-pointer"
                                    onClick={() => dispatch(add(product))}
                                  >
                                    +
                                  </p>
                                </div>
                              </td>
                              <td>
                                <FontAwesomeIcon
                                  title="Remove"
                                  onClick={() => dispatch(remove(product))}
                                  className="text-red-600 cursor-pointer"
                                  icon={faTrash}
                                />
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}

                      <tfoot>
                        <tr>
                          <div>Total: $ {total.toFixed(2)}</div>
                        </tr>
                      </tfoot>
                    </Table>
                  </div>
                </div>
              )}
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default NavBar;
