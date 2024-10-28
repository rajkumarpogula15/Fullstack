import React from 'react';

const Login = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login Page</title>
      <style dangerouslySetInnerHTML={{__html: `
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f0f2f5;
        }
        .login-container {
          width: 300px;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
        }
        .login-container h2 {
          margin-bottom: 20px;
        }
        .login-container input[type="text"],
        .login-container input[type="password"] {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .login-container button {
          width: 100%;
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 10px;
        }
        .login-container button:hover {
          background-color: #45a049;
        }
        .social-login {
          margin-top: 20px;
        }
        .social-login button {
          width: 100%;
          padding: 10px;
          margin: 5px 0;
          font-size: 14px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          color: white;
        }
        .google-btn {
          background-color: #db4437;
        }
        .facebook-btn {
          background-color: #3b5998;
        }
      `}} />

      <div className="login-container">
        <h2>Login</h2>
        <form action="login.php" method="post">
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="social-login">
          <button className="google-btn">Continue with Google</button>
          <button className="facebook-btn">Continue with Facebook</button>
        </div>
      </div>
    </>
  );
};

export default Login;
