import React from "react";
import "./HeaderApp.css";
import { InputGroup, Form, Navbar, Nav } from "react-bootstrap";

export const HeaderApp = (props) => {
  return (
    <div>
      <header>
        <img src="RMLogo.png" alt="logo" style={{ size: "150px" }} />
      </header>

      <Navbar className="navbar" bg="light" variant="light">
        <Navbar.Brand className="navTitle" href="#home">
          {" "}
          Rick and Morty Database{" "}
        </Navbar.Brand>

        <div className="form">
          <InputGroup className="input2">
            <Form.Control
              placeholder="Personagens"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={props.pesquisa}
              onChange={(e) => {
                props.setPesquisa(e.target.value);
              }}
            />
          </InputGroup>
        </div>

        <Nav className="nav">
          <div className="menu">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://rickandmortyapi.com/" target={"_blank"}>
              API
            </Nav.Link>
            <Nav.Link
              href="https://www.jcavitreinamentos.com.br/"
              target={"_blank"}
            >
              {" "}
              JCAVI
            </Nav.Link>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};
