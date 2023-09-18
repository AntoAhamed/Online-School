import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Feedback(props) {
  const [feedbacks, setFeedbacks] = useState([])
  const classs = props.user?.class;
  const { name, group, roll } = props.user;

  const getFeedbacks = () => {
    axios.post('http://localhost:8000/get_feedbacks', { classs, group, roll })
      .then(res => {
        const data = res.data;
        console.log("Data has been received successfully");
        setFeedbacks(data.data);
        console.log(feedbacks);
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
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i>Feedback</i></b></p>
      </div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "20px", fontFamily: "Dancing Script" }}><b><i><pre>Name: {name}                    Roll: {roll}                   Class: {classs}                    Group: {group}</pre></i></b></p>
      </div>
      <div className='p-2 m-2'>
        {feedbacks.length === 0 ? "No data to show" : feedbacks.map((e)=>{
          return (<div class="col-sm mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Teacher: {e.name}</h5>
              <p class="card-text">Feedback: {e.feedback}</p>
              <p class="card-text text-body-secondary">Contact: {e.contact} || Email: {e.email}</p>
            </div>
          </div>
        </div>)
        })}
      </div>
    </div>
  )
}

export default Feedback
