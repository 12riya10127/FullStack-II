import React from "react";

function Home() {
  return (
    <>
      <style>
        {`
          .home {
            min-height: 100vh;
            background: #f5f7fb;
            font-family: Arial, sans-serif;
          }

          /* Hero Section */
          .hero {
            min-height: 420px;
            padding: 70px 8%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed,
              #9333ea
            );
            color: white;
          }

          .hero-content {
            max-width: 600px;
          }

          .hero-content h1 {
            font-size: 48px;
            margin: 15px 0;
            line-height: 1.2;
          }

          .hero-content h1 span {
            color: #facc15;
          }

          .hero-content p {
            font-size: 18px;
            line-height: 1.7;
            color: #e0e7ff;
          }

          .welcome {
            font-size: 18px;
            font-weight: bold;
          }

          .hero-buttons {
            margin-top: 30px;
            display: flex;
            gap: 15px;
          }

          .hero-buttons button {
            padding: 13px 24px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
          }

          .primary-btn {
            background: white;
            color: #4f46e5;
            border: none;
          }

          .primary-btn:hover {
            transform: translateY(-3px);
          }

          .secondary-btn {
            background: transparent;
            color: white;
            border: 1px solid white;
          }

          .secondary-btn:hover {
            background: white;
            color: #4f46e5;
          }

          /* Hero Image */
          .hero-image {
            width: 230px;
            height: 230px;
            border-radius: 30px;
            background: rgba(255, 255, 255, 0.15);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 100px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }

          /* Stats */
          .stats {
            width: 84%;
            margin: -45px auto 0;
            position: relative;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .stat-card {
            background: white;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          }

          .stat-card h4 {
            color: #6b7280;
            margin: 0;
          }

          .stat-card h2 {
            font-size: 30px;
            margin: 10px 0;
          }

          .stat-card p {
            color: #16a34a;
            font-size: 13px;
          }

          .purple {
            color: #6366f1;
          }

          .green {
            color: #16a34a;
          }

          .pink {
            color: #db2777;
          }

          .orange {
            color: #ea580c;
          }

          /* Main Content */
          .container {
            width: 84%;
            margin: 60px auto;
          }

          .container h2 {
            font-size: 30px;
            margin-bottom: 8px;
          }

          .subtitle {
            color: #6b7280;
            margin-bottom: 30px;
          }

          /* Cards */
          .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }

          .card {
            background: white;
            padding: 30px;
            border-radius: 18px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
            transition: 0.3s;
          }

          .card:hover {
            transform: translateY(-7px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
          }

          .card-icon {
            width: 60px;
            height: 60px;
            border-radius: 14px;
            background: #eef2ff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
          }

          .card h3 {
            margin-top: 20px;
            font-size: 20px;
          }

          .card p {
            color: #6b7280;
            line-height: 1.6;
          }

          .card a {
            display: inline-block;
            margin-top: 10px;
            color: #4f46e5;
            font-weight: bold;
            cursor: pointer;
          }

          /* Responsive */
          @media (max-width: 900px) {
            .hero {
              flex-direction: column;
              text-align: center;
            }

            .hero-buttons {
              justify-content: center;
            }

            .stats {
              grid-template-columns: repeat(2, 1fr);
            }

            .cards {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 600px) {
            .hero-content h1 {
              font-size: 36px;
            }

            .stats {
              grid-template-columns: 1fr;
              width: 90%;
            }

            .container {
              width: 90%;
            }

            .hero-buttons {
              flex-direction: column;
            }

            .hero-image {
              width: 160px;
              height: 160px;
              font-size: 70px;
            }
          }
        `}
      </style>

      <div className="home">

        {/* Hero Banner */}
        <section className="hero">

          <div className="hero-content">

            <div className="welcome">
              👋 Welcome to StudentHub
            </div>

            <h1>
              Manage Students
              <span> Smarter & Faster</span>
            </h1>

            <p>
              Manage student profiles, courses, admissions and
              academic information easily from one place.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                View Students
              </button>

              <button className="secondary-btn">
                Add Student
              </button>
            </div>

          </div>

          <div className="hero-image">
            🎓
          </div>

        </section>


        {/* Statistics */}
        <section className="stats">

          <div className="stat-card">
            <h4>Total Students</h4>
            <h2 className="purple">1,250</h2>
            <p>↑ 12% this month</p>
          </div>

          <div className="stat-card">
            <h4>Active Students</h4>
            <h2 className="green">1,120</h2>
            <p>↑ 8% this month</p>
          </div>

          <div className="stat-card">
            <h4>Total Courses</h4>
            <h2 className="pink">24</h2>
            <p>Available courses</p>
          </div>

          <div className="stat-card">
            <h4>New Admissions</h4>
            <h2 className="orange">86</h2>
            <p>↑ 18% this month</p>
          </div>

        </section>


        {/* Quick Actions */}
        <section className="container">

          <h2>Quick Actions</h2>

          <p className="subtitle">
            Quickly access the most important features.
          </p>

          <div className="cards">

            <div className="card">
              <div className="card-icon">
                👨‍🎓
              </div>

              <h3>Student List</h3>

              <p>
                View, search and manage all registered students
                from one place.
              </p>

              <a>View Students →</a>
            </div>


            <div className="card">
              <div className="card-icon">
                ➕
              </div>

              <h3>Add Student</h3>

              <p>
                Create a new student profile and add academic
                information.
              </p>

              <a>Add Student →</a>
            </div>


            <div className="card">
              <div className="card-icon">
                📊
              </div>

              <h3>Reports</h3>

              <p>
                Check student performance and academic
                statistics.
              </p>

              <a>View Reports →</a>
            </div>

          </div>

        </section>

      </div>
    </>
  );
}

export default Home;