import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BinaryRain from '../components/BinaryRain/BinaryRain';
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch';
import Cloud from '../components/Cloud/Cloud';
import Particles from '../components/WhiteParticles/Particles';
import LinkupForm from '../components/LinkUp/LinkUp';




const LinkUp = () => {
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
                <LinkupForm />
            </div>
            <Footer />
        </div>
    );
};

export default LinkUp;