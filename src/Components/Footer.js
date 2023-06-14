import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-center align-items-center py-4 border-top">
        <div className="col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
          <NavLink
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </NavLink>
          <span className="text-muted">© 2023 FOOD EXPRESS, Inc</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
