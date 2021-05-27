import React from 'react'
import Header from '../../components/Header/Header'
import BuyPeepo from '../../sections/BuyPeepo/BuyPeepo'
import Footer from '../../sections/Footer/Footer'
import Goal from '../../sections/Goal/Goal'
import HeaderMain from '../../sections/HeaderMain/HeaderMain'
import Peeponomics from '../../sections/Peeponomics/Peeponomics'
import RoadMap from '../../sections/RoadMap/RoadMap'

const Home = () => {
    return (
        <>
            <Header />
            <HeaderMain />
            <Goal />
            <Peeponomics />
            <RoadMap />
            <BuyPeepo />
            <Footer />
        </>
    )
}

export default Home
