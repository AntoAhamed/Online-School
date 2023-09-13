import React from 'react'

function Total_Attendance() {
  return (
    <div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i>Total Attendance</i></b></p>
      </div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "20px", fontFamily: "Dancing Script" }}><b><i><pre>Name: Anto                    Roll: 901                   Class: 9                    Group: Science</pre></i></b></p>
      </div>
      <div className='p-2 m-2'>
        <div className='p-2 m-2'>
          <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "25px", fontFamily: "Dancing Script" }}><b><i>Total: x days</i></b></p>
        </div>
        <div className='p-2 m-2'>
          <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "25px", fontFamily: "Dancing Script" }}><b><i>Present: y days</i></b></p>
        </div>
        <div className='p-2 m-2'>
          <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "25px", fontFamily: "Dancing Script" }}><b><i>Absent: z days</i></b></p>
        </div>
      </div>
    </div>
  )
}

export default Total_Attendance
