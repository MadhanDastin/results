"use client";
import React, { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid loginPage">
      <div className="row vh-100">
        <div className="col-md-6 leftSection">
          <div className="welcomeText">
            <h1>Welcome back . . .</h1>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="loginBox">
            <h3>Create your account</h3>
            <p>It's just a few minutes and free!</p>

            <form>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="webmail@mail.com"
                />
              </div>

              <div className="form-group mb-3">
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={togglePassword}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="form-group mb-3">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="ms-2">
                  I agree with <span>terms and conditions</span>.
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Create my account
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Styled-JSX for scoped CSS */}
      <style jsx>{`
        .loginPage {
          background-color: #001f3f;
        }

        .leftSection {
          background-image: url('/assets/wave-pattern.png');
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .welcomeText h1 {
          font-size: 48px;
          font-family: 'Playfair Display', serif;
        }

        .loginBox {
          background-color: #001f3f;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        .loginBox h3 {
          font-family: 'Playfair Display', serif;
          margin-bottom: 10px;
        }

        .loginBox p {
          font-size: 14px;
          color: gray;
          margin-bottom: 20px;
        }

        .form-group input {
          padding: 15px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        .form-group input:focus {
          border-color: #007bff;
        }

        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
        }

        .btn-primary:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }

        .input-group .btn-outline-secondary {
          font-size: 14px;
          border-radius: 0 5px 5px 0;
        }

        input[type='checkbox'] {
          margin-right: 10px;
        }

        span {
          color: #007bff;
        }
      `}</style>
    </div>
  );
}

