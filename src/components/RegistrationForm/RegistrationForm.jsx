import React, { useState } from 'react';
import RegistrationStep1 from './RegistrationStep1';
import RegistrationStep2 from './RegistrationStep2';
import RegistrationStep3 from './RegistrationStep3';
import Ticket from './Ticket'; // Import the Ticket component
import eventImage from "../../../image/xyzg.jpg";
import backgroundImg from "../../../image/newticket.png"; 

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    teamName: '',
    teamMembers: '',
    tournament: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleInputChange = (e) => {
    const { name, value, selectedOptions } = e.target;
    
    // Check if the select element is being changed
    if (name === 'tournament') {
      const selectedText = selectedOptions[0].text; // Get the text of the selected option
      setFormData({ ...formData, [name]: selectedText }); // Use selected text instead of value
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Response:', data);

      setIsSubmitted(true); // Set to true to show Ticket component
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegisterAnother = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      teamName: '',
      teamMembers: '',
      tournament: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImg})` }} // Use background image for the whole page
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center bg-white shadow-lg rounded-lg mt-12 mb-24 p-6 max-w-4xl">
        {isSubmitted ? (
          <Ticket formData={formData} onRegisterAnother={handleRegisterAnother} />
        ) : (
          <>
            <div className="w-full lg:w-1/2 p-4">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Event Registration</h2>

              {step === 1 && (
                <RegistrationStep1
                  formData={formData}
                  handleInputChange={handleInputChange}
                  onNext={nextStep}
                />
              )}

              {step === 2 && (
                <RegistrationStep2
                  formData={formData}
                  handleInputChange={handleInputChange}
                  onNext={nextStep}
                  onPrevious={prevStep}
                />
              )}

              {step === 3 && (
                <RegistrationStep3
                  formData={formData}
                  handleInputChange={handleInputChange}
                  onPrevious={prevStep}
                  onSubmit={handleSubmit} // Ensure this is connected
                />
              )}
            </div>

            <div className="hidden lg:flex lg:w-1/2">
              <img src={eventImage} alt="Event" className="object-cover w-full h-full rounded-lg shadow-md" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
