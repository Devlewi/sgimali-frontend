import React, { useState, useEffect } from 'react';

const ScrollingText = (texte:string) => {
  const [marginTop, setMarginTop] = useState(80);
    

  useEffect(() => {
    const handleResize = () => {
      // Change the marginTop based on screen width
      if (window.innerWidth <= 991) {
        setMarginTop(60);
      } else {
        setMarginTop(80);
      }
    };

    // Attach the resize listener
    window.addEventListener('resize', handleResize);

    // Trigger resize event on mount
    handleResize();

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setMarginTop(60);
      } else {
        setMarginTop(80);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="row" style={{ marginTop }}>
      <div
        className="scrollingText"
        style={{
          padding: 10,
          backgroundColor: 'blue',
          color: 'white',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >

        <span
          style={{
            display: 'inline-block',
            animation: 'scroll-text 20s linear infinite',
          }}
        >
          SVOC 2 395 0.00% &nbsp;&nbsp; UNLC 7 030 0.00% &nbsp;&nbsp; SIVC 800
          0.00% &nbsp;&nbsp; CABC 1 155 0.00% &nbsp;&nbsp; ABJC 1 575 -1.25% CB
        </span>
      </div>
      <style jsx>{`
        @keyframes scroll-text {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;
