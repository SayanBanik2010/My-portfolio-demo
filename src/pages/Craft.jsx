import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BinaryRain from '../components/BinaryRain/BinaryRain';
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch';
import Thunder from '../components/Thunder/Thunder';
import Cloud from '../components/Cloud/Cloud';
import Particles from '../components/WhiteParticles/Particles';
import CraftSection from '../components/CraftSection/CraftSection';



const Craft = () => {
    return (
        <div>
            <BinaryRain />
            <ThemeSwitch />
            <Header />
            <div>
                <Thunder/>
                <Particles/>
                <CraftSection/>
                <Cloud top={10} left={10} />
                <Cloud top={30} left={50} />
                <Cloud top={60} left={20} />
            </div>
            <Footer />
        </div>
    );
};

export default Craft;