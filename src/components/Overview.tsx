import React from 'react';

const Overview = () => (
  <section className="mb-6">
    <div className="mb-6">
      <div className="inline-block px-3 py-1 bg-blue-100 rounded-full mb-3">
        <span className="text-blue-600 text-xs font-medium">OVERVIEW</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Overview & Initial Demo</h2>
      <p className="text-gray-600">Brief description of your innovation idea and what it aims to solve.</p>
    </div>

    <div className="grid md:grid-cols-1 gap-6 mb-6">
      {/* Demo Card */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Demo</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Early demo or concept diagram goes here. Highlight key features and the problem your solution addresses.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-blue-100 mt-3">
          <p className="text-sm text-gray-500 italic">Insert visuals, screenshots, or diagrams for your early concept.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Overview;
