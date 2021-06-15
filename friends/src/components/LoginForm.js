import React, { useState } from "react";
import axios from "axios";

const LoginForm = (props) => {
  const [fields, setFields] = useState({ username: "", password: "" });

  const handleChange = (ev) => {
    setFields((oldState) => {
      return { ...oldState, [ev.target.name]: ev.target.value };
    });
  };

  const loginHandler = () => {
    axios
      .post("http://localhost:5000/api/login", fields)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/friends");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={fields.username}
          />
        </label>
        <label>
          Password:
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={fields.password}
          />
        </label>
        <button onClick={loginHandler}>LogIn</button>
      </form>
    </div>
  );
};
export default LoginForm