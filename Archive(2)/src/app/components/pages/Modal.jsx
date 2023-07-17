import { useState } from 'react'

const Modal = () => {
  const localFunc2 = () => {
    let closeButton = document.querySelector('.close-button')
    closeButton.parentNode.style.display = 'none'
  }
  return (
    <div className="submit-order">
      <span className="close-button" onClick={localFunc2}>
        X
      </span>
      <form type="submit">
        <input
          type="number"
          name=""
          id="order-card"
          placeholder="Enter last 8 digits of Card"
          required
        />
        <input type="number" name="" id="order-cvv" placeholder="Enter cvv" />
        <input
          type="datetime"
          name=""
          id="card-expiry"
          placeholder="enter expiry date of card"
          required
        />
        <input
          type="text"
          name=""
          id="order-zip"
          placeholder="Enter Postal Zip Code"
          required
        />
        <input
          type="number"
          name=""
          id="order-phone"
          placeholder="Phone Number"
          required
        />
        <div className="order-buttons">
          <button type="submit" className="finish-order">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default Modal
