import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import ClassRoutine from './Components/Class_Routine'
import Result from './Components/Result'
import TotalAttendance from './Components/Total_Attendance'
import Feedback from './Components/Feedback';

function App() {
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
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
