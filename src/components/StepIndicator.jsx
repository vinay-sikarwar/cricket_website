import React from 'react';

const StepIndicator = ({ currentStep }) => (
  <div className="flex justify-around mb-8">
    {[1, 2, 3].map(step => (
      <div
        key={step}
        className={`progress-step w-10 h-10 flex items-center justify-center rounded-full ${currentStep === step ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'} font-bold`}
      >
        {step}
      </div>
    ))}
  </div>
);

export default StepIndicator;
