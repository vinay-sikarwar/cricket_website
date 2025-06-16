import React from "react";

function RegistrationStep3({
  formData,
  handleInputChange,
  onPrevious,
  onSubmit,
}) {
  const validateInputs = () => {
    const cardNumberRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvRegex = /^\d{3,4}$/;

    if (!cardNumberRegex.test(formData.cardNumber)) {
      alert(
        "Please enter a valid card number in the format: 1234-5678-9012-3456."
      );
      return false;
    }

    if (!expiryDateRegex.test(formData.expiryDate)) {
      alert("Please enter a valid expiry date in the format: MM/YY.");
      return false;
    }

    const currentDate = new Date();
    const [month, year] = formData.expiryDate.split("/").map(Number);
    const expiry = new Date(`20${year}`, month - 1);

    if (expiry < currentDate) {
      alert("The expiry date cannot be in the past.");
      return false;
    }

    if (!cvvRegex.test(formData.cvv)) {
      alert("Please enter a valid CVV (3 or 4 digits).");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-step space-y-6">
      <div>
        <label
          htmlFor="cardNumber"
          className="block text-sm font-medium text-gray-300"
        >
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          className="mt-1 w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
          placeholder="1234-5678-9012-3456"
          value={formData.cardNumber}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label
          htmlFor="expiryDate"
          className="block text-sm font-medium text-gray-300"
        >
          Expiry Date
        </label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          className="mt-1 w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
          placeholder="MM/YY"
          value={formData.expiryDate}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label
          htmlFor="cvv"
          className="block text-sm font-medium text-gray-300"
        >
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          className="mt-1 w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
          placeholder="123"
          value={formData.cvv}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrevious}
          className="py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="py-2 px-6 text-white bg-gradient-to-r from-[#00FF66] to-[#00cc66] rounded-lg shadow-md hover:shadow-[0_0_12px_#00FF66] transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default RegistrationStep3;
