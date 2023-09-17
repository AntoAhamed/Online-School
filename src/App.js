import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import ClassRoutine from './Components/Class_Routine'
import Result from './Components/Result'
import TotalAttendance from './Components/Total_Attendance'
import Feedback from './Components/Feedback';
import FindStudent from './Components/Find_Student';
import StudentProfile from './Components/Student_Profile';
import Attendance from './Components/Attendance';
import TakeAttendance from './Components/Take_Attendance';
import PublishResult from './Components/Publish_Result'
import PublishResult2 from './Components/Publish_Result_2';
import Subject from './Components/Subject'
import { useState } from 'react';

function App() {
  const [type, setType] = useState('')
  const [user, setUser] = useState({});
  console.log(user)
  console.log(type)

  const logout = () => {
    setUser({});
    setType('');
  }

  //teacher
  const [classs, setClasss] = useState('')
  const [group, setGroup] = useState('')
  const [roll, setRoll] = useState('')
  const [subject, setSubject] = useState('')
  const [profile, setProfile] = useState({})
  const [feedback, setFeedback] = useState({})

  console.log(profile)

  console.log(classs)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <Navbar type={type} logout={logout} />}>
            <Route index element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : ''} />
            <Route path="class-routine" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <ClassRoutine user={user} class={user.class} group={user.group} />} />
            <Route path="result" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <Result user={user} />} />
            <Route path="total-attendance" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <TotalAttendance user={user} />} />
            <Route path="feedback" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <Feedback />} />
            <Route path="find-student" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <FindStudent classs={classs} setClasss={setClasss} group={group} setGroup={setGroup} roll={roll} setRoll={setRoll} setProfile={setProfile} />} />
            <Route path="student-profile" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <StudentProfile profile={profile} />} />
            <Route path="attendance" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <Attendance />} />
            <Route path="take-attendance" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <TakeAttendance />} />
            <Route path="publish-result" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <PublishResult classs={classs} setClasss={setClasss} group={group} setGroup={setGroup} subject={subject} setSubject={setSubject} />} />
            <Route path="publish-result-2" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <PublishResult2 classs={classs} setClasss={setClasss} group={group} setGroup={setGroup} subject={subject} setSubject={setSubject} />} />
            <Route path="subject" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <Subject user={user} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
