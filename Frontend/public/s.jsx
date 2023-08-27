import React from "react";
import "./Seating.css";

const Seating = () => {
  let seatArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let seatContainer = document.getElementById("seats");
  let seatBookArr = [];

  function onSeatBook(seatId) {
    console.log(seatId);
    let isfindSeat = seatBookArr.findIndex((s) => s === seatId);
    console.log(isfindSeat);
    if (isfindSeat === -1) {
      seatBookArr.push(seatId);
    } else {
      let updateSeat = seatBookArr.filter((item) => item !== seatId);
      seatBookArr = updateSeat;
    }
    console.log(seatBookArr);
  }

  for (let i = 0; i < seatArr.length; i++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let j = 1; j <= 20; j++) {
      if (j % 11 === 0) {
        let gapElm = document.createElement("div");
        gapElm.className = "gap";
        row.appendChild(gapElm);
      }

      let seatsElm = document.createElement("div");
      seatsElm.setAttribute("class", "seat-box");
      seatsElm.innerText = seatArr[i] + j;
      seatsElm.onclick = onSeatBook.bind(this, seatArr[i] + j);

      row.appendChild(seatsElm);
    }

    seatContainer.appendChild(row);
  }

  return (
    <>
      <h3> First Class Rs: 190.78/- </h3>

      <div id="seats"></div>

      <div id="seats"></div>

      <div className="container">
        <div className="movie-screen">
          <span className="__text"> All Eyes This Way Please !!! </span>
          <img src="" alt="screenimg" />

          <span className="__text"> All Eyes This Way Please !!! </span>
        </div>
      </div>
    </>
  );
};

export default Seating;
