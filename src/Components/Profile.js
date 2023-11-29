import React from 'react'
import img from '../Assets/user.png'

function user(props) {
    return (
        <div style={{marginBottom: "3%"}}>
            <div className='p-2 m-2'>
                <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "35px" }}><b><u>user Of {props.user?.name}</u></b></p>
            </div>
            <div className=' container p-2 m-2'>
                <div className='d-flex justify-content-around p-3' style={{ borderRadius: "10px", marginLeft: "9%", backgroundColor: "white", boxShadow: "5px 12px 5px lightblue" }}>
                    <div>
                        <p className='' style={{ fontSize: "25px", color: "black" }}><b>Name: {props.user?.name}</b></p>
                        <p className='' style={{ fontSize: "25px", color: "black" }}><b>Roll: {props.user?.roll}</b></p>
                        <p className='' style={{ fontSize: "25px", color: "black" }}><b>Class: {props.user?.class}</b></p>
                        <p className='' style={{ fontSize: "25px", color: "black" }}><b>Group: {props.user?.group}</b></p>
                        <p className='' style={{ fontSize: "25px", color: "black" }}><b>Father: {props.user?.father}</b></p>
                        <p className='' style={{ fontSize: "25px", color: "black" }}><b>Mother: {props.user?.mother}</b></p>
                        <p className='' style={{ fontSize: "25px", color: "black" }}><b>Contact: {props.user?.contact}</b></p>
                        <p className='' style={{ fontSize: "25px", color: "black" }}><b>Email: {props.user?.email}</b></p>
                    </div>
                    <div>
                        <img src={img} alt='' width='180px' height='180px' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default user
