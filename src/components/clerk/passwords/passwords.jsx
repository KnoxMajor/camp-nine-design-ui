import React, { useState, useEffect } from 'react';
import './passwords.css'

const Passwords = ({
  title = 'Passwords',
  subtitle = 'Simple and secure password authentication, complete with breach detection and recovery options.',
  accentColor = '#5DE3FF',
}) => {

  const [isHovered, setIsHovered] = useState(false);
  const [rotateLock, setRotateLock] = useState(false);
  const [startDots, setStartDots] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartDots(isHovered ? true : false)
    }, isHovered ? 1000 : 0);
    const timer2 = setTimeout(() => {
      setRotateLock(isHovered ? true : false)
    }, isHovered ? 2100 : 0);
    () => clearTimeout(timer);
    return () => clearTimeout(timer2);
  }, [isHovered]);

  return (
    <div
      className="passwords"
      style={{ backgroundColor: '#212126' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div class='pass_lock_wrap' style={{ transform: isHovered ? 'translateY(-2rem)' : 'translateY(0rem)' }}>
        <div class="pass_lock_bg">
          <div class="pass_lock_otr">
            <div class="pass_lock">
              <div class="pass_lock_inner_detail"></div>
              <div class="pass_svg_wrap" style={{ transform: rotateLock ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                <svg class="pass_svg" width="8" height="36" viewBox="0 0 8 36" fill="#000" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V19.5858C0 19.851 0.105357 20.1054 0.292893 20.2929L3.29289 23.2929C3.68342 23.6834 3.68342 24.3166 3.29289 24.7071L0.292893 27.7071C0.105357 27.8946 0 28.149 0 28.4142V33C0 34.6569 1.34315 36 3 36H5C6.65685 36 8 34.6569 8 33V16.4142C8 16.149 7.89464 15.8946 7.70711 15.7071L4.70711 12.7071C4.31658 12.3166 4.31658 11.6834 4.70711 11.2929L7.70711 8.29289C7.89464 8.10536 8 7.851 8 7.58579V3C8 1.34315 6.65685 0 5 0H3Z"></path></svg>
              </div>
            </div>
          </div>
          <div class="pass_passcode_outer" style={{ transform: isHovered ? 'translateY(1rem)' : 'translateY(0rem)' }}>
            <div class="pass_passcode_wrap" style={{ border: isHovered ? `1px solid ${accentColor}` : '', boxShadow: isHovered ? 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(58, 212, 253, 0.1) 0px 0px 6px 3px' : '' }}>
              {/* Empty App Icons */}
              {Array.from({ length: 10 }, (_, index) => index).map((icon, i) =>
                <div className={`pass_password_dot ${startDots ? 'pass_password_dot_in' : 'pass_password_dot_out'}`} style={{ transitionDelay: startDots ? `${i}00ms` : '0ms', backgroundColor: accentColor }}></div>
              )}
            </div>
          </div>
          <div class="pass_svg_bg_wrap">
            <div class="pass_svg_bg_wrap_gradient"></div>
            <svg width="317" height="214" viewBox="0 0 317 214" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6502 2.38322L2.30334 22.0051C0.827423 23.502 0 25.5197 0 27.6219L0 214L317 214L317 27.6219C317 25.5197 316.173 23.502 314.697 22.0051L295.35 2.38322C293.846 0.858434 291.794 0 289.653 0L27.3468 0C25.2055 0 23.1536 0.858435 21.6502 2.38322Z" fill="#2B2B30" stroke="white" stroke-opacity="0.04"></path></svg>
          </div>
        </div>
      </div>
      <div className="pass_bottom_bg_gradient"></div>
      <div className="pass_bottom_caption_wrap" style={{ backgroundImage: "linear-gradient(to top, #212126, transparent)", zIndex: '100' }}>
        <p className="pass_bottom_title" style={{ color: '#fff' }}>{title}</p>
        <p className="pass_bottom_subtitle" style={{ color: '#9395A1' }}>{subtitle}</p>
      </div>
    </div>
  );
};

export { Passwords };
