import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-start gap-2 p-4">
      <h1 className="text-xl font-bold mb-2">Contact Us</h1>
      <form className="flex flex-col gap-2 w-full max-w-sm">
        <label>Name:</label>
        <input type="text" className="border p-2 rounded" />
        <label>Email:</label>
        <input type="email" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;

