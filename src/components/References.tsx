import React from 'react';

const References = () => (
  <section className="mb-6">
    <div className="mb-6">
      <div className="inline-block px-3 py-1 bg-purple-100 rounded-full mb-3">
        <span className="text-purple-600 text-xs font-medium">RESOURCES</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">References</h2>
      <p className="text-gray-600">
        List all references used so far — including technical resources, research studies, benchmarking examples, and any course materials.
      </p>
    </div>

    <div className="grid md:grid-cols-1 gap-6 mb-6">
      <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
            {/* Placeholder book icon */}
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9M12 4h9M3 6h9M3 18h9M3 12h9M3 6v12a2 2 0 002 2h7a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Reference List</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Include all sources that informed your project — articles, technical documentation, studies, or course material.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-purple-100 mt-3">
          <p className="text-sm text-gray-500 italic">
            Add URLs, citations, or notes about each reference here.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default References;
