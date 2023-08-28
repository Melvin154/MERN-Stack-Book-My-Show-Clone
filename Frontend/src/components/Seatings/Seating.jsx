import React, { useState } from 'react';
import './Seating.css'

function SeatBooking() {
  const seatArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrices = {
    A: 190.60,
    B: 190.60,
    C: 190.60,
    D: 190.60,
    E: 190.60,
    F: 190.60,
    G: 190.60,
    H: 190.60,
    I: 190.60,
    J: 190.60,
  };

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const totalPrice = selectedSeats.reduce((total, seatId) => {
    const seatPrice = seatPrices[seatId.charAt(0)];
    return total + seatPrice;
  }, 0).toFixed(2);

  return (
    <div className="seat-booking theatre-seat-booking">
      <div className="seat-container theatre-seat-container">
        {seatArr.map((row, rowIndex) => (
          <div key={rowIndex} className="theatre-seat-row">
            {Array.from({ length: 20 }, (_, seatIndex) => {
              const seatId = row + (seatIndex + 1);
              const isSelected = selectedSeats.includes(seatId);
              return (
                <div
                  key={seatId}
                  className={`theatre-seat-box ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSeatClick(seatId)}
                >
                  {seatId}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <p>Total Price: RS: <span id="total-price">{totalPrice}</span></p>
      <hr />
      <button className="center-button">PAY RS {totalPrice}</button>
    </div>
  );
}

export default SeatBooking;



