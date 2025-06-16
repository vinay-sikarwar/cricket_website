import React, { useState } from "react";
import RegistrationStep1 from "./RegistrationStep1";
import RegistrationStep2 from "./RegistrationStep2";
import RegistrationStep3 from "./RegistrationStep3";
import Ticket from "./Ticket";
import eventImage from "../../image/xyzg.jpg";

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    teamName: "",
    teamMembers: "",
    tournament: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleInputChange = (e) => {
    const { name, value, selectedOptions } = e.target;
    if (name === "tournament") {
      const selectedText = selectedOptions[0].text;
      setFormData({ ...formData, [name]: selectedText });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log("Response:", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRegisterAnother = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({
      name: "",
      email: "",
      phone: "",
      teamName: "",
      teamMembers: "",
      tournament: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#101010] to-[#1a1a1a] flex justify-center items-center px-4">
      <div className="w-full max-w-5xl mx-auto bg-[#1e1e1e] border border-[#2e2e2e] text-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        {isSubmitted ? (
          <Ticket
            formData={formData}
            onRegisterAnother={handleRegisterAnother}
          />
        ) : (
          <>
            {/* Form Section */}
            <div className="w-full lg:w-1/2 p-8 space-y-4">
              <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-white to-[#00FF66] mb-6">
                Event Registration
              </h2>

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
                  onSubmit={handleSubmit}
                />
              )}
            </div>

            {/* Image Section */}
            <div className="hidden lg:block lg:w-1/2">
              <img
                src={eventImage}
                alt="Event"
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
