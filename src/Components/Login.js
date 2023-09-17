import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function login(e) {
    e.preventDefault();

    let tmp = username;

    if(tmp[0]==='s'){
      props.setType("student");
    }
    if(tmp[0]==='p'){
      props.setType("parent");
    }
    if(tmp[0]==='t'){
      props.setType("teacher");
    }

    if (username !== '' && password !== '') {
      let type = props.type;
      try {
        await axios.post('http://localhost:8000/login', { username, password, type })
          .then(res => {
            if (res.data === "failed") {
              alert("User dosen't exist! Please click login twice or try again later...");
            }
            else if (res.data === "success") {
              getData();
              alert("You are logged in successfully");
              //navigate("/");
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
      alert("Something went wrong!");
    }
  }

  function getData() {
    axios.get("http://localhost:8000/get_user")
      .then(res => {
        const data = res.data;
        console.log("Data has been received successfully");
        props.setUser(data.user);
        console.log(data);
      }).catch(e => {
        console.log("Data retrive unsuccessfull");
        console.log(e);
      })
  }

  return (
    <div className='container' style={{ marginTop: '10%', border: "1px solid #66a3ff", borderRadius: "5px", backgroundColor: "#66a3ff" }}>
      <div className="row mb-3">
        <div className="col" style={{ textAlign: "center", fontSize: "45px" }}>
          <b>Login</b>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <form action='' method='' className='login-form'>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" value={username} onChange={(e) => { setUsername(e.target.value) }} id="username" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" placeholder="" />
            </div>
            <button type="submit" onClick={login} className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
