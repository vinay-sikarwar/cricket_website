import React from 'react';
import './style.css'; 

const TopTeams = ({ openModal }) => {
  return (
    <section id="Top_Teams" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Top Teams</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-gray-100 p-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold">Hunters XI</h3>
            <p className="mt-2 text-gray-700">Rank: #1</p>
            <p className="mt-2 text-gray-700">Wins: 12/23</p>
            <p className="mt-2 text-gray-700">6 Time XYZ Trophy Winner</p>
            <button className="btn mt-4 inline-block text-white" onClick={() => openModal('top1')}>Details</button>
          </div>
          <div className="card bg-gray-100 p-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold">Gladiators</h3>
            <p className="mt-2 text-gray-700">Rank: #2</p>
            <p className="mt-2 text-gray-700">Wins: 8/19</p>
            <p className="mt-2 text-gray-700">4 Time XYZ Trophy Winner</p>
            <button className="btn mt-4 inline-block text-white" onClick={() => openModal('top2')}>Details</button>
          </div>
          <div className="card bg-gray-100 p-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold">Warriors XI</h3>
            <p className="mt-2 text-gray-700">Rank: #3</p>
            <p className="mt-2 text-gray-700">Wins: 6/15</p>
            <p className="mt-2 text-gray-700">3 Time XYZ Trophy Winner</p>
            <button className="btn mt-4 inline-block text-white" onClick={() => openModal('top3')}>Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopTeams;
