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
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Login />} />
          <Route path="class-routine" element={<ClassRoutine />} />
          <Route path="result" element={<Result />} />
          <Route path="total-attendance" element={<TotalAttendance />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="find-student" element={<FindStudent />} />
          <Route path="student-profile" element={<StudentProfile />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="take-attendance" element={<TakeAttendance />} />
          <Route path="publish-result" element={<PublishResult />} />
          <Route path="publish-result-2" element={<PublishResult2/>} />
          <Route path="subject" element={<Subject />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
