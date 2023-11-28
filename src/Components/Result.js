import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Result(props) {
  const [result, setResult] = useState([]);
  const classs = props.user?.class;
  const group = props.user?.group;
  const roll = props.user?.roll;

  let midTotal, finalTotal, midcg, finalcg, total1, total2, cg1, cg2;

  const getResults = async () => {
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

  total1 = total2 = cg1 = cg2 = 0

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
              <th>CT1(20)</th>
              <th>Half Yearly(80)</th>
              <th>Total(100)</th>
              <th>GPA(4)</th>
              <th>CT2(20)</th>
              <th>Final(80)</th>
              <th>Total(100)</th>
              <th>GPA(4)</th>
            </tr>
            <tr style={{ display: `${classs === 10 || classs === 12 ? "" : "none"}` }}>
              <th>Subject</th>
              <th>CT(20)</th>
              <th>Pretest(80)</th>
              <th>Total(100)</th>
              <th>GPA(4)</th>
              <th>Test(100)</th>
              <th>Total(100)</th>
              <th>GPA(4)</th>
            </tr>
          </thead>
          <tbody>
            {result.length === 0 ? "No result to show" : result.map((e) => {
              midTotal = e.CT1 + e.mid;
              finalTotal = e.CT2 + e.final;
              total1 += midTotal;
              total2 += finalTotal;

              if (midTotal >= 100 && midTotal <= 80) {
                midcg = "A+";
              } else if (midTotal >= 79 && midTotal <= 70) {
                midcg = "A";
              } else if (midTotal >= 69 && midTotal <= 60) {
                midcg = "A-";
              } else if (midTotal >= 59 && midTotal <= 50) {
                midcg = "B";
              } else if (midTotal >= 49 && midTotal <= 45) {
                midcg = "C";
              } else if (midTotal >= 44 && midTotal <= 40) {
                midcg = "D";
              } else {
                midcg = "F";
              }

              if (finalTotal >= 100 && finalTotal <= 80) {
                finalcg = "A+";
              } else if (finalTotal >= 79 && finalTotal <= 70) {
                finalcg = "A";
              } else if (finalTotal >= 69 && finalTotal <= 60) {
                finalcg = "A-";
              } else if (finalTotal >= 59 && finalTotal <= 50) {
                finalcg = "B";
              } else if (finalTotal >= 49 && finalTotal <= 45) {
                finalcg = "C";
              } else if (finalTotal >= 44 && finalTotal <= 40) {
                finalcg = "D";
              } else {
                finalcg = "F";
              }

              return (
                <tr key={e._id}>
                  <td>{e.subject}</td>
                  <td>{e.CT1}</td>
                  <td>{e.mid}</td>
                  <td>{midTotal}</td>
                  <td>{midcg}</td>
                  <td style={{ display: `${classs === 9 || classs === 11 ? "" : "none"}` }}>{e.CT2}</td>
                  <td>{e.final}</td>
                  <td>{finalTotal}</td>
                  <td>{finalcg}</td>
                </tr>
              )
            })}
            <tr>
              <td></td>
              <td></td>
              <td>Total & CGPA</td>
              <td>{total1}</td>
              <td>{cg1}</td>
              <td style={{ display: `${classs === 9 || classs === 11 ? "" : "none"}` }}></td>
              <td>Total & CGPA</td>
              <td>{total2}</td>
              <td>{cg2}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default Result
