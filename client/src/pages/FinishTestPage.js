import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './FinishTestPage.css';

const FinishTestPage = () => {
  return (
    <div className="finish-test-page">
      <Navbar />
      <div className="finish-test-container">
        <h1>Thank You for Completing the Test!</h1>
        <p>Your answers have been submitted successfully.</p>
        <p>You will receive your score via email once the evaluation is complete.</p>
        <button onClick={() => window.location.href = '/'}>Go to Homepage</button>
      </div>
      <Footer />
    </div>
  );
};

export default FinishTestPage;
