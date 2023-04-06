import React, { useState } from 'react'
import axios from 'axios'
import Dashboard from './Dashboard';
import App from './App';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/login", { username, password });
      setUser(res.data);
      setAccessToken(res.headers['auth-token-access']);
      setRefreshToken(res.headers['auth-token-refresh']);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {
      user?.username ? (
        user?.role === "admin" ? (
          <>
          <h1>Welcome Admin: {user.username}!</h1>
          <Dashboard accessToken={accessToken} setAccessToken={setAccessToken} refreshToken={refreshToken} />
          </>
        ) : (
          <>
          {/* <h1>Welcome User: {user.username}</h1> */}
          <App></App>
          </>
        )
      ) : (
        <form onSubmit={handleSubmit}>
          <span> Login </span>
          <br />
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  )
}

export default Login