import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

export default function App() {

  return (
    <RecoilRoot>
    <Router>
      <LandingPage />
    </Router>
  </RecoilRoot>
  );
}
