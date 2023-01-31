import "./styles.css";

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
          <button
            type="button"
            className="btn btn buton1"
            style={{ backgroundColor: "#37af96" }}
          >
            {" "}
            <a href="products">Evolua já!</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
