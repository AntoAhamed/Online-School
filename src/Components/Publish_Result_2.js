import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Publish_Result_2(props) {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const { classs, group, subject } = props;

    const getStudents = async () => {
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

    function addResult(e) {
        const tmpRoll = e;
        navigate("/publish-result-3", { state: { classs, group, tmpRoll, subject } })
    }

    useEffect(() => {
        getStudents();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className='p-2 m-2'>
                <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "35px" }}><b>Publish Result</b></p>
            </div>
            <div className='p-2 m-2'>
                <p className='p-1 m-1'><b><pre style={{ textAlign: "center", fontSize: "25px", fontFamily: "Times New Roman, Times, serif" }}>Class: {classs}                            Group: {group}                            Subject: {subject}</pre></b></p>
            </div>
            <div className='p-2 m-2'>
                <table class="table p-1 m-1">
                    <thead class="table-dark">
                        <tr>
                            <th>Roll</th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Add Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length === 0 ? "No data to show" : students.map((e) => {
                            return (
                                <tr key={e._id}>
                                    <td>{e.roll}</td>
                                    <td>{e.name}</td>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td style={{ display: `${classs !== 9 || classs !== 11 ? "" : "none"}` }}>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                        <button onClick={() => addResult(e.roll)} className="btn btn-primary">Add Result</button>
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
