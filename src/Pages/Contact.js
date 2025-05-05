import React from 'react'

const Contact = () => {
  return (
    <div>
    <h1>Contact Us</h1>
    <form>
      <label>Name:</label>
      <input type="text" />
      <label>Email:</label>
      <input type="email" />
      <button type="submit">Send</button>
    </form>
  </div>
  )
}

export default Contact