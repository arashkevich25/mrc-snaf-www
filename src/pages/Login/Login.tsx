import React, { useContext } from 'react';
import { UserState } from '../../App';
import { Navigate } from "react-router-dom";
import "./styles.css";

interface LoginProps {}

export function Login(props: LoginProps) {
  const {currentUser, login} = useContext(UserState);

  function onSubmitHandle(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login({
      name: "demo",
      email: "demo@demo.com"
    });
  }

  if (currentUser.email) {
    return <Navigate to="/user" replace={true} />;
  }

  return (
  <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={onSubmitHandle}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <span className="error" id="emailError"></span>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <span className="error" id="passwordError"></span>
      </div>

      <div className="form-group">
        <input type="submit" value="Login" />
      </div>
    </form>
  </div>
  )
};
