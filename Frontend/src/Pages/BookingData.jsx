import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "./BookingData.css";
import Footer from "../components/Footer/Footer"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";

import { BOOKINGSDATA } from "../bookingsdata";
import { MOVIESDATA } from "../moviesdata";

import Seating from '../components/Seatings/Seating'

//Rough Work

const BookingData = () => {
  const paramsId = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const [bookingDetails, setBookingDetails] = useState([]                                                                                                                                                                   );

  //Rough Work


  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    let findMovie = MOVIESDATA.find((item) => item.id == paramsId.id);
    let findBookings = BOOKINGSDATA.filter((theatre) => {
      return theatre.movieIdName == findMovie.moveparam;
    });
    console.log(findBookings);
    setMovieDetails(findMovie);
    setBookingDetails(findBookings);
  }, []);





  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };










  return (
    isLoad && (
      <>
        <Header />












        {/*Movie Name*/}
        <div className="movie-name">
          <h2>
            {movieDetails.movieName} - {movieDetails.languages}
          </h2>
        </div>




 {/*Calendar*/}
 <div className="movie-filter">
          <Carousel
            responsive={responsive}
            className="movie-dates"
            arrows={true}
          >
            <div className="dates"><a href="#" style={{color:"black",textDecoration:"none"}}>AUGUST 11</a></div>
            <div className="dates"><a href="#" style={{color:"black",textDecoration:"none"}}>AUGUST 12</a></div>
            <div className="dates"><a href="#" style={{color:"black",textDecoration:"none"}}>AUGUST 13</a></div>
            <div className="dates"><a href="#" style={{color:"black",textDecoration:"none"}}>AUGUST 14</a></div>
            <div className="dates"><a href="#" style={{color:"black",textDecoration:"none"}}>AUGUST 15</a></div>
            <div className="dates"><a href="#" style={{color:"black",textDecoration:"none"}}>AUGUST 16</a></div>
            <div className="dates"><a href="#" style={{color:"black",textDecoration:"none"}}>AUGUST 17</a></div>
          </Carousel>
        </div>



 {/*Seats Check*/}
 <div className="container-fluid seats-check">
          <div className="container book-container text-center">
            <div
              className="row align-items-center"
              style={{
                backgroundColor: "whitesmoke",
                color: "black",
                margin: "10px",
              }}
            >
              <div className="col" style={{ color: "green" }}>
                &#11044; Available
              </div>
              <div className="col" style={{ color: "orange" }}>
                &#11044; Fast Filling
              </div>
              <div className="col" style={{ color: "red" }}>
                &#11044; Subtitle Language
              </div>
            </div>
          </div>
        </div>













      {/*Booking Details*/}
        <div className="book-show-container container " style={{border:"5px solid",marginTop:"15px"}}>
          
          <div className="book-row row">
            {bookingDetails.map((theatreItem, indx) => {
              return (
                <>
                  <div className="col-4 book-col " key={indx}>
                    <strong>
                      <div className="theatre-name">
                      <a href="#"style={{textDecoration:"none"}} >{theatreItem.theatrename}</a> <a href={theatreItem.location} style={{color:"red",textDecoration:"none"}}>&#9432;info</a> <br/>
                      {theatreItem.theatreLocation}
                      </div>
                    </strong>
                  </div>

                  


                  {theatreItem.ScreenData.map((screen, index) => {
                    return (
                      <>
                        <div className="col-3 book-col" key={index}>
                          Screen : {screen.ScreenNo}
                         

<Link to='/seating'>
                          <button className="btn-sm btn-outline-success show-btn">{screen.showTime}<br/>
                          {screen.showDts}
</button>

</Link>


                        </div>
                      </>
                    );
                  })}
                </>
              );
            })}

            
          </div>
        </div>





{/*BreadCrumbs*/}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to="/">HomePage</Link></li>
    <li class="breadcrumb-item"><Link to="/movies">Movies</Link></li>
  </ol>
</nav>


<Footer/>

      </>
    )
  );
};

export default BookingData;
