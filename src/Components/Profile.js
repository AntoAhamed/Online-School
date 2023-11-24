import React from 'react'
import img from '../Assets/user.png'

function user(props) {
    return (
        <div>
            <div className='p-2 m-2'>
                <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i><u>user Of {props.user?.name}</u></i></b></p>
            </div>
            <div className=' container p-2 m-2'>
                <div className='d-flex justify-content-around p-3' style={{ borderRadius: "10px", marginLeft: "9%", backgroundColor: "white", boxShadow: "5px 12px 5px lightblue" }}>
                    <div>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Name: {props.user?.name}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Roll: {props.user?.roll}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Class: {props.user?.class}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Group: {props.user?.group}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Father: {props.user?.father}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Mother: {props.user?.mother}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Contact: {props.user?.contact}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Email: {props.user?.email}</i></b></p>
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
