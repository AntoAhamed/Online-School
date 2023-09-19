import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Publish_Result_2(props) {
    const [students, setStudents] = useState([]);
    const { classs, group, subject } = props;

    const [CT1, setCT1] = useState('')
    const [CT2, setCT2] = useState('')
    const [mid, setMid] = useState('')
    const [final, setFinal] = useState('')

    const getStudents = () => {
        axios.post('http://localhost:8000/get_students', { classs, group })
            .then(res => {
                if (res.data === "failed") {
                    alert("Students not found");
                }
                else {
                    const data = res.data;
                    console.log("Data has been received successfully");
                    setStudents(data.data);
                    console.log(students);
                }
            }).catch(e => {
                console.log(e);
            });
    }

    function submit(e) {
        console.log(classs)
        const roll = e;
        console.log(roll)
        console.log(final)

        if (CT1 !== '' && mid !== '' && final !== '') {
            axios.post('http://localhost:8000/publish_result', { classs, group, roll, subject, CT1, mid, CT2, final })
                .then(res => {
                    if (res.data === "success") {
                        alert("Published");
                        setCT1('')
                        setCT2('')
                        setMid('')
                        setFinal('')
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

    useEffect(() => {
        getStudents();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className='p-2 m-2'>
                <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i>Publish Result</i></b></p>
            </div>
            <div className='p-2 m-2'>
                <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "20px", fontFamily: "Dancing Script" }}><b><i><pre>Class: {classs}                            Group: {group}                            Subject: {subject}</pre></i></b></p>
            </div>
            <div className='p-2 m-2'>
                <table class="table p-1 m-1">
                    <thead class="table-dark">
                        <tr style={{ display: `${classs === 9 || classs === 11 ? '' : "none"}` }}>
                            <th>Roll</th>
                            <th>Name</th>
                            <th>CT1</th>
                            <th>Half Yearly</th>
                            <th>CT2</th>
                            <th>Final</th>
                            <th>Submit</th>
                        </tr>
                        <tr style={{ display: `${classs === 10 || classs === 12 ? '' : "none"}` }}>
                            <th>Roll</th>
                            <th>Name</th>
                            <th>CT</th>
                            <th>Pretest</th>
                            <th>Test</th>
                            <th>Submit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length === 0 ? "No data to show" : students.map((e) => {
                            return (
                                <tr key={e._id}>
                                    <td>{e.roll}</td>
                                    <td>{e.name}</td>
                                    <td>
                                        <input type="number" className="form-control" value={CT1} onChange={(e) => { setCT1(e.target.value) }} id="username" placeholder={`${classs === 9 || classs === 11 ? "CT1" : "CT"}`} />
                                    </td>
                                    <td>
                                        <input type="number" className="form-control" value={mid} onChange={(e) => { setMid(e.target.value) }} id="username" placeholder={`${classs === 9 || classs === 11 ? "Half Yearly" : "Pretest"}`} />
                                    </td>
                                    <td style={{ display: `${classs === 9 || classs === 11 ? "" : "none"}` }}>
                                        <input type="number" className="form-control" value={CT2} onChange={(e) => { setCT2(e.target.value) }} id="username" placeholder="CT2" />
                                    </td>
                                    <td>
                                        <input type="number" className="form-control" value={final} onChange={(e) => { setFinal(e.target.value) }} id="username" placeholder={`${classs === 9 || classs === 11 ? "Final" : "Test"}`} />
                                    </td>
                                    <td>
                                        <button onClick={() => submit(e.roll)} className="btn btn-primary">Submit</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Publish_Result_2
