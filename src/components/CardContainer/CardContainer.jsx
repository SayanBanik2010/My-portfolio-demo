import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CardContainer.module.css'; // Scoped CSS

const CardContainer = () => {
    const cards = [
        { id: 1, img: 'icons8-c-48.png', alt: 'Skill 1' },
        { id: 2, img: 'icons8-c++-48.png', alt: 'Skill 2' },
        { id: 3, img: 'icons8-java-logo-48.png', alt: 'Skill 3' },
        { id: 4, img: 'icons8-python-48.png', alt: 'Skill 4' },
        { id: 5, img: 'icons8-html-5-48.png', alt: 'Skill 5' },
        { id: 6, img: 'icons8-css-logo-48.png', alt: 'Skill 6' },
        { id: 7, img: 'icons8-javascript-64.png', alt: 'Skill 7' },
        { id: 8, img: 'icons8-express-js-40.png', alt: 'Skill 8' },
        { id: 9, img: 'icons8-mongo-db-48.png', alt: 'Skill 9' },
        { id: 10, img: 'icons8-node-js-48.png', alt: 'Skill 10' },
        { id: 11, img: 'icons8-react-native-48.png', alt: 'Skill 11' },
        { id: 12, img: 'icons8-tailwind-css-48.png', alt: 'Skill 12' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className={styles.cardContainer}>
            <Slider {...settings} className={styles.cardSlider}>
                {cards.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <img src={card.img} alt={card.alt} />
                    </div>
                ))}
            </Slider>
            <div className={styles.particles}></div>
            <div className={styles.particles}></div>
            <div className={styles.particles}></div>
        </div>
    );
};

export default CardContainer;