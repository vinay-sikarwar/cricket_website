import React from 'react';

const Modal = ({ modalData, closeModal }) => {
  return (
    <div id="modal" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-4/5 md:w-2/3 lg:w-1/2">
        <h3 className="text-3xl font-bold mb-4">{modalData.title}</h3>
        <p className="text-lg text-gray-700">{modalData.content}</p>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
