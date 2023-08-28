import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Search from '../components/Search/Search'
import Premires from '../components/Premires/Premires'
import Banner from '../components/Banner/Banner'
import MoviesList from '../components/MoviesList/MoviesList'
import StreamEvents from '../components/StreamsEvents/StreamEvents'

import OnlineEventsList from "../components/OnlineEventsList/OnlineEventsList"
import FeedBack from '../components/FeedBack/FeedBack'
import SeatBooking from '../components/Seatings/Seating'



const HomePage = () => {
  return (
    <>
    <Header/> 
        <Banner/>
        <FeedBack/>
    <MoviesList/>
    <StreamEvents/>
    <Premires/>
    <OnlineEventsList/>
    <SeatBooking/>
    
   
    <Footer/>
    
    
    
    </>
  )
}

export default HomePage