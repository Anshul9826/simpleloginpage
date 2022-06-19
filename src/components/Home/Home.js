import React, { useState } from "react";
import "./Home.css";
import { Button } from "antd";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    alert("authtoken : "+json.authToken)
  };

  return (
    <div className="home d-flex justify-content-between">
      <div className="d-flex flex-column align-items-center m-auto">
        <div
          className="loginForm d-flex flex-column align-items-center m-auto"
          style={{ width: "400px" }}
        >
          <h1 className="mb-0">Welcome Back</h1>
          <p>Sub-title text goes here</p>
          <form className="form-control" style={{ border: "none" }}>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email Address *"
                className="form-control p-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Password *"
                className="form-control p-2"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <Button
              className="form-control"
              type="primary"
              onClick={handleSubmit}
              style={{
                borderRadius: "3px",
                borderColor: "#023047",
                background: "#023047",
                height: "45px",
              }}
            >
              Login
            </Button>
            <div className="my-2 form-check d-flex">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label ms-1" htmlFor="exampleCheck1">
                Remember Password
              </label>
              <p className="ms-auto">Forgot Password?</p>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-home">
        <img src="bg.png" alt="background" />
      </div>
    </div>
  );
}

export default Home;
