import { useState } from "react";

function Signup(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function signUpUser() {
    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2301-FTB-CT-WEB-PT/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username,
              password,
            },
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      props.setToken(result.data.token);
      props.setIsLoggedIn(true);
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Sign Up Page</h1>
      <div>
        <input placeholder="username" value={username} onChange={handleUsername} />
        <input
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <button onClick={signUpUser}>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
