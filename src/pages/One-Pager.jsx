import React from 'react'
import Cloud from '../components/Cloud/Cloud'
import Particles from '../components/WhiteParticles/Particles'
import CvCard from '../components/CVCard/CVCard'
import BinaryRain from '../components/BinaryRain/BinaryRain'
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function One_Pager() {
    return (
        <div>
            <BinaryRain />
            <ThemeSwitch />
            <Header />
            <div>
                <Cloud top={10} left={10} />
                <Cloud top={30} left={50} />
                <Cloud top={60} left={20} />
                <Particles />
                <CvCard />
            </div>
            <Footer />
        </div>
    )
}
