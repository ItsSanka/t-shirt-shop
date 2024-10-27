import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="flex bg-blue-950 rounded-xl lg:p-5 lg:flex-row min-[320px]:flex-col min-[320px]:p-2">
        <div className="lg:w-5/12 lg:pr-9 min-[320px]:w-full min-[320px]:0">
          <h2 className="text-white font-bold lg:text-4xl md:text-2xl lg:text-left capitalize min-[320px]:mb-2 min-[320px]:text-center min-[320px]:text-xl">
          Get our emails for info on new items, sales and more.
          </h2>
        </div>
        <div className="bg-white p-3 rounded-xl p3 lg:w-7/12 m-auto min-[320px]:w-full">
          <form className="md:flex gap-3 text-center min-[320px]:block">
            <input
              className="py-3 px-8 rounded-xl text-black w-full border-solid border-2 border-black md:mb-0 min-[320px]:mb-2"
              type="text"
              name="mail"
              placeholder="Enter your Email"
            />
            <input
              className="rounded-md text-white bg-blue-950 py-3 px-8 font-normal m-auto"
              type="submit"
              value="Register Now"
            />
          </form>
        </div>
      </div>

      <div className="footer py-10 border-b border-b-blue-500 md:flex justify-between min-[320px]:block">
        <div className="md:mb-0 min-[320px]:mb-3">
          <ul className="flex md:gap-5 min-[320px]:gap-3 min-[320px]:justify-center">
            <li className="!font-black text-md">
              <Link to="/">Home</Link>
            </li>
            <li className="!font-black text-md">
              <Link to="/ProductPage">Product</Link>
            </li>
            <li className="!font-black text-md">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 min-[320px]:justify-center">
          <a href="fb" className="hover:ease-in-out duration-500 hover:scale-105">
            <FontAwesomeIcon className="text-blue-950" icon={faFacebook} />
          </a>
          <a href="li" className="hover:ease-in-out duration-500 hover:scale-105">
            <FontAwesomeIcon className="text-blue-950" icon={faLinkedin} />
          </a>
          <a href="in" className="hover:ease-in-out duration-500 hover:scale-105">
            <FontAwesomeIcon className="text-blue-950" icon={faInstagram} />
          </a>
          <a href="in" className="hover:ease-in-out duration-500 hover:scale-105">
            <FontAwesomeIcon className="text-blue-950" icon={faTwitter} />
          </a>
        </div>
      </div>

      <div className="flex md:flex-row md:justify-between items-center pt-5 min-[320px]:flex-col min-[320px]:justify-center">
        <div>
          <p>© 2024 erona. All rights reserved.</p>
        </div>
        <div>
          <Link to="/">
            <img className="w-[135px]" src={assets.logo} alt="logo" />
          </Link>
        </div>
        <div className=" footer flex gap-5">
          <a href="terms">Terms of Service</a>
          <a href="privacy">Privacy Policy</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
