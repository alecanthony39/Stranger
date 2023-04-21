import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginMyUser } from "../API.js";
function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function loginUser() {
    try {
      const result = loginMyUser(username, password);
      setToken(result.data.token);
      navigate("/profile");
    } catch (err) {
      console.error(err);
      setErrorMessage("try again");
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      {errorMessage}
      <div>
        <input
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
        <input
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <button onClick={loginUser}>Login</button>
      </div>
    </div>
  );
}

export default Login;
