import { useEffect, useState } from "react";
import "./styles.css";

function Contact() {
  const [contador, setContador] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [activity, setActivity] = useState("");
  const [number, setNumber] = useState("");
  const [what, setWhat] = useState("");

  useEffect(() => {
    setContador(localStorage.getItem("contador"));
    setName(localStorage.getItem("name"));
    setWebsite(localStorage.getItem("website"));
    setEmail(localStorage.getItem("email"));
    setContact(localStorage.getItem("contact"));
    setActivity(localStorage.getItem("activity"));
    setNumber(localStorage.getItem("number"));
    setWhat(localStorage.getItem("what"));
  }, [contador]);

  const handleChangeName = (e) => {
    localStorage.setItem("name", name);
    return setName(e.target.value);
  };

  const handleChangeWebsite = (e) => {
    localStorage.setItem("website", website);
    return setWebsite(e.target.value);
  };

  const handleChangeEmail = (e) => {
    localStorage.setItem("email", email);
    return setEmail(e.target.value);
  };

  const handleChangeContact = (e) => {
    localStorage.setItem("contact", contact);
    return setContact(e.target.value);
  };

  const handleChangeActivity = (e) => {
    localStorage.setItem("activity", activity);
    return setActivity(e.target.value);
  };

  const handleChangeNumber = (e) => {
    localStorage.setItem("number", number);
    return setNumber(e.target.value);
  };

  const handleChangeWhat = (e) => {
    localStorage.setItem("what", what);
    return setWhat(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const handleClickFirstButton = () => {
    if (name && website && email && contact) {
      setContador('2');
      localStorage.setItem("contador", "2");
    }
  };
  const handleClickBackButton = () => {
    setContador('');
    localStorage.setItem("contador", "");
  };

  return (
    <>
      <div className="container-fluid form-content">
      <form className="forms1" onSubmit={handleSubmit}>
      {contador === "" && (
            <div className="content_form1">
              <div className="row mb-3">
                <div className="">
                  <input
                    type="text"
                    className="form-control form-control-lg input_form1"
                    placeholder="Name"
                    value={name}
                    onChange={handleChangeName}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="">
                  <input
                    type="text"
                    className="form-control form-control-lg input_form1"
                    placeholder="Website"
                    value={website}
                    onChange={handleChangeWebsite}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="">
                  <input
                    type="email"
                    className="form-control form-control-lg input_form1"
                    placeholder="Email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="">
                  <input
                    type="tel"
                    className="form-control form-control-lg input_form1"
                    placeholder="Contact"
                    value={contact}
                    onChange={handleChangeContact}
                  />
                </div>
              </div>

              <div className="botao_duplo">
                <button
                  type="submit"
                  className="btn botao3"
                  onClick={handleClickFirstButton}
                >
                  Next
                </button>
              </div>
            </div>
      )}
      {contador === "2" && (
            <div className="content_form1">
              <div className="row mb-3">
                <div className="">
                  <input
                    type="text"
                    className="form-control form-control-lg input_form1"
                    placeholder="Activity"
                    value={activity}
                    onChange={handleChangeActivity}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="">
                  <input
                    type="number"
                    className="form-control form-control-lg input_form1"
                    placeholder="Number of Workers"
                    value={number}
                    onChange={handleChangeNumber}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="">
                  <input
                    type="text"
                    className="form-control form-control-lg input_form1"
                    placeholder="What do you want in your project?"
                    value={what}
                    onChange={handleChangeWhat}
                  />
                </div>
              </div>

              <div className="botao_duplo2">
                <button
                  type="submit"
                  className="btn botao4"
                  onClick={handleClickBackButton}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn botao4"
                >
                  Next
                </button>
              </div>
            </div>
      )}
        </form>
      </div>
    </>
  );
}

export default Contact;
