import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import api from '../../services/api';

function Home() {
  const [user, setUser] = useState([]);

  return (
    <div className=" container-fluid main_content">
      <div className="row">
        <div className="col img_content"></div>
        <div className="col text_content">
          <h1>OPENLAB</h1>
          <br />
          <h2>Sistemas com as </h2>
          <h2>funcionalidades que </h2>
          <h2>evoluem seu negócio</h2>
          <Link
            className="btn buton1"
            style={{ backgroundColor: "#37af96" }}
            to="products"
          >
            Evolua já!
          </Link>
        </div>
      </div>
      {/* {user.map(
        user => (
          <>
            <p>{user.name}</p>
            <p>{user.website}</p>
            <p>{user.email}</p>
            <p>{user.contact}</p>
            <p>{user.activity}</p>
            <p>{user.number}</p>
            <p>{user.role}</p>
            <p>{user.id}</p>
          </>
        )
      )} */}
    </div>
  );
}

export default Home;
