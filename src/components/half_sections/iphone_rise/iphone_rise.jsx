import React, { useState, useEffect } from 'react';
import './iphone_rise.css';

const IphoneRise = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(!animate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="iphone_rise">
      <div className="container">
        <div className={`iphone_container ${animate ? 'animate' : ''}`}>
          <img className="iphone" src="/assets/iphone_rise/iphone.png" />
          <img className="screen" src="/assets/iphone_rise/screen.png" />
        </div>
        <div className="radial-gradient"></div>
      </div>
    </div>
  );
};

export { IphoneRise };
