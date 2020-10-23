import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";
// Header.propTypes = {}

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://youtube.com/easyfrontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Final App
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/equipment"
              activeClassName="header__link--active"
            >
              Equipment
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
