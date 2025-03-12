import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BinaryRain from '../components/BinaryRain/BinaryRain';
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch';
import PercentageContainer from '../components/PercentageContainer/PercentageContainer';
import CardContainer from '../components/CardContainer/CardContainer';
import Particles from '../components/WhiteParticles/Particles';


const Expertise = () => {
    return (
        <div>
            <BinaryRain />
            <ThemeSwitch />
            <Header />
            <div>
                <div>
                    <CardContainer />
                    <Particles />
                </div>
                <PercentageContainer />
            </div>
            <Footer />
        </div>
    );
};

export default Expertise;