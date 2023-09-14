import React from 'react'

function Subjects() {
  return (
    <div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i>Assigned Subjects To [Teacher Name]</i></b></p>
      </div>
      <div className='p-2 m-2'>
        <table class="table p-1 m-1">
          <thead class="table-dark">
            <tr>
              <th>Class</th>
              <th>Group</th>
              <th>Subject</th>
              <th>Time</th>
              <th>Class Link</th>
              <th>Classroom Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9</td>
              <td>Science</td>
              <td>Bangla</td>
              <td>08:00</td>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Science</td>
              <td>English</td>
              <td>08:51</td>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Science</td>
              <td>Math</td>
              <td>09:41</td>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Science</td>
              <td>ICT</td>
              <td>11:00</td>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Science</td>
              <td>Physics</td>
              <td>11:51</td>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Science</td>
              <td>Chamistry</td>
              <td>12:41</td>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Science</td>
              <td>Higher Math</td>
              <td>01:31</td>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Science</td>
              <td>Biology</td>
              <td>02:21</td>
              <td>...</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Subjects
