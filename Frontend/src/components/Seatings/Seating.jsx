import React, { useState } from 'react';
import './Seating.css'
import Screen from '../../assets/main-images/screen-thumb.png'

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
    const seatNumber = seatIndex + 1;
    const seatId = row + seatNumber;
    const isSelected = selectedSeats.includes(seatId);
    const isGap = seatNumber % 11 === -1; // Check for a gap every 10 seats
    return (
      <>
        <div
          key={seatId}
          className={`theatre-seat-box ${isSelected ? 'selected' : ''} ${isGap ? 'gap' : ''}`}
          onClick={() => handleSeatClick(seatId)}
        >
          {isGap ? '' : seatId}
        </div>
      </>
    );
  })}
</div>


        ))}
      </div>

      <div class="container">
    <div class="movie-screen">
        
        <img src={Screen} alt='Screen'/></div>

</div>


      <p className='price'>Total Price: RS: <span id="total-price">{totalPrice}</span></p>
      <p className='price'>Your Selected Seat No is : <span id="seat-number">{selectedSeats}</span></p>
      <hr />
      <button className="center-button">PAY RS {totalPrice}</button>
      






    </div>
  );
}

export default SeatBooking;



