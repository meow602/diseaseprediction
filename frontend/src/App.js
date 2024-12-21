// frontend/src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import PatientRegister from './components/PatientRegister';
import DoctorRegister from './components/DoctorRegister';
import AdminHome from './components/AdminHome';
import DoctorHome from './components/DoctorHome';
import PatientHome from './components/PatientHome'; // Import the new PatientHome component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/admin" element={<Login role="admin" />} />
          <Route path="/login/doctor" element={<Login role="doctor" />} />
          <Route path="/login/patient" element={<Login role="patient" />} />
          <Route path="/register/patient" element={<PatientRegister />} />
          <Route path="/register/doctor" element={<DoctorRegister />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/doctor" element={<DoctorHome />} />
          <Route path="/patient" element={<PatientHome />} /> {/* Use the new PatientHome component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
