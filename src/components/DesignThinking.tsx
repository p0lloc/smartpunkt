import React from 'react';

const DesignThinking = () => (
  <section className="mb-6">
    <div className="mb-6">
      <div className="inline-block px-3 py-1 bg-red-100 rounded-full mb-3">
        <span className="text-red-600 text-xs font-medium">DESIGN PROCESS</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Design Thinking Reflection</h2>
      <p className="text-gray-600">Our approach to innovation and problem-solving</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-6">
      {/* Usability */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Usability</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-medium text-gray-900">Who are your users?</span> What problem are you solving for them?
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-blue-100 mt-3">
          <p className="text-sm text-gray-500 italic">Add your user insights and problem statement here...</p>
        </div>
      </div>

      {/* Feasibility */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Feasibility</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-medium text-gray-900">How do you envision building this solution?</span> What technologies are being considered?
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-green-100 mt-3">
          <p className="text-sm text-gray-500 italic">Describe your technical approach and tools...</p>
        </div>
      </div>

      {/* Viability */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Viability</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-medium text-gray-900">How does this innovation align</span> with IKEA's strategy, values, or operations?
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-orange-100 mt-3">
          <p className="text-sm text-gray-500 italic">Explain business alignment and strategic fit...</p>
        </div>
      </div>

      {/* Sustainability */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-medium text-gray-900">What potential positive impacts or risks</span> have you considered?
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-emerald-100 mt-3">
          <p className="text-sm text-gray-500 italic">Outline environmental and social considerations...</p>
        </div>
      </div>
    </div>

    {/* Insights Section */}
    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Research Insights</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Use insights from your user interviews, benchmarking, and early idea validation here. Document key findings, user feedback, and validation results that informed your design decisions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default DesignThinking;