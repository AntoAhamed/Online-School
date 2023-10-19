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
import Reply from './Components/Reply';
import { useState } from 'react';

function App() {
  const [type, setType] = useState('')
  const [user, setUser] = useState({});
  console.log(user)
  console.log(type)

  //teacher
  const [classs, setClasss] = useState('')
  const [group, setGroup] = useState('')
  const [roll, setRoll] = useState('')
  const [subject, setSubject] = useState('')
  const [profile, setProfile] = useState({})
  const [feedback, setFeedback] = useState('')

  console.log(profile)

  console.log(classs)

  const logout = () => {
    setUser({});
    setType('');
    setClasss('');
    setGroup('');
    setRoll('');
    setSubject('');
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : <Navbar type={type} logout={logout} />}>
            <Route index element={!user._id ? <Login setUser={setUser} type={type} setType={setType} /> : ''} />
            <Route path="class-routine" element={type === "student" || type === "parent" ? <ClassRoutine user={user} class={user.class} group={user.group} /> : ''} />
            <Route path="result" element={type === "student" || type === "parent" ? <Result user={user} /> : ''} />
            <Route path="total-attendance" element={type === "student" || type === "parent" ? <TotalAttendance user={user} /> : ''} />
            <Route path="feedback" element={type === "parent" ? <Feedback user={user} /> : ''} />
            <Route path="find-student" element={type === "teacher" ? <FindStudent classs={classs} setClasss={setClasss} group={group} setGroup={setGroup} roll={roll} setRoll={setRoll} setProfile={setProfile} /> : ''} />
            <Route path="student-profile" element={type === "teacher" ? <StudentProfile profile={profile} feedback={feedback} setFeedback={setFeedback} user={user} /> : ''} />
            <Route path="attendance" element={type === "teacher" ? <Attendance classs={classs} setClasss={setClasss} group={group} setGroup={setGroup} /> : ''} />
            <Route path="take-attendance" element={type === "teacher" ? <TakeAttendance classs={classs} group={group} /> : ''} />
            <Route path="publish-result" element={type === "teacher" ? <PublishResult classs={classs} setClasss={setClasss} group={group} setGroup={setGroup} subject={subject} setSubject={setSubject} /> : ''} />
            <Route path="publish-result-2" element={type === "teacher" ? <PublishResult2 classs={classs} group={group} subject={subject} /> : ''} />
            <Route path="subject" element={type === "teacher" ? <Subject user={user} /> : ''} />
            <Route path="reply" element={type === "parent" ? <Reply user={user} /> : ''} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
