import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Attendance(props) {
  const navigate = useNavigate()

  const classs = [9, 10, 11, 12];
  const handleAddrTypeChangeOfClasss = (e) => {
    const selectedClasss = classs[e.target.value];
    props.setClasss(selectedClasss);
  }

  const group = ["science", "commerce", "arts"];
  const handleAddrTypeChangeOfGroup = (e) => {
    const selectedGroup = group[e.target.value];
    props.setGroup(selectedGroup);
  }

  async function submit(e) {
    e.preventDefault();

    if (props.classs !== '' && props.group !== '') {
      navigate("/take-attendance");
    }
    else {
      alert("Empty field can't be submitted!");
    }
  }

  useEffect(()=>{
    props.setClasss(9);
    props.setGroup("science");
  },[])

  return (
    <div className='container' style={{ marginTop: '2%', borderRadius: "5px" }}>
      <div className="row mb-3">
        <div className="col" style={{ paddingLeft: "21%", fontSize: "45px" }}>
          <b>Attendance</b>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <form action='' method='' className='teacher-form'>
            <div className="mb-3">
              <label htmlFor="class" className="form-label">Class</label>
              < select onChange={e => handleAddrTypeChangeOfClasss(e)} className="form-select" id="class" aria-label="Default select example">
                {
                  classs.map((e, index) => <option key={index} value={index}>{e}{console.log(e)}</option>)
                }
              </select >
            </div>
            <div className="mb-3">
              <label htmlFor="group" className="form-label">Group</label>
              < select onChange={e => handleAddrTypeChangeOfGroup(e)} className="form-select" id="group" aria-label="Default select example">
                {
                  group.map((e, index) => <option key={index} value={index}>{e}{console.log(e)}</option>)
                }
              </select >
            </div>
            <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Attendance
