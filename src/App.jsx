import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [formValidation, setFormValidation] = useState({
    email: undefined,
    password: undefined,
    passwordCheck: undefined,
  });

  const handleSumbit = (event) => {
    event.preventDefault();

    console.log("Send data to register");
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;

    setFormValidation({
      ...formValidation,
      email: value.length === 0 ? "email is required" : "",
    });

    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;

    setFormValidation({
      ...formValidation,
      password: value.length < 5 ? "password is too short" : "",
    });

    setPassword(value);
  };

  const handlePasswordCheckChange = (event) => {
    const value = event.target.value;

    setFormValidation({
      ...formValidation,
      passwordCheck: value !== password ? "passwords do not match" : "",
    });

    setPasswordCheck(value);
  };

  const isFormValid = Object.keys(formValidation).every(
    (key) => formValidation[key] === ""
  );

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div>
          <label>Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            placeholder="email"
            type="email"
          />
          {formValidation.email && (
            <span style={{ color: "red" }}>{formValidation.email}</span>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            value={password}
            placeholder="password"
            type="password"
            onChange={handlePasswordChange}
          />
          {formValidation.password && (
            <span style={{ color: "red" }}>{formValidation.password}</span>
          )}
        </div>
        <div>
          <label>Password Check</label>
          <input
            value={passwordCheck}
            placeholder="password check"
            type="password"
            onChange={handlePasswordCheckChange}
          />
          {formValidation.passwordCheck && (
            <span style={{ color: "red" }}>{formValidation.passwordCheck}</span>
          )}
        </div>
        <button disabled={!isFormValid}>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
