'use client'

import React from 'react';
import Navbar from '../components/Navbar';
import TextMoving from '@/components/MovingText';
import TwoColumnLayout from '@/components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <div className="pb-2">
        <TextMoving text={'GDS Online Engagement Schedule - II (July)2023 : List-VI of Shortlisted Candidates Published.  GDS Online Engagement SpecialDrive (May)2023 : List-X of Shortlisted Candidates Published.'} delay={0} />
      </div>
      <TextMoving text={'ADDENDUM-IV TO NOTIFICATION No.17-31/2023-GDS DATED: 20.05.2023 Click here for Addendum    ADDENDUM'} delay={2000} />
      <div className="mt-10"><TwoColumnLayout /></div>
      <main className="flex justify-center items-center flex-grow">
        {/* <div className="text-center">
          Hello World!
        </div> */}
      </main>
    </div>
  );
}
