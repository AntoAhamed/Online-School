import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function Reply() {
    const navigate = useNavigate()
    const location = useLocation()
    const [reply, setReply] = useState('')
    const { name, feedback, id } = location.state
    console.log(name, feedback, id)

    const send = async () => {
        if (reply !== '') {
            try {
                await axios.post('http://localhost:8000/setreply', { id, reply })
                    .then(res => {
                        if (res.data === "success") {
                            //getFeedbacks();
                            alert("You replied successfully");
                            setReply('');
                            navigate("/feedback");
                        }
                        else {
                            alert("Inavlid!");
                        }
                    }).catch(e => {
                        console.log(e);
                    });
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            alert("Empty field can't be submitted!");
        }
    }

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-3'>

                </div>
                <div className='col-6'>
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Reply to {location.state.name}</h1>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Enter your reply</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" value={reply} onChange={(e) => { setReply(e.target.value) }} />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" onClick={send}>Send reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-3'>

                </div>
            </div>
        </div>
    )
}

export default Reply
