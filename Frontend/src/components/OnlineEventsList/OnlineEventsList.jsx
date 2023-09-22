import React from 'react'
import { useState } from 'react';
import {EVENTSDATA} from '../../eventsdata'
import { Link } from 'react-router-dom';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const OnlineEventsList = () => {
  const [events, setEvents ]= useState([...EVENTSDATA])
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
    
    
    <h3 style={{margin:"20px"}}>Online Streaming Events</h3>
   
   
    <Carousel responsive={responsive}>
   {events.length > 0 && 
    events.map((item, indx)=>{
        return (
            <div className="card" key={indx}>
                <Link to={`/events/${item.id}`}>
                    <img src={item.eventCardImg}
                        alt="MOVIEs"/></Link>
                      
                <p  style={{display:"block",textAlign:"center"}}><b>{item.eventNameMain}</b><br />{item.genremain}</p>
            </div>
        )
    })
    
    }
    </Carousel>;
  
   <br />
    
    
    
    
    </>
  )
}

export default OnlineEventsList