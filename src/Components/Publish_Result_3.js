import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Publish_Result_3() {
    const navigate = useNavigate();
    const location = useLocation();
    const { classs, group, tmpRoll, subject } = location.state;
    const [CT1, setCT1] = useState('')
    const [CT2, setCT2] = useState('')
    const [mid, setMid] = useState('')
    const [final, setFinal] = useState('')
    const [studentResult, setStudentResult] = useState({})

    async function submit() {
        if (CT1 !== '' && mid !== '' && final !== '') {
            await axios.post('http://localhost:8000/publish_result', { classs, group, tmpRoll, subject, CT1, mid, CT2, final })
                .then(res => {
                    if (res.data === "success") {
                        alert("Published");
                        setCT1('')
                        setCT2('')
                        setMid('')
                        setFinal('')
                        navigate('/publish-result-2')
                    }
                    else {
                        alert("You can't publish a given result twice!");
                    }
                }).catch(e => {
                    console.log(e);
                });
        }
        else {
            alert("Empty field can't be publushed!");
        }
    }

    const getStuResult = async () => {
        axios.post('http://localhost:8000/get_result_for_teacher', { classs, group, tmpRoll, subject })
            .then(res => {
                if (res.data === "failed") {
                    setStudentResult({});
                } else {
                    const data = res.data;
                    console.log("Data has been received successfully");
                    setStudentResult(data.data);
                    console.log(studentResult);
                }
            }).catch(e => {
                console.log(e);
            });
    }

    useEffect(() => {
        getStuResult();
    }, [])

    return (
        <div>
            <div className='p-2 m-2'>
                <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "35px" }}><b>Publish Result</b></p>
            </div>
            <div className='p-2 m-2'>
                <p className='p-1 m-1'><b><pre style={{ textAlign: "center", fontSize: "20px" }}>Class: {classs}                     Group: {group}                     Subject: {subject}                     roll: {tmpRoll}</pre></b></p>
            </div>
            <div className='p-2 m-2'>
                <table class="table p-1 m-1">
                    <thead class="table-dark">
                        <tr>
                            <th>CT1</th>
                            <th>Half Yearly/Pretest</th>
                            <th>CT2</th>
                            <th>Final/Test</th>
                            <th>Submit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="number" className="form-control" value={CT1} onChange={(e) => { setCT1(e.target.value) }} id="username" placeholder="" />
                            </td>
                            <td>
                                <input type="number" className="form-control" value={mid} onChange={(e) => { setMid(e.target.value) }} id="username" placeholder="" />
                            </td>
                            <td style={{ display: `${classs !== 9 || classs !== 11 ? "" : "none"}` }}>
                                <input type="number" className="form-control" value={CT2} onChange={(e) => { setCT2(e.target.value) }} id="username" placeholder="" />
                            </td>
                            <td>
                                <input type="number" className="form-control" value={final} onChange={(e) => { setFinal(e.target.value) }} id="username" placeholder="" />
                            </td>
                            <td>
                                <button onClick={submit} className="btn btn-primary">Submit</button>
                            </td>
                        </tr>
                        <tr>
                            <td><p>{studentResult.CT1}</p></td>
                            <td><p>{studentResult.mid}</p></td>
                            <td style={{ display: `${classs !== 9 || classs !== 11 ? "" : "none"}` }}><p>{studentResult.CT2}</p></td>
                            <td><p>{studentResult.final}</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Publish_Result_3
