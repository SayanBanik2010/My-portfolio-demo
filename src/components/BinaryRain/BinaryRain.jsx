import React, { useEffect, useRef } from "react";
import styles from "./BinaryRain.module.css";

const BinaryRain = () => {
  const binaryContainerRef = useRef(null);

  useEffect(() => {
    const binaryContainer = binaryContainerRef.current;

    // Clear previous spans if they exist
    binaryContainer.innerHTML = "";

    // Create binary rain effect
    const createBinaryRain = () => {
      for (let i = 0; i < 50; i++) {
        let span = document.createElement("span");
        span.textContent = Math.random() > 0.5 ? "0" : "1";
        span.style.left = `${Math.random() * 100}vw`;
        span.style.animationDuration = `${2 + Math.random() * 3}s`;
        binaryContainer.appendChild(span);
      }
    };

    createBinaryRain();

    // Cleanup function
    return () => {
      binaryContainer.innerHTML = "";
    };
  }, []);

  return <div ref={binaryContainerRef} className={styles.binaryRain}></div>;
};

export default BinaryRain;
