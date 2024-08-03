import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from '../styles/title.module.css';

export default function Title() {
  return (
    <>
    <div className={styles.container}>
      <header className={styles.spacing}>
          <Typewriter
            onInit={(typewriter) => {
            typewriter.typeString('Welcome to Timebox!')
            .pauseFor(2500)
            .deleteAll()
            typewriter.typeString('Start Your Productivity Below')
            .pauseFor(2500)
            .deleteAll()
            typewriter.typeString('Timebox')
            .start();
            }}
          />
      </header>
    </div>
    </>
  );
}