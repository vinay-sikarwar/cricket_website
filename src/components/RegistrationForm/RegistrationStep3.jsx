import React from 'react';

function RegistrationStep3({ formData, handleInputChange, onPrevious, onSubmit }) {
  
  // Validation function to check card details
  const validateInputs = () => {
    const cardNumberRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/; // Validates format 1234-5678-9012-3456
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Validates MM/YY format
    const cvvRegex = /^\d{3,4}$/; // Validates CVV (3 or 4 digits)

    if (!cardNumberRegex.test(formData.cardNumber)) {
      alert('Please enter a valid card number in the format: 1234-5678-9012-3456.');
      return false;
    }

    if (!expiryDateRegex.test(formData.expiryDate)) {
      alert('Please enter a valid expiry date in the format: MM/YY.');
      return false;
    }

    const currentDate = new Date();
    const [month, year] = formData.expiryDate.split('/').map(Number);
    const expiry = new Date(`20${year}`, month - 1); // Convert to Date object for comparison

    if (expiry < currentDate) {
      alert('The expiry date cannot be in the past.');
      return false;
    }

    if (!cvvRegex.test(formData.cvv)) {
      alert('Please enter a valid CVV (3 or 4 digits).');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateInputs()) {
      onSubmit(e); // Pass the event to the onSubmit function if validation passes
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-step">
      <label htmlFor="cardNumber" className="block font-semibold text-gray-700">Card Number</label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        placeholder="1234-5678-9012-3456"
        value={formData.cardNumber}
        onChange={handleInputChange}
      />

      <label htmlFor="expiryDate" className="block font-semibold text-gray-700">Expiry Date</label>
      <input
        type="text"
        id="expiryDate"
        name="expiryDate"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        placeholder="MM/YY"
        value={formData.expiryDate}
        onChange={handleInputChange}
      />

      <label htmlFor="cvv" className="block font-semibold text-gray-700">CVV</label>
      <input
        type="text"
        id="cvv"
        name="cvv"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        placeholder="123"
        value={formData.cvv}
        onChange={handleInputChange}
      />

      <button
        type="button"
        className="bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 mr-2"
        onClick={onPrevious}
      >
        Back
      </button>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default RegistrationStep3;
