import React from 'react';

const App: React.FC = () => {
  const handleHackerPrank = () => {
    window.open('/hacker-prank', '_blank');
  };

  const handleRotationPrank = () => {
    window.open('/rotation-prank', '_blank');
  };

  return (
    <div className="app">
      <header>
        <h1>Prank Demo</h1>
        <p>Click the buttons below to try out different pranks in new tabs!</p>
      </header>

      <main>
        <div className="prank-buttons">
          <button onClick={handleHackerPrank} className="prank-button hacker">
            Try Hacker Prank
          </button>
          <button onClick={handleRotationPrank} className="prank-button rotation">
            Try Rotation Prank
          </button>
        </div>

        <div className="content">
          <h2>Welcome to the Prank Demo</h2>
          <p>
            This is a demo page showcasing different pranks you can use in your web applications.
            Click the buttons above to see them in action in new tabs!
          </p>

          <div className="section">
            <h3>About the Prank Package</h3>
            <p>
              This package provides a collection of fun pranks that you can use to add some
              entertainment to your web applications. Each prank will open in a new tab.
            </p>
            <ul>
              <li>Hacker Prank: Transforms text and adds a Matrix-style animation</li>
              <li>Rotation Prank: Adds a spinning animation to the page</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App; 