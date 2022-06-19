import React from "react";
import "./Header.css";
import { Button } from "antd";

function Header() {
  return (
    <div className="navbar navbar-expand-sm navbar-light">
      <div className="container d-flex justify-content-between align-items-center">
        <h3 id="logo">
          ATools<span style={{ color: "orange" }}>.</span>
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none", boxShadow: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item m-1">
              <Button
                type="primary"
                style={{
                  borderRadius: "3px",
                  borderColor: "#023047",
                  background: "#023047",
                }}
              >
                Start Free Trial
              </Button>
            </li>
            <li className="nav-item m-1">
              <Button
                type="primary"
                style={{
                  textDecoration: "bold",
                  borderRadius: "3px",
                  borderColor: "orange",
                  background: "orange",
                }}
              >
                Login
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
