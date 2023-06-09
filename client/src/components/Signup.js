// Signup.js
import React, { useState, useContext } from "react";
import UserContext from '../context/user';
import './Signup.css';


const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUser } = useContext(UserContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    fetch('https://eventmanagement-o5zg.onrender.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Signup failed');
      }
    })
    .then(data => {
      console.log('Signup successful', data);
      setUser(data); 
    })
    .catch(error => {
      console.error(error);
    });
  };  

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
