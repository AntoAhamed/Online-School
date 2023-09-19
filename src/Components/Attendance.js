import React from 'react'
import { useNavigate } from 'react-router-dom';

function Attendance(props) {
  const navigate = useNavigate()

  async function submit(e) {
    e.preventDefault();

    if (props.classs !== '' && props.group !== '') {
      navigate("/take-attendance");
    }
    else {
      alert("Empty field can't be submitted!");
    }
  }

  return (
    <div className='container' style={{ marginTop: '2%', border: "1px solid #66a3ff", borderRadius: "5px", backgroundColor: "#66a3ff" }}>
      <div className="row mb-3">
        <div className="col" style={{ textAlign: "center", fontSize: "45px" }}>
          <b>Attendance</b>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <form action='' method='' className='login-form'>
            <div className="mb-3">
              <label htmlFor="class" className="form-label">Class</label>
              <input type="number" className="form-control" value={props.classs} onChange={(e) => { props.setClasss(e.target.value) }} id="class" min={9} max={12} placeholder="9/10/11/12" />
            </div>
            <div className="mb-3">
              <label htmlFor="group" className="form-label">Group</label>
              <input type="text" className="form-control" value={props.group} onChange={(e) => { props.setGroup(e.target.value) }} id="group" placeholder="science/commerce/arts" />
            </div>
            <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Attendance
