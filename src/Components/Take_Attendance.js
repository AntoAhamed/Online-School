import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Take_Attendance(props) {
    const [data, setData] = useState({
        value1: 'absent',
        value2: 'present',
        selectedRadioInput: ''
    });

    const handleChange = (e) => {
        setData({ ...data, selectedRadioInput: e.target.value });
    }

    const [students, setStudents] = useState([])
    const { classs, group } = props;
    console.log(classs, group);

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
        const roll = e;
        const value = data.selectedRadioInput;
        console.log(roll, value)
        if (data.selectedRadioInput !== '') {
            axios.post('http://localhost:8000/attendance', { classs, group, roll, value })
                .then(res => {
                    if (res.data === "success") {
                        alert("Attendance given successfully");
                    }
                    else {
                        alert("You can't give attendance to a student twice in a day!");
                    }
                }).catch(e => {
                    console.log(e);
                });
        }
        else {
            alert("Empty field can't be submitted!");
        }
    }

    useEffect(() => {
        getStudents();
    }, [])

    return (
        <div>
            <div className='p-2 m-2'>
                <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i>Attendance</i></b></p>
            </div>
            <div className='p-2 m-2'>
                <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "20px", fontFamily: "Dancing Script" }}><b><i><pre>Class: {classs}                                                                              Group: {group}</pre></i></b></p>
            </div>
            <div className='p-2 m-2'>
                <table class="table p-1 m-1">
                    <thead class="table-dark">
                        <tr>
                            <th>Roll</th>
                            <th>Name</th>
                            <th>Attendance</th>
                            <th>Submit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length === 0 ? "No data to show" : students.map((e) => {
                            return (
                                <tr>
                                    <td>{e.roll}</td>
                                    <td>{e.name}</td>
                                    <td>
                                        <div>
                                            <input
                                                type="radio"
                                                value={data.value1}
                                                onChange={handleChange}
                                                className="toggle_option"
                                                id="first-toggle"
                                                name="toggle_option"
                                            />
                                            <span>Absent</span>

                                            <input
                                                type="radio"
                                                value={data.value2}
                                                onChange={handleChange}
                                                className="toggle_option"
                                                id="second_toggle"
                                                name="toggle_option"
                                            />
                                            <span>Present</span>
                                        </div>
                                    </td>
                                    <td>  <button type="submit" onClick={() => { submit(e.roll) }} class="btn btn-primary">Submit</button>
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

export default Take_Attendance
