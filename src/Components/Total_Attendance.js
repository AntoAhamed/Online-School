import React from 'react'

function Total_Attendance(props) {
  return (
    <div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i>Total Attendance</i></b></p>
      </div>
      <div className='p-2 m-2'>
        <pre><p className='p-1 m-1' style={{ textAlign: "center", fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Name: {props.user?.name}                    Roll: {props.user?.roll}                   Class: {props.user?.class}                    Group: {props.user?.group}</i></b></p></pre>
      </div>
      <div className='p-2 m-2'>
        <div className='p-2 m-2'>
          <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "25px", fontFamily: "Dancing Script" }}><b><i>Total: {props.user?.total} days</i></b></p>
        </div>
        <div className='p-2 m-2'>
          <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "25px", fontFamily: "Dancing Script" }}><b><i>Present: {props.user?.present} days</i></b></p>
        </div>
        <div className='p-2 m-2'>
          <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "25px", fontFamily: "Dancing Script" }}><b><i>Absent: {props.user?.absent} days</i></b></p>
        </div>
      </div>
    </div>
  )
}

export default Total_Attendance
