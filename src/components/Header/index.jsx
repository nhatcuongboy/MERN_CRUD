import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useDispatch, useSelector, connect } from "react-redux";
import * as AuthAction from "../../features/Auth/action";
import { useHistory } from "react-router-dom";
import "./Header.scss";
// Header.propTypes = {}

const Header = () => {
  const isLogged = useSelector(state => state.authReducer.isLogged)

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(AuthAction.logoutRequest(() => {
      history.push("/login");
    }))
  }

  // dispatch(AuthAction.checkLoginRequest())

  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="/"
              rel="noopener noreferrer"
            >
              MERN CRUD
            </a>
          </Col>

          {isLogged && <span style={{ cursor: 'pointer' }} onClick={logout}>
            Logout
          </span>}

          {/* <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/equipment"
              activeClassName="header__link--active"
            >
              Equipment
            </NavLink>
          </Col> */}
        </Row>
      </Container>
    </header>
  );
};

export default Header;


