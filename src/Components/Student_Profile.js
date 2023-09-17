import React from 'react'

function Student_Profile(props) {
    return (
        <div>
            <div className='p-2 m-2'>
                <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i><u>Profile Of {props.profile?.name}</u></i></b></p>
            </div>
            <div className=' container p-2 m-2'>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "1% 0% 0% 10%" }}><b><i>Name: {props.profile?.name}</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "1% 0% 0% 10%" }}><b><i>Roll: {props.profile?.roll}</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "1% 0% 0% 10%" }}><b><i>Class: {props.profile?.class}</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "1% 0% 0% 10%" }}><b><i>Group: {props.profile?.group}</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "1% 0% 0% 10%" }}><b><i>Father: {props.profile?.father}</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "1% 0% 0% 10%" }}><b><i>Mother: {props.profile?.mother}</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "1% 0% 0% 10%" }}><b><i>Contact: {props.profile?.contact}</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "1% 0% 0% 10%" }}><b><i>Email: {props.profile?.email}</i></b></p>
                <div className='mb-3' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "2% 0% 0% 10%" }}>
                    <p className=''><b><i>Feedback: </i></b></p>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Enter feedback here'></textarea>
                    <button type="submit" class="btn btn-primary mt-2">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Student_Profile
