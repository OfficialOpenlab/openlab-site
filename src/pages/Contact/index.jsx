import { useEffect, useState } from "react";
import api from '../../services/api';
import "./styles.css";

function Contact() {
  const [contador, setContador] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [activity, setActivity] = useState("");
  const [number, setNumber] = useState(0);
  const [role, setRole] = useState("");
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    if(!localStorage.getItem("contador")){
      localStorage.setItem("contador", "")
    }
    setContador(localStorage.getItem("contador"));
    setName(localStorage.getItem("name"));
    setWebsite(localStorage.getItem("website"));
    setEmail(localStorage.getItem("email"));
    setContact(localStorage.getItem("contact"));
    setActivity(localStorage.getItem("activity"));
    setNumber(parseInt(localStorage.getItem("number")));
    setRole(localStorage.getItem("role"));
  }, [contador]);

  const handleChangeName = (e) => {
    return setName(e.target.value);
  };

  const handleChangeWebsite = (e) => {
    return setWebsite(e.target.value);
  };

  const handleChangeEmail = (e) => {
    return setEmail(e.target.value);
  };

  const handleChangeContact = (e) => {
    return setContact(e.target.value);
  };

  const handleChangeActivity = (e) => {
    return setActivity(e.target.value);
  };

  const handleChangeNumber = (e) => {
    return setNumber(e.target.value);
  };

  const handleChangeRole = (e) => {
    return setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity && number && role) {
      localStorage.setItem("name", "");
      localStorage.setItem("website", "");
      localStorage.setItem("email", "");
      localStorage.setItem("contact", "");
      localStorage.setItem("activity", "");
      localStorage.setItem("number", "");
      localStorage.setItem("role", "");
      api
        .post('/api/insertUser', { name, website, email, contact, activity, number, role });
      setContador('');
      localStorage.setItem("contador", "");
    } else {
      setMissing(true);
    }
  };
  const handleClickFirstButton = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("website", website);
    localStorage.setItem("email", email);
    localStorage.setItem("contact", contact);
    if (name && website && email && contact) {
      setContador('2');
      localStorage.setItem("contador", "2");
    } else {
      setMissing(true);
    }
  };
  const handleClickBackButton = () => {
    setContador('');
    localStorage.setItem("contador", "");
  };
  const handleMissing = () => {
    return setMissing(false);
  };

  return (
    <>
      <div className="container-fluid form-content">
        <form className="forms1" onSubmit={handleSubmit}>
          {missing && (
            <>
              <div class="alert alert-primary alert-dismissible fade show" style={{ width: '50%' }}>
                <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={handleMissing}></button>
                <span>Dados inválidos</span>
              </div>
            </>
          )}
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
                    value={role}
                    onChange={handleChangeRole}
                  />
                </div>
              </div>

              <div className="botao_duplo2">
                <a
                  href={(e) => e.preventDefault()}
                  type="submit"
                  className="btn botao4"
                  onClick={handleClickBackButton}
                >
                  Back
                </a>
                <button
                  type="submit"
                  className="btn botao4"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </form >
      </div >
    </>
  );
}

export default Contact;
