import React from 'react'

function Total_Attendance(props) {
  return (
    <div style={{padding: "60px"}}>
      <div className='p-2 m-2'>
        <p className='m-1' style={{ paddingLeft: "207px", fontSize: "35px" }}><b>Total Attendance</b></p>
      </div>
      <div className='p-2 m-2'>
        <pre><p className='p-1 m-1' style={{ fontSize: "28px", fontFamily: "Times New Roman, Times, serif" }}><b>Name: {props.user?.name}      Roll: {props.user?.roll}     Class: {props.user?.class}      Group: {props.user?.group}</b></p></pre>
      </div>
      <div className='p-2 m-2'>
        <div className='p-2 m-2'>
          <p className='m-1' style={{ paddingLeft: "220px", fontSize: "25px" }}><b>Total: {props.user?.total} days</b></p>
        </div>
        <div className='p-2 m-2'>
          <p className='m-1' style={{ paddingLeft: "220px", fontSize: "25px" }}><b>Present: {props.user?.present} days</b></p>
        </div>
        <div className='p-2 m-2'>
          <p className='m-1' style={{ paddingLeft: "220px", fontSize: "25px" }}><b>Absent: {props.user?.absent} days</b></p>
        </div>
      </div>
    </div>
  )
}

export default Total_Attendance
