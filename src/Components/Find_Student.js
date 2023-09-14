import React from 'react'

function Find_Student() {
  return (
    <div className='container' style={{ marginTop: '2%', border: "1px solid #66a3ff", borderRadius: "5px", backgroundColor: "#66a3ff" }}>
      <div className="row mb-3">
        <div className="col" style={{ textAlign: "center", fontSize: "45px" }}>
          <b>Student Info</b>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <form action='' method='' className='login-form'>
            <div className="mb-3">
              <label htmlFor="class" className="form-label">Class</label>
              <select className="form-select" id='class'>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="group" className="form-label">Group</label>
              <select className="form-select" id='group'>
                <option>Science</option>
                <option>Business</option>
                <option>Arts</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="roll" className="form-label">Roll</label>
              <select className="form-select" id='roll'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Find_Student
