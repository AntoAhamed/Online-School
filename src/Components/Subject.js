import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Subjects(props) {
  const [routine, setRoutine] = useState([]);
  const name = props.user?.name;

  const getSubjects = () => {
    axios.post('http://localhost:8000/get_subjects', { name })
      .then(res => {
        const data = res.data;
        console.log("Data has been received successfully");
        setRoutine(data.data);
        console.log(routine);
      }).catch(e => {
        console.log(e);
      });
  }

  useEffect(() => {
    getSubjects();
  }, [])

  return (
    <div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "35px" }}><b>Assigned Subjects To {name}</b></p>
      </div>
      <div className='p-2 m-2'>
        <table className="table p-1 m-1">
          <thead className="table-dark">
            <tr>
              <th>Day</th>
              <th>Class</th>
              <th>Group</th>
              <th>Subject</th>
              <th>Time</th>
              <th>Class Link</th>
              <th>Classroom Code</th>
            </tr>
          </thead>
          <tbody>
            {routine.length === 0 ? "No data to show" : routine.map((e) => {
              return (
                <tr key={e._id}>
                  <td>{e.day}</td>
                  <td>{e.class}</td>
                  <td>{e.group}</td>
                  <td>{e.subject}</td>
                  <td>{e.time}</td>
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

export default Subjects
