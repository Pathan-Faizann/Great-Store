import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { Datacontext } from "../context/context";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  const { isLogged, setIslogged } = useContext(Datacontext);
  function logout() {
    localStorage.setItem("islogged", "false");
    setIslogged(false);
  }

  return (
    <nav id="nav" className="navbar navbar-expand-lg   ">
      <div className="container-fluid">
        <span className="navbar-brand ms-5 ">Great Store</span>
        <button
          className="navbar-toggler btn bg-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <IoMdMenu size={30} color="beige"/>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-center fs-4" to="/">
                <IoHomeOutline className="mico" size={35} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center fs-4" to="/products">
                <GiClothes className="mico" size={40} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center fs-4" to="/cart">
                <MdOutlineShoppingCart className="mico" size={35} />
              </Link>
            </li>
            <div className="dropdown">
              <button
                className="btn nav-link drop dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ><CgProfile className="mico" size={33} />
                
              </button>
              <ul className="dropdown-menu mt-3 bg-transparent">
                 {isLogged ? (
              <li className="nav-item">
                <Link
                  onClick={logout}  
                  className="nav-link text-center fs-4"
                  to=""
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link text-center fs-4" to="/login">
                  Login
                </Link>
              </li>
            )}
                 {isLogged ? null : (
              <li className="nav-item">
                <Link className="nav-link text-center fs-4" to="/register">
                  Register
                </Link>
              </li>
            )}
                
              </ul>
            </div>

           

           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
