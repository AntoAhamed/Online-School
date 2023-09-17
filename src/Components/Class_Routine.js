import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Class_Routine(props) {
  const [routine, setRoutine] = useState([]);
  const classs = props.class;
  const group = props.group;

  const getRoutine = () => {
    axios.post('http://localhost:8000/get_routine', { classs, group })
      .then(res => {
        if (res.data === "failed") {
          alert("Routine not found");
        }
        else {
          const data = res.data;
          console.log("Data has been received successfully");
          setRoutine(data.data);
          console.log(routine);
        }
      }).catch(e => {
        console.log(e);
      });
  }

  useEffect(() => {
    getRoutine();
  }, [])

  return (
    <div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i>Class Routine</i></b></p>
      </div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "20px", fontFamily: "Dancing Script" }}><b><i><pre>Class: {props.user?.class}                                                  Group: {props.user?.group}</pre></i></b></p>
      </div>
      <div className='p-2 m-2'>
        <table className="table p-1 m-1">
          <thead className="table-dark">
            <tr>
            <th>Day</th>
              <th>Subject</th>
              <th>Time</th>
              <th>Teacher</th>
              <th>Class Link</th>
              <th>Classroom Code</th>
            </tr>
          </thead>
          <tbody>
            {routine.map((e) => {
              return (
                <tr key={e._id}>
                  <td>{e.day}</td>
                  <td>{e.subject}</td>
                  <td>{e.time}</td>
                  <td>{e.teacher}</td>
                  <td>{e.meet}</td>
                  <td>{e.classroom}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Class_Routine
