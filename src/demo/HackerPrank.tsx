import React, { useEffect } from 'react';
import styles from './demos.module.css';

const HackerPrank: React.FC = () => {
  useEffect(() => {
    // Dynamically import the script
    import('../pranks/hacker').then(() => {
      console.log('Hacker script loaded');
    }).catch(error => {
      console.error('Failed to load hacker script:', error);
    });

    // Cleanup function to handle unmounting
    return () => {
      // Add any cleanup code here if needed
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="hacker-page">
      <div className={styles.demoPage}>
      <h1 className={styles.title}>Wait a few seconds</h1>
      
      <div className={styles.content}>
        <div className={styles.imageGrid}>
          <div className={styles.placeholderImage}>
            <span>Image 1</span>
          </div>
          <div className={styles.placeholderImage}>
            <span>Image 2</span>
          </div>
          <div className={styles.placeholderImage}>
            <span>Image 3</span>
          </div>
        </div>

        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <p className={styles.paragraph}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    </div>
  );
};

export default HackerPrank; 