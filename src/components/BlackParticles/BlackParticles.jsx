import React, { useEffect, useRef } from "react";
import styles from "./BlackParticles.module.css";

const BlackParticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const particlesContainer = containerRef.current;
    if (!particlesContainer) return;

    // Clear existing particles before adding new ones
    particlesContainer.innerHTML = "";

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.classList.add(styles.particle);
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${2 + Math.random() * 3}s`;
      particlesContainer.appendChild(particle);
    }

    // Cleanup function
    return () => {
      particlesContainer.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className={styles.particles}></div>;
};

export default BlackParticles;
