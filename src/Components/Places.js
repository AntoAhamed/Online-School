import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Places(props) {
    const { classs } = props;
    const [allResults, setAllResults] = useState([]);

    const getFullResults = async () => {
        await axios.get('http://localhost:8000/get_full_results')
            .then(res => {
                const data = res.data;
                console.log("Data has been received successfully");
                setAllResults(data.data);
                console.log(allResults);
            }).catch(e => {
                console.log(e);
            });
    }

    useEffect(() => {
        getFullResults();
    }, [])

    return (
        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th>Total Marks (Combined)</th>
                    <th>Places</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1000</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>986</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>805</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Places
