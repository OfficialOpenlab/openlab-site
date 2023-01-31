import "./styles.css";
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="container-fuid cards_products">
      <div className="card">
        <img
          src="/Img/laptop.png"
          className="card-img-top"
          alt="..."
          style={{ marginTop: "10%" }}
        />
        <div className="card-body">
          <h2 style={{ fontWeight: "bolder", fontSize: "2.5rem" }}>
            Landing Page
          </h2>
          <p className="card-text">Site Informativo</p>
          <Link
            to="contact"
            className="btn botao2"
            style={{ backgroundColor: "#37af96", color: "#fafafa" }}
          >
            Faça seu orçamento aqui!
          </Link>
        </div>
      </div>
      <div className="card">
        <img
          src="/Img/server.png"
          className="card-img-top"
          alt="..."
          style={{ marginTop: "10%" }}
        />
        <div className="card-body">
          <h2 style={{ fontWeight: "bolder", fontSize: "2.5rem" }}>
            CRUD Page
          </h2>
          <p className="card-text">Site com Servidor</p>
          <Link
            to="contact"
            className="btn botao2"
            style={{ backgroundColor: "#37af96", color: "#fafafa" }}
          >
            Faça seu orçamento aqui!
          </Link>
        </div>
      </div>
      <div className="card">
        <img
          src="/Img/pc.png"
          className="card-img-top"
          alt="..."
          style={{ marginTop: "10%" }}
        />
        <div className="card-body">
          <h2 style={{ fontWeight: "bolder", fontSize: "2.5rem" }}>
            FullStack Page
          </h2>
          <p className="card-text">Site Completo</p>
          <Link
            href="contact"
            className="btn botao2"
            style={{ backgroundColor: "#37af96", color: "#fafafa" }}
          >
            Faça seu orçamento aqui!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
