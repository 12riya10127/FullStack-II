import React from "react";
import { Link } from "react-router";

function NavBar() {
  return (
    <>
      <style>
        {`
          .navbar {
            width: 100%;
            height: 70px;
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 7%;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          /* Logo */
          .logo {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .logo-icon {
            width: 42px;
            height: 42px;
            background: linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed
            );
            color: white;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
          }

          .logo h2 {
            margin: 0;
            font-size: 19px;
            color: #1f2937;
            font-weight: 700;
          }

          .logo span {
            color: #6366f1;
          }

          /* Navigation */
          .nav-links {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .nav-links a {
            text-decoration: none;
            color: #4b5563;
            font-size: 15px;
            font-weight: 600;
            padding: 10px 16px;
            border-radius: 8px;
            transition: all 0.3s ease;
          }

          .nav-links a:hover {
            color: #4f46e5;
            background: #eef2ff;
          }

          /* Login Button */
          .login-btn {
            background: #4f46e5 !important;
            color: white !important;
            padding: 10px 20px !important;
          }

          .login-btn:hover {
            background: #4338ca !important;
            color: white !important;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(79, 70, 229, 0.3);
          }

          /* Mobile */
          @media (max-width: 700px) {
            .navbar {
              height: auto;
              padding: 15px 5%;
              flex-direction: column;
              gap: 15px;
            }

            .nav-links {
              width: 100%;
              justify-content: center;
              flex-wrap: wrap;
            }

            .nav-links a {
              padding: 8px 12px;
              font-size: 14px;
            }
          }

          @media (max-width: 450px) {
            .logo h2 {
              font-size: 16px;
            }

            .logo-icon {
              width: 36px;
              height: 36px;
              font-size: 18px;
            }

            .nav-links {
              gap: 3px;
            }

            .nav-links a {
              padding: 7px 9px;
              font-size: 13px;
            }
          }
        `}
      </style>

      <nav className="navbar">

        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">
            🎓
          </div>

          <h2>
            Student<span>Hub</span>
          </h2>
        </div>


        {/* Navigation Links */}
        <div className="nav-links">

          <Link to="/">
            🏠 Home
          </Link>

          <Link to="/dashboard">
            📊 Dashboard
          </Link>

          <Link to="/login" className="login-btn">
            Login
          </Link>

        </div>

      </nav>
    </>
  );
}

export default NavBar;