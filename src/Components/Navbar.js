import React from 'react'
import { Outlet, Link } from "react-router-dom";


function Navbar(props) {
  return (
    <>
      <div>
        <div className='p-4' style={{ textAlign: "center", fontSize: "60px", fontFamily: "Dancing Script", backgroundColor: "#99ceff" }}>
          <b><i>Welcome To The Future Way School & Collage</i></b>
        </div>
        <nav className="navbar navbar-expand-lg bg-success navbar-success">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                {/*for students */}
                <li className="nav-item" style={{ display: `${props.type === "student" ? '' : "none"}` }}>
                  <Link className="nav-link" aria-current="page" to="/class-routine">Class Routine</Link>
                </li>
                <li className="nav-item" style={{ display: `${props.type === "student" ? '' : "none"}` }}>
                  <Link className="nav-link" to="/result">Result</Link>
                </li>
                <li className="nav-item" style={{ display: `${props.type === "student" ? '' : "none"}` }}>
                  <Link className="nav-link" to="/total-attendance">Total Attendance</Link>
                </li>
                <li className="nav-item" style={{ display: `${props.type === "student" ? '' : "none"}` }}>
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item" style={{ display: `${props.type === "student" ? '' : "none"}` }}>
                  <Link className="nav-link" to="/online-payment">Payment</Link>
                </li>

                {/*for parents */}
                <li className="nav-item" style={{ display: `${props.type === "parent" ? '' : "none"}` }}>
                  <Link className="nav-link" aria-current="page" to="/class-routine">Class Routine</Link>
                </li>
                <li className="nav-item" style={{ display: `${props.type === "parent" ? '' : "none"}` }}>
                  <Link className="nav-link" to="/result">Result</Link>
                </li>
                <li className="nav-item" style={{ display: `${props.type === "parent" ? '' : "none"}` }}>
                  <Link className="nav-link" to="/total-attendance">Total Attendance</Link>
                </li>
                <li className="nav-item" style={{ display: `${props.type === "parent" ? '' : "none"}` }}>
                  <Link className="nav-link" to="/feedback">Feedbacks</Link>
                </li>
                <li className="nav-item" style={{ display: `${props.type === "parent" ? '' : "none"}` }}>
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item" style={{ display: `${props.type === "parent" ? '' : "none"}` }}>
                  <Link className="nav-link" to="/online-payment">Payment</Link>
                </li>

                {/*for teachers */}
                <li className="nav-item" style={{ display: `${props.type === "teacher" ? '' : "none"}` }}>
                  <Link className="nav-link" aria-current="page" to="/find-student">Students Info</Link>
                </li>
                <li className="nav-item" style={{ display: `${props.type === "teacher" ? '' : "none"}` }}>
                  <Link className="nav-link" to="/attendance">Attendance</Link>
                </li>
                <li className="nav-item" style={{ display: `${props.type === "teacher" ? '' : "none"}` }}>
                  <Link className="nav-link" to="/publish-result">Publish Results</Link>
                </li>
                <li className="nav-item" style={{ display: `${props.type === "teacher" ? '' : "none"}` }}>
                  <Link className="nav-link" to="/subject">Subjects</Link>
                </li>

              </ul>
              <button className="btn btn-success d-flex" onClick={props.logout}>Logout</button>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  )
}

export default Navbar
