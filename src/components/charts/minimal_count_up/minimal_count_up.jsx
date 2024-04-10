import React, { useState, useEffect, useRef } from 'react';
import './minimal_count_up.css'

const MinimalCountUp = ({
  title = "New Detections",
  number = 1492,
  limit = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [counted, setCounted] = useState(0);

  useEffect(() => {
    setCount(0);
    setCount(number <= 100 ? 0 : number - 100)
    let i = number <= 100 ? 0 : number - 100;
    const interval = setInterval(() => {
      if (i < number) {
        setCount((currentCount) => currentCount + 1);
        i += 1;
      } else {
        clearInterval(interval);
      }
    }, 0);

    return () => clearInterval(interval);
  }, [number]);

  useEffect(() => {
    setCounted(0);

    const scaledNumber = ((number - 0) / (limit - 0)) * (50 - 0) + 0;
    const countLimit = Math.round(scaledNumber);
    const easeOutQuad = (t) => t * (2 - t);

    let i = 0;
    const interval = setInterval(() => {
      if (i < countLimit) {
        const progress = i / countLimit; // Progress ratio (0 to 1)
        const easedProgress = easeOutQuad(progress); // Apply easing function
        const easedValue = easedProgress * countLimit; // Scale eased progress

        setCounted(Math.round(easedValue)); // Update state with eased value (rounded)
        i += 1;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [number, limit, setCounted]);

  return (
    <div className="mcu_wrap">
      <div className="mcu_txt_wrap">
        <p className="mcu_num">
          {count}
        </p>
        <p className="mcu_title">
          {title}
        </p>
      </div>
      <div className="mcu_line_chart_wrap">
        <div className="mcu_line_chart">
          {Array.from({ length: 50 }, (_, index) => index).map((line, i) =>
            <div className="mcu_line" style={{ height: `${0.07 * i * i + 6}px` }}></div>
          )}
        </div>
      </div>
      <div className="mcu_line_chart_wrap">
        <div className="mcu_line_chart">
          {Array.from({ length: 50 }, (_, index) => index).map((line, i) => {
            return (
              <div>
                <div className={`mcu_line ${i <= counted ? 'mcu_line_counted' : ''}`} style={{ height: `${0.07 * i * i + 6}px` }}>
                  <div className="mcu_line indicator" style={{ display: i == counted ? 'block' : 'none', height: `${0.07 * i * i + 20}px`, bottom: '14px' }}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export { MinimalCountUp };
