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



const HomePage = () => {
  return (
    <>
    <Header/> 
    <Banner/>
    <MoviesList/>
    <StreamEvents/>
    <Search/>
    <FeedBack/>
    <Premires/>
    <OnlineEventsList/>
    
{/*    
    <FeedBack/> */}
    <Footer/>
    
    
    
    </>
  )
}

export default HomePage