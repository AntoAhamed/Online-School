import React from 'react'

function Result() {
  return (
    <div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i>Result</i></b></p>
      </div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "20px", fontFamily: "Dancing Script" }}><b><i><pre>Name: Anto                    Roll: 901                   Class: 9                    Group: Science</pre></i></b></p>
      </div>
      <div className='p-2 m-2'>
        <table class="table p-1 m-1">
          <thead class="table-dark">
            <tr>
              <th>Subject</th>
              <th>CT</th>
              <th>Half Yearly/Pretest</th>
              <th>Final/Test</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bangla</td>
              <td>10</td>
              <td>20</td>
              <td>50</td>
            </tr>
            <tr>
              <td>English</td>
              <td>10</td>
              <td>20</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Math</td>
              <td>10</td>
              <td>20</td>
              <td>50</td>
            </tr>
            <tr>
              <td>ICT</td>
              <td>10</td>
              <td>20</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Physics</td>
              <td>10</td>
              <td>20</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Chamistry</td>
              <td>10</td>
              <td>20</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Higher Math</td>
              <td>10</td>
              <td>20</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Biology</td>
              <td>10</td>
              <td>20</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Result
