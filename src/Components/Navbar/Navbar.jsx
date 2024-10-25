import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { assets } from "../Assets/images";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
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
                  to="/category"
                >
                  Category
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-md text-blue-950 font-bold hover:ease-in-out duration-500 hover:text-black"
                  to="/about"
                >
                  About
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

        <div className="xl:block lg:hidden md:block sm:block min-[320px]:hidden">
          <button
            type="button"
            href="#"
            className="rounded-full text-white bg-blue-950 py-2 px-6 font-bold hover:ease-in-out duration-500 hover:bg-black hover:scale-105"
          >
            Join the community
          </button>
        </div>

        <div className="lg:flex items-center justify-center gap-3 min-[320px]:hidden">
          <div>
            <FontAwesomeIcon className="text-yellow-950 hover:text-black duration-500 cursor-pointer hover:scale-105" icon={faCartShopping} />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
