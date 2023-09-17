import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Result(props) {
  const [result, setResult] = useState([]);
  const classs = props.user?.class;
  const group = props.user?.group;
  const roll = props.user?.roll;

  const getResults = () => {
    axios.post('http://localhost:8000/get_result', { classs, group, roll })
      .then(res => {
        const data = res.data;
        console.log("Data has been received successfully");
        setResult(data.data);
        console.log(result);
      }).catch(e => {
        console.log(e);
      });
  }

  useEffect(() => {
    getResults();
  }, [])

  return (
    <div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i>Result</i></b></p>
      </div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "20px", fontFamily: "Dancing Script" }}><b><i><pre>Name: {props.user?.name}                    Roll: {roll}                   Class: {classs}                    Group: {group}</pre></i></b></p>
      </div>
      <div className='p-2 m-2'>
        <table class="table p-1 m-1">
          <thead class="table-dark">
            <tr style={{ display: `${classs === 9 || classs === 11 ? "" : "none"}` }}>
              <th>Subject</th>
              <th>CT1</th>
              <th>Half Yearly</th>
              <th>CT2</th>
              <th>Final</th>
            </tr>
            <tr style={{ display: `${classs === 10 || classs === 12 ? "" : "none"}` }}>
              <th>Subject</th>
              <th>CT1</th>
              <th>Half Yearly</th>
              <th>CT2</th>
              <th>Final</th>
            </tr>
          </thead>
          <tbody>
            {result.length === 0 ? "No result to show" : result.map((e) => {
              return (
                <tr key={e._id}>
                  <td>{e.subject}</td>
                  <td>{e.CT1}</td>
                  <td>{e.mid}</td>
                  <td>{e.CT2}</td>
                  <td>{e.final}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Result
