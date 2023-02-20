import React, { useState } from "react";
import { login } from "./api";
import "../styles/App.css";
const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      login({ email, password }).then((res) => console.log(res)).catch((err)=>{console.log(err);setError(err.error)});
      //console.log(result)
    } catch (err) {
      console.log(err,"as");
      setError(err.error);
    }
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeEmail}
            id="input-email"
          />
          <small id="user-error">{error && error.email ? error.email : null}</small>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={changePassword}  id="input-password"/>
          <small id="password-error">{error && error.password ? error.password : null}</small>
        </div>
        <div>
          <button onClick={submit} id="submit-form-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
