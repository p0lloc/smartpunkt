import { useState } from 'react'
import Overview from './components/Overview';
import DesignThinking from './components/DesignThinking';
import BackgroundInfo from './components/BackgroundInfo';
import References from './components/References';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50 to-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-gray-900 font-semibold text-lg">Capstone</span>
            </div>
            <div className="flex gap-2">
              {['overview', 'design', 'background', 'references'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 capitalize ${
                    activeSection === section
                      ? 'bg-red-500 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="relative z-10 pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-red-100 rounded-full border border-red-200">
            <span className="text-red-600 text-sm font-medium">IKEA Innovation Project</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
            Software Innovation & Design
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Communicating our software innovation and design process to IKEA stakeholders
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105">
              View Project
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 border border-gray-300">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 pb-16">
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-red-200/50">
            <Overview />
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-orange-200/50">
            <DesignThinking />
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-rose-200/50">
            <BackgroundInfo />
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-red-200/50">
            <References />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200 mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2025 Capstone Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App