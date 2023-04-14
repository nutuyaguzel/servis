import React, { useContext } from "react";
import Logo from "../assets/logo.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../context/theme-context-provider";

const Footer = () => {
  const ThemeContextData=useContext(ThemeContext)
  const  categoryState  = useSelector((state) => state.categoryState);
  

 
  return (
    <>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-2" src={Logo} alt="" width="24" height="19" />

            <small className="d-block mb-3 text-muted">&copy; 2017–2022</small>
            <br/>
        <Button onClick={()=>ThemeContextData.setTheme("light")}>light</Button>
        <Button onClick={()=>ThemeContextData.setTheme("Dark")} >Dark</Button>
        <Button  onClick={()=>ThemeContextData.setTheme("Toggle")}>Toggle</Button>
        <br/>
        tema:{ThemeContextData.theme}

          </div>
          <div className="col-6 col-md">
            <h5>Kategoriler</h5>
            <ul className="list-unstyled text-small">
              {categoryState.categories.length === 0 ? (
                <li>Loading...</li>
              ) : (
                categoryState.categories.map((item, index) => {
                  return (
                    <li className="mb-1" key={index}>
                      <Link to={"category/" + item.slug}
                        className="link-secondary text-decoration-none"
                      
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Resource name
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Another resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Team
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Locations
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Privacy
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
