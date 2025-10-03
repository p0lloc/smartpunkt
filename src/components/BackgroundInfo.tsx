import React from 'react';

const BackgroundInfo = () => (
  <section className="mb-6">
    <div className="mb-6">
      <div className="inline-block px-3 py-1 bg-red-100 rounded-full mb-3">
        <span className="text-red-600 text-xs font-medium">TEAM INFO</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Background Information</h2>
      <p className="text-gray-600">Meet the team behind this innovation</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Team Members */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
        </div>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">•</span>
            <span>Member Name 1</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">•</span>
            <span>Member Name 2</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">•</span>
            <span>Member Name 3</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">•</span>
            <span>Member Name 4</span>
          </li>
        </ul>
      </div>

      {/* Team Photo */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Team Photo</h3>
        </div>
        <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 h-40 flex items-center justify-center">
          <p className="text-gray-400 text-sm">Optional team photo here</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-6 border border-rose-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-700">
            <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">email@example.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm">+46 XX XXX XX XX</span>
          </div>
        </div>
      </div>

      {/* Course Information */}
      <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Course Information</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
              C
            </div>
            <span className="text-sm text-gray-700 font-medium">Chalmers University</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">Course Name: [Insert Course Code & Name]</p>
        </div>
      </div>
    </div>
  </section>
);

export default BackgroundInfo;