import "./styles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#004138" }}
    >
      <div className="container-fluid">
        <div className="nav_content">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="nav_a_content">
              <Link className="navbar-brand font_title_navbar" to="/">
                Openlab
              </Link>
              <Link className="navbar-brand " aria-current="page" to="products">
                Produtos
              </Link>
              <Link
                className="navbar-brand "
                aria-current="page"
                to="contact"
              >
                Projetos
              </Link>
            </div>

            <div className="d-flex">
              <Link to="" className="svg_a1 navbar-brand">
                <svg
                  className="svg_sacola bi bi-bag-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                </svg>
              </Link>
              <Link to="" className="svg_a2 navbar-brand">
                <svg
                  className="svg_user bi bi-person-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
