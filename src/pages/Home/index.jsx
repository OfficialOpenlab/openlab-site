import "./styles.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className=" container-fluid main_content">
      <div className="row">
        <div className="col img_content"></div>
        <div className="col text_content">
          <h1>OPENLAB</h1>
          <br />
          <h2>Sistemas com as</h2>
          <h2>funcionalidades que</h2>
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
    </div>
  );
}

export default Home;
