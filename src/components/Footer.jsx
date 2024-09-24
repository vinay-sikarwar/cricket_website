import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            We'd love to hear from you! Whether you have questions about our tournaments, want to partner with us, or need more information, feel free to reach out.
          </p>

          {/* Contact Information */}
          <div className="text-center mb-6">
            <p className="text-lg">Email: <a href="mailto:info@xyzorganization.com" className="text-green-300 hover:underline">info@xyzorganization.com</a></p>
            <p className="text-lg">Phone: <a href="tel:+1234567890" className="text-green-300 hover:underline">+123 456 7890</a></p>
            <p className="text-lg">Address: 123 Cricket Lane, Indore(M.P.) India</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-green-300 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-green-300 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-green-300 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-300 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p>&copy; 2024 XYZ Organization. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
