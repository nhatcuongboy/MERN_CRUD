import React, { useState, memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { useHistory, useParams, Link } from 'react-router-dom';
import * as AuthAction from "../../action";
import {
  Container,
  Button,
  FormGroup,
  Spinner,
  Label,
  Form,
  Input,
} from "reactstrap";
import { useForm } from "react-hook-form";

const Login = ({login, isLogging}) => {
  
  const history = useHistory();

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    // console.log(values);
    const data = {
      email: values.email,
      password: values.password,
    }
  
    login(data, () => {
        history.push('/equipment')
      })
  };
 
  return (
    <div>
      <Container>
        <div style={{ padding: 20, textAlign: "center" }}>
          <h3>Login</h3>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for="emailId">Email *</Label>
            <Input
              name="email"
              id="emailId"
              placeholder="Enter email"
              innerRef={register({
                required: "Required",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                  }
              })}
              style={{ border: errors.email ? '1px solid red' : ''}}
            />
            <p style={{color: 'red'}}>{errors.email && errors.email.message}</p>
          </FormGroup>

          <FormGroup>
            <Label for="passwordId">Password *</Label>
            <Input
              name="password"
              type="password"
              id="passwordId"
              placeholder="Enter password"
              innerRef={register({
                required: "Required",
              })}
              style={{ border: errors.password ? '1px solid red' : ''}}
            />
            <p style={{color: 'red'}}>{errors.password && errors.password.message}</p>
          </FormGroup>
          
          <FormGroup>
            <Button type="submit" color='primary'>
              Login
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};

Login.propTypes = {};

const mapStateToProps = ({ authReducer }) => {
  return {
    isLogging: authReducer.isLogging,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    login: (data, actionSuccess) =>
      dispatch(AuthAction.loginRequest(data, actionSuccess)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Login));
