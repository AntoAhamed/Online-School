import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Find_Student(props) {
  const navigate = useNavigate()

  async function submit(e) {
    e.preventDefault();

    if (props.classs !== '' && props.group !== '' && props.roll !== '') {
      const { classs, group, roll } = props;

      try {
        await axios.post('http://localhost:8000/student_profile', { classs, group, roll })
          .then(res => {
            if (res.data === "failed") {
              alert("Student dosen't exists!");
            }
            else {
              const data = res.data;
              console.log("Data has been received successfully");
              props.setProfile(data.data);
              console.log(data.data);
              props.setClasss('');
              props.setGroup('');
              props.setRoll('');
              alert("Student found");
              navigate("/student-profile");
            }
          }).catch(e => {
            console.log(e);
          });
      }
      catch (e) {
        console.log(e);
      }
    }
    else {
      alert("Empty field can't be submitted!");
    }
  }

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
              <input type="number" className="form-control" value={props.classs} onChange={(e) => { props.setClasss(e.target.value) }} id="class" min={9} max={12} placeholder="9/10/11/12" />
            </div>
            <div className="mb-3">
              <label htmlFor="group" className="form-label">Group</label>
              <input type="text" className="form-control" value={props.group} onChange={(e) => { props.setGroup(e.target.value) }} id="group" placeholder="science/commerce/arts" />
            </div>
            <div className="mb-3">
              <label htmlFor="roll" className="form-label">Roll</label>
              <input type="text" className="form-control" value={props.roll} onChange={(e) => { props.setRoll(e.target.value) }} id="roll" placeholder="any" />
            </div>
            <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Find_Student
