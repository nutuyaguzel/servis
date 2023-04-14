import { Col, Row } from "react-bootstrap";
import logo from "../../../component/assets/logo.svg";
import { useRef } from "react";
import useApi from "../../../hooks/useApi";

export default function LoginPage() {
  const api = useApi();

  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();

    alert("form gönderiliyor");

    const formData = new FormData(event.target);

    const formData_Json = Object.fromEntries(data.entries());

    console.log(">>olusturulan json datası", formData_Json);

    api
      .post("https://api.adoptez1artisan.com/auth/login", formData_Json)
      .then((response) => {
        response.data;
      })
      .catch((err) => {
        alert("err.response.data.errorMessage");
      });
  };

  return (
    <>
      <Row className="d-flex justify-content-center text-center">
        <Col lg="6">
          <form onSubmit={onFormSubmit}>
            <img className="mb-4" src={logo} alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Lütfen Giriş Yapınız</h1>

            <div className="form-floating">
              <input
                ref={inputEmailRef}
                type="email"
                className="form-control"
                name="email"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                ref={inputPasswordRef}
                type="password"
                className="form-control"
                name="password"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </Col>
      </Row>
    </>
  );
}
