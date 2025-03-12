import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BinaryRain from '../components/BinaryRain/BinaryRain';
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch';
import VerifiedSection from '../components/VerifiedSection/VerifiedSection';
import Particles from '../components/WhiteParticles/Particles';



const Verified = () => {
    return (
        <div>
            <BinaryRain />
            <ThemeSwitch />
            <Header />
            <div>
                <VerifiedSection/>
                <Particles/>
            </div>
            <Footer />
        </div>
    );
};

export default Verified;