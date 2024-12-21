// frontend/src/components/PatientHome.js
import React from 'react';

function PatientHome() {
  return (
    <div>
      <iframe 
        src="http://localhost:8501"  // Replace with the actual URL of your Streamlit app
        title="Patient Homepage" 
        style={{ width: '100%', height: '100vh', border: 'none' }} 
      />
    </div>
  );
}

export default PatientHome;