import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { useState } from "react";
import Signup from "./Components/Signup";
function App() {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>React Router Demo</h1>
      <div className="token">{token}</div>
      <Link to="/profile" className="link">
        Profile
      </Link>{" "}
      ||
      <Link to="/login">Login</Link> ||
      <Link to="/signup">Sign Up</Link>
      <Routes>

        <Route path="/login" element={<Login setToken={setToken} />} />

        {/* uses a function as a prop */}
        <Route
          path="/signup"
          element={
            <Signup
              setToken={setToken}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        {/* props component uses a string as prop */}
        <Route path="/profile/:posts" element={<Profile myToken={token} />} />
      </Routes>
    </div>
  );
}

export default App;
