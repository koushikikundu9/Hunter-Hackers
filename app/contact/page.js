'use client'
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    email: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Form Submitted:', formData);

  try {
    const response = await fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log("Server response:", result);
    alert("Form Submitted");

  } catch (error) {
    console.error("Error submitting form:", error);
  }
};


  return (
    <div className='bg-gradient-to-r from-gray-300 via-blue-200 to-blue-400 pb-[100px]'>
      <h1 className="flex items-center justify-center text-2xl font-bold text-black-600 py-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className='bg-gradient-to-b from-blue-500 to-purple-500 items-center justify-center max-w-md mx-auto p-6 rounded-2xl shadow-md space-y-6'>
        <div className="items-center justify-center">
          <label htmlFor="name" className=" px-4 py-2 block text-sm text-lg text-black-700 mb-1">Name</label>
          <input
            type="text"
            className="px-8 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="items-center justify-center">
          <label htmlFor="email" className="px-4 py-2 block text-sm font-medium text-black-700 mb-1">Email address</label>
          <input
            type="email"
            className="px-8 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="items-center justify-center">
          <label htmlFor="message" className="px-4 py-2 block text-sm font-medium text-black-700 mb-1">Message</label>
          <textarea
            className=" px-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="message"
            rows="3"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className='flex gap-20 '>
        <button type="submit" className="border border-blue-600 text-sm  bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300" onClick={() => setFormData({ name: '', message: '', email: '' })}>Submit</button>
        <button type="button" className="border border-grey-600 text-sm  bg-white-400 text-black px-4 py-2 rounded-lg hover:bg-grey-900 transition duration-300" onClick={() => setFormData({ name: '', message: '', email: '' })}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
