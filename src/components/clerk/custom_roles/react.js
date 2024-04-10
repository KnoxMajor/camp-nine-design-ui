export default `
import React, { useState, useEffect, useRef } from 'react';
import './custom_roles.css'

const CustomRoles = ({
  darkmode = false,
  title = 'Custom roles and permissions',
  subtitle = "Powerful primitives to fully customize your app's authorization story.",
  titles = ['Product Member', 'Administrator', 'Editor', 'QA Tester']
}) => {

  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titlesListRef = useRef(null);
  const titlesListWrapRef = useRef(null);
  const selectedIndicatorRef = useRef(null);
  const [targetTitleWidth, setTargetTitleWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
      setPhotoIndex(prevIndex => (prevIndex + 1) % 4)
    }, 2000);

    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    if (titlesListRef.current && titlesListWrapRef.current) {
      const titlesElements = titlesListRef.current.children;
      if (titlesElements[currentTitleIndex]) {
        const wrapWidth = titlesListWrapRef.current.offsetWidth;
        const titleElement = titlesElements[currentTitleIndex];
        const titleElementWidth = titleElement.offsetWidth;
        const titleOffset = titleElement.offsetLeft + titleElementWidth / 2;
        const translateX = -titleOffset + wrapWidth / 2;

        titlesListRef.current.style.transform = \`translateX(\${translateX}px)\`;
        setTargetTitleWidth(titleElementWidth + 10);
        setTimeout(() => {
          if (selectedIndicatorRef.current) {
            selectedIndicatorRef.current.style.width = \`\${titleElementWidth + 10}px\`;
          }
        }, 500);
      }
    }
  }, [currentTitleIndex, titles.length, targetTitleWidth]);

  return (
    <div
      className="custom_roles"
      style={{ backgroundColor: darkmode ? '#232323' : '#fff' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cr_copy_wrap">
        <svg width="0" height="0" aria-hidden="true"><defs><pattern id="wave" width="12" height="3" patternUnits="userSpaceOnUse"><path fill="none" stroke="white" stroke-opacity="0.1" d="M-6 0c3 2 6 0 6 0s3-2 6 0 6 0 6 0 3-2 6 0M-6 3c3 2 6 0 6 0s3-2 6 0 6 0 6 0 3-2 6 0"></path></pattern></defs></svg>
        <p className="cr_title" style={{ color: darkmode ? '#fff' : '#000' }}>{title}</p>
        <p className="cr_subtitle" style={{ color: darkmode ? '#9395A1' : '#000' }}>{subtitle}</p>
      </div>
      <div className="cr_profiles_wrap">
        <div className="cr_profile_grid">
          <div className="cr_profile" style={{ backgroundColor: darkmode ? '#eee' : '#fff', border: darkmode ? '1px solid #2b2b2b' : '1px solid #d9d9de' }}></div>
          <div className="cr_profile cr_profile_add_photo" style={{ backgroundColor: darkmode ? '#eee' : '#fff', border: darkmode ? '1px solid #2b2b2b' : '1px solid #d9d9de', mixBlendMode: photoIndex == 0 ? 'normal' : 'luminosity', opacity: photoIndex == 0 ? '1' : '.7', boxShadow: photoIndex == 0 ? '0 3px 5px 1px rgba(0, 0, 0, .1)' : '0 3px 5px -1px rgba(0, 0, 0, .1)' }}>
            <div className="cr_profile_w_photo">
              <img src="/assets/custom_roles/person-1@3x.webp" className="cr_profile_photo" />
              <svg class="cr_profile_svg" aria-hidden="true"><rect width="100%" height="100%" fill="url(#wave)"></rect></svg>
            </div>
          </div>
          <div className="cr_profile" style={{ backgroundColor: darkmode ? '#eee' : '#fff', border: darkmode ? '1px solid #2b2b2b' : '1px solid #d9d9de' }}></div>
          <div className="cr_profile cr_profile_add_photo" style={{ backgroundColor: darkmode ? '#eee' : '#fff', border: darkmode ? '1px solid #2b2b2b' : '1px solid #d9d9de', mixBlendMode: photoIndex == 1 ? 'normal' : 'luminosity', opacity: photoIndex == 1 ? '1' : '.7', boxShadow: photoIndex == 1 ? '0 3px 5px 1px rgba(0, 0, 0, .1)' : '0 3px 5px -1px rgba(0, 0, 0, .1)' }}>
            <div className="cr_profile_w_photo">
              <img src="/assets/custom_roles/person-2@3x.webp" className="cr_profile_photo" />
              <svg class="cr_profile_svg" aria-hidden="true"><rect width="100%" height="100%" fill="url(#wave)"></rect></svg>
            </div>
          </div>
          <div className="cr_profile" style={{ backgroundColor: darkmode ? '#eee' : '#fff', border: darkmode ? '1px solid #2b2b2b' : '1px solid #d9d9de' }}></div>
          <div className="cr_profile cr_profile_add_photo" style={{ backgroundColor: darkmode ? '#eee' : '#fff', border: darkmode ? '1px solid #2b2b2b' : '1px solid #d9d9de', mixBlendMode: photoIndex == 3 ? 'normal' : 'luminosity', opacity: photoIndex == 3 ? '1' : '.7', boxShadow: photoIndex == 3 ? '0 3px 5px 1px rgba(0, 0, 0, .1)' : '0 3px 5px -1px rgba(0, 0, 0, .1)' }}>
            <div className="cr_profile_w_photo">
              <img src="/assets/custom_roles/person-3@3x.webp" className="cr_profile_photo" />
              <svg class="cr_profile_svg" aria-hidden="true"><rect width="100%" height="100%" fill="url(#wave)"></rect></svg>
            </div>
          </div>
          <div className="cr_profile" style={{ backgroundColor: darkmode ? '#eee' : '#fff', border: darkmode ? '1px solid #2b2b2b' : '1px solid #d9d9de' }}></div>
          <div className="cr_profile cr_profile_add_photo" style={{ backgroundColor: darkmode ? '#eee' : '#fff', border: darkmode ? '1px solid #2b2b2b' : '1px solid #d9d9de', mixBlendMode: photoIndex == 2 ? 'normal' : 'luminosity', opacity: photoIndex == 2 ? '1' : '.7', boxShadow: photoIndex == 2 ? '0 3px 5px 1px rgba(0, 0, 0, .1)' : '0 3px 5px -1px rgba(0, 0, 0, .1)' }}>
            <div className="cr_profile_w_photo">
              <img src="/assets/custom_roles/person-4@3x.webp" className="cr_profile_photo" />
              <svg class="cr_profile_svg" aria-hidden="true"><rect width="100%" height="100%" fill="url(#wave)"></rect></svg>
            </div>
          </div>
          <div className="cr_profile" style={{ backgroundColor: darkmode ? '#eee' : '#fff', border: darkmode ? '1px solid #2b2b2b' : '1px solid #d9d9de' }}></div>
        </div>
      </div>
      <div className="cr_titles_list_wrap" ref={titlesListWrapRef} style={{ position: 'relative' }}>
        <div className="cr_titles_floating_rect_wrap">
          <div className="cr_titles_floating_rect" ref={selectedIndicatorRef} style={{ width: \`\${targetTitleWidth}px\` }}></div>
        </div>
        <div className="cr_titles_list" ref={titlesListRef}>
          {titles.map((title, i) =>
            <p key={i} className={\`cr_titles_title cr_titles_title_\${i}\`} style={{ color: currentTitleIndex == i ? '#232323' : 'rgb(183, 184, 194)' }}>{title}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { CustomRoles };
`
