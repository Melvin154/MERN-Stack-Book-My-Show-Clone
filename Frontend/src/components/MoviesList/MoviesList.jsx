import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MOVIESDATA } from '../../moviesdata'



import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const MoviesList = () => {
  const [movies, setMovies] = useState([...MOVIESDATA]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
    <>


      <h3 className='movies'>
        <b>
          Recommended Movies
        </b>
      </h3>




      <Carousel responsive={responsive}>


        {movies.length > 0 &&
          movies.map((item, indx) => {
            return (
              <div className="card1" key={indx}>
                <Link to={`/movies/${item.id}`}>
                  <img src={item.movieCardImg}
                    alt="MOVIE" style={{ width: "100%" }} /></Link>

                <p style={{ display: "block", textAlign: "center" }}><b>{item.movieNamemain}</b><br />{item.Genre}</p>
              </div>
            )
          })

        }

      </Carousel>;




    </>








  )

}

export default MoviesList