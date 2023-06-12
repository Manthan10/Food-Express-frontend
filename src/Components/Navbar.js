import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";

const Navbar = () => {
  const [cartView, setCartView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const scrollPosition = window.scrollY;

      if (scrollPosition > 1) {
        navbar.classList.add("navbar-transparent");
      } else {
        navbar.classList.remove("navbar-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-1 fst-italic" to="/">
            Food Express
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mx-5">
              <li className="nav-item">
                <NavLink
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/">
                  Home
                </NavLink>
              </li>

              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/">
                    My Orders
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <NavLink className="btn bg-white text-dark mx-1" to="/login">
                  Login
                </NavLink>

                <NavLink className="btn bg-white text-dark mx-1" to="/signup">
                  Sign Up
                </NavLink>
              </div>
            ) : (
              <>
                <div
                  className="btn bg-white text-dark mx-5"
                  onClick={() => setCartView(true)}>
                  My Cart{" "}
                  <Badge pill bg-danger>
                    2
                  </Badge>
                </div>

                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                ) : null}

                <div
                  className="btn bg-white text-danger"
                  onClick={handleLogout}>
                  Logout
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
