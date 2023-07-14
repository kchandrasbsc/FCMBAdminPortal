import React from 'react';
import {useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call your login API endpoint here to validate the credentials
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // if (response.ok) {
        if (true) {
        // Login successful, redirect to the dashboard
        window.location.href = '/Dashboard/cards';
      } else {
        // Login failed, display error message
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div  className="loginBG">
    <div className="d-flex loginCenter">
        <div className="container">
            <img src={require("../assets/images/logo1.png")} alt="FCMB" className="logoBorder"/>
            <div className="loginDialogue">
                <h1 className="signIn">Sign in</h1>
                <form className="mb-0" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor ="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={handleUsernameChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor ="exampleInputPassword1" className="form-label">Password</label>
                        <div className="input-group">
                            <input className="form-control" id="exampleInputPassword1" type="password" value={password} onChange={handlePasswordChange}/>
                            <div className="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="form-check mb-3">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                      <label className="form-check-label" htmlFor ="exampleCheck1">Remember me</label>
                      <a href="#" className="forgotPassword b5">Forgot password ?</a>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-lg">Sign in</button>
                    </div>
                  </form>
            </div>
        </div>
    </div>
</div>
  );
};

export default LoginPage;
