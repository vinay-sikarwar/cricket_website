import React from 'react';

const PastMatches = ({ openModal }) => {
  return (
    <section id="blogs" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Past Matches Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Hunters XI vs Gladiators</h3>
            <p className="mt-2 text-gray-700">Hunters XI won by 50 runs.</p>
            <button className="btn mt-4 inline-block text-white" onClick={() => openModal('match1')}>Read More</button>
          </div>
          <div className="card bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Gladiators vs Warriors XI</h3>
            <p className="mt-2 text-gray-700">Gladiators won by 10 runs.</p>
            <button className="btn mt-4 inline-block text-white" onClick={() => openModal('match2')}>Read More</button>
          </div>
          <div className="card bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Warriors XI vs Hunters XI</h3>
            <p className="mt-2 text-gray-700">Warriors XI won by 2 wickets.</p>
            <button className="btn mt-4 inline-block text-white" onClick={() => openModal('match3')}>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastMatches;
