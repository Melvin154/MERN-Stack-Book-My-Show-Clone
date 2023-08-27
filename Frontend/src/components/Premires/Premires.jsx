import React from "react";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PREMIERESDATA } from '../../premiresdata'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Premires = () => {
  const [premires, setPremires] = useState([...PREMIERESDATA]);
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

      {/*Premires*/}
      <div className="premire" style={{ backgroundColor: "rgb(43,49,72)" }}>


        {/*Premire Images*/}
        <div className="premire-image" style={{ padding: "15px" }}>
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt="premire"
            width="100%"
          />
        </div>


        {/*Premire Title*/}
        <div className="premire-title">
          <h3>Premires</h3>
          <h6>Brand New Releases Every Friday</h6>
        </div>




        <Carousel responsive={responsive} >
          {premires.length > 0 &&
            premires.map((item, indx) => {
              return (
                <div className="card1" key={indx} style={{backgroundColor:"white",color:"Black"}}>
                  <Link to={`/premire/${item.id}`}>
                    <img src={item.movieCardImg}
                      alt="PREMIRE MOVIE" style={{ width: "100%" }} /></Link>

                  <p style={{ display: "block", textAlign: "center" }}><b>{item.movieNamemain}</b><br />{item.Genre}</p>
                </div>
              )
            })

          }
        </Carousel>


      </div>

    </>
  )
}

export default Premires
