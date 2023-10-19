import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Feedback(props) {
  const navigate = useNavigate()
  const [feedbacks, setFeedbacks] = useState([])
  const [replies, setReplies] = useState([])
  const classs = props.user?.class;
  const { name, group, roll } = props.user;

  const getFeedbacks = () => {
    axios.post('http://localhost:8000/get_feedbacks', { classs, group, roll })
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
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i>Feedback</i></b></p>
      </div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "20px", fontFamily: "Dancing Script" }}><b><i><pre>Name: {name}                    Roll: {roll}                   Class: {classs}                    Group: {group}</pre></i></b></p>
      </div>
      <div className='p-2 m-2'>
        {feedbacks.length === 0 ? "No feedbacks" : feedbacks.map((e) => {
          return (
            <div class="col-sm mb-3" key={e._id}>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Teacher: {e.name}</h5>
                  <p class="card-text">Feedback: {e.feedback}</p> {console.log(e.feedback)}
                  <p class="card-text text-body-secondary">Contact: {e.contact} || Email: {e.email}</p>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="button" onClick={() => { navigate("/reply", { state: { name: e.name, feedback: e.feedback, id: e._id } }) }}>Reply</button>
                  </div>
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

export default Feedback
