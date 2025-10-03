import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Overview from './components/Overview';
import DesignThinking from './components/DesignThinking';
import BackgroundInfo from './components/BackgroundInfo';
import References from './components/References';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Capstone Project Website</h1>
        <p className="text-gray-600">Communicate your software innovation and design process to IKEA stakeholders</p>
      </header>
      <main className="max-w-3xl mx-auto">
        <Overview />
        <DesignThinking />
        <BackgroundInfo />
        <References />
      </main>
    </div>
  );
}

export default App
