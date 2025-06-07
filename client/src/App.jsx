import React, { useEffect } from 'react';
import axios from 'axios';
import LandingPage from './pages/LandingPage'
export default function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get('/api/v1/course/preview',{
  //         headers: {
  //           'Cache-Control': 'no-cache'
  //         }
  //       }
  //       ); // proxy handles base URL
  //       console.log(res.data);
  //     } catch (error) {
  //       console.error("Error fetching course preview:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <LandingPage/>
    </div>
  );
}
