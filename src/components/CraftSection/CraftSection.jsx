import React from 'react';
import styles from './CraftSection.module.css'; // Scoped CSS for the section
import CraftCard from '../CraftCard/CraftCard';// Import the CraftCard component

const CraftSection = () => {
    const cardsData = [
        {
            logo: 'todo.png',
            title: 'To-Do List',
            description: 'A simple and intuitive task management app to help you stay organized and productive.',
            technologies: ['HTML, CSS, JavaScript', 'React.js'],
            projectLink: '#',
        },
        {
            logo: 'user_enquiry.png',
            title: 'User Enquiry Form',
            description: 'A responsive form to collect user inquiries with validation and submission handling.',
            technologies: ['HTML, CSS, JavaScript', 'Node.js', 'MongoDB'],
            projectLink: '#',
        },
    ];

    return (
        <section className={styles.craftSection}>
            <div className={styles.cardContainer}>
                {cardsData.map((card, index) => (
                    <CraftCard
                        key={index}
                        logo={card.logo}
                        title={card.title}
                        description={card.description}
                        technologies={card.technologies}
                        projectLink={card.projectLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default CraftSection;