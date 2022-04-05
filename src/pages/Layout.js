import { Outlet, Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  return (
    <>
      <nav id="main-navbar">
        <h1>
          <i class="fa-solid fa-dove"></i> Leo the Budgie
        </h1>
        <ul>
          <li>
          <i class="fa-solid fa-house"></i>
            <Link className="home" to="/">
              Home
            </Link>
          </li>
          <li>
          <i class="fa-solid fa-circle-info"></i>
            <Link className="about" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
