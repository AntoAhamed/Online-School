import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img from '../Assets/user.png'

function Student_Profile(props) {
    const navigate = useNavigate()
    const classs = props.profile?.class;
    const group = props.profile?.group;
    const roll = props.profile?.roll;
    const feedback = props.feedback;
    const T_name = props.user?.name;
    const T_contact = props.user?.contact;
    const T_email = props.user?.email;

    const [feedbacks, setFeedbacks] = useState([])

    console.log(T_contact);

    const submit = () => {
        if (feedback !== '') {
            axios.post('http://localhost:8000/post_feedback', { classs, group, roll, feedback, T_name, T_contact, T_email })
                .then(res => {
                    if (res.data === "success") {
                        alert("Feedback given successfully");
                        props.setFeedback('')
                    }
                    else {
                        alert("Something went wrong!")
                    }
                }).catch(e => {
                    console.log(e);
                });
        }
        else {
            alert("Empty field can't be submitted!");
        }
    }

    const getFeedbacks = () => {
        axios.post('http://localhost:8000/get_teacher_feedbacks', { classs, group, roll, T_name })
            .then(res => {
                const data = res.data;
                console.log("Data has been received successfully");
                setFeedbacks(data.data);
                console.log(feedbacks);
                //setReplies(feedbacks[0].reply[0])
                //console.log(replies);
            }).catch(e => {
                console.log(e);
            });
    }

    useEffect(() => {
        getFeedbacks();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className='p-2 m-2'>
                <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i><u>Profile Of {props.profile?.name}</u></i></b></p>
            </div>
            <div className=' container p-2 m-2'>
                <div className='d-flex justify-content-around p-3' style={{ borderRadius: "10px", marginLeft: "9%", backgroundColor: "white", boxShadow: "5px 12px 5px lightblue" }}>
                    <div>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Name: {props.profile?.name}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Roll: {props.profile?.roll}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Class: {props.profile?.class}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Group: {props.profile?.group}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Father: {props.profile?.father}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Mother: {props.profile?.mother}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Contact: {props.profile?.contact}</i></b></p>
                        <p className='' style={{ fontSize: "20px", fontFamily: "Dancing Script" }}><b><i>Email: {props.profile?.email}</i></b></p>
                    </div>
                    <div>
                        <img src={img} alt='' width='180px' height='180px' />
                    </div>
                </div>
                <div className='mb-3' style={{ fontSize: "20px", fontFamily: "Dancing Script", padding: "2% 0% 0% 10%" }}>
                    <p className=''><b><i>Feedback: </i></b></p>
                    <textarea className="form-control" value={props.feedback} onChange={(e) => { props.setFeedback(e.target.value) }} id="exampleFormControlTextarea1" rows="5" placeholder='Enter feedback here'></textarea>
                    <button type="submit" onClick={submit} class="btn btn-primary mt-2">Submit</button>
                </div>
            </div>
            <div className='p-2' style={{marginLeft: "9%", marginRight: "10%"}}>
                {feedbacks.length === 0 ? "No feedbacks" : feedbacks.map((e) => {
                    return (
                        <div class="col-sm mb-3" key={e._id}>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Teacher: {e.name}</h5>
                                    <p class="card-text">Feedback: {e.feedback}</p> {console.log(e.feedback)}
                                    <p class="card-text text-body-secondary">Contact: {e.contact} || Email: {e.email}</p>
                                </div>
                                <div>
                                    {e.reply.length === 0 ? "No feedbacks" : e.reply.map((item, index) => {
                                        return (
                                            <div class="col-sm m-4" key={index}>
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Reply by {name}'s parent</h5>
                                                        <p class="card-text">Reply: {item}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Student_Profile
