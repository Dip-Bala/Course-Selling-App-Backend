import React, { useEffect } from 'react';
import {RecoilRoot} from 'recoil'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <RecoilRoot>
      <LandingPage/>
    </RecoilRoot>
  );
}
