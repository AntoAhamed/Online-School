import React from 'react'

function Student_Profile() {
    return (
        <div>
            <div className='p-2 m-2'>
                <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i>[Student Name]</i></b></p>
            </div>
            <div className=' container p-2 m-2'>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "2% 0% 0% 10%" }}><b><i>Name: [Name]</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "2% 0% 0% 10%" }}><b><i>Roll: [Roll]</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "2% 0% 0% 10%" }}><b><i>Class: [Class]</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "2% 0% 0% 10%" }}><b><i>Group: [Group]</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "2% 0% 0% 10%" }}><b><i>Father: [Father]</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "2% 0% 0% 10%" }}><b><i>Mother: [Mother]</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "2% 0% 0% 10%" }}><b><i>Contact: [Contact]</i></b></p>
                <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "2% 0% 0% 10%" }}><b><i>Email: [Email]</i></b></p>
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
