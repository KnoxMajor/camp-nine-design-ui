export default `

import React, { useState } from 'react';

const OneTimeCode = () => {

  // TODO make dark mode option
  // TODO extrapolate out css
  // TODO maybe allow resize?

  const [isHovered, setIsHovered] = useState(false);
  const appIcons = [
    {
      icon: <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" class="size-10"><g filter="url(#email-sms-icon-shadow)"><path fill="#5E5F6E" d="m31.661 28.642-1.576 2.465c-.126.197-.266.388-.465.509-1.796 1.084-7.63.18-14.523-6.713-7.302-7.303-7.883-13.416-6.5-14.799l2.761-1.765a2.152 2.152 0 0 1 2.68.291l2.119 2.118c.714.714.835 1.83.29 2.68l-1.18 1.847c-.387.607-.657 1.29-.451 1.98.373 1.253 1.406 3.24 3.047 4.882a12.282 12.282 0 0 0 3.656 2.515c1.425.633 2.997.214 4.311-.626l.742-.474a2.151 2.151 0 0 1 2.68.291l2.118 2.119c.714.714.835 1.829.291 2.68Z"></path><path fill="url(#paint0_linear_5116_3351)" fill-opacity=".2" d="m31.661 28.642-1.576 2.465c-.126.197-.266.388-.465.509-1.796 1.084-7.63.18-14.523-6.713-7.302-7.303-7.883-13.416-6.5-14.799l2.761-1.765a2.152 2.152 0 0 1 2.68.291l2.119 2.118c.714.714.835 1.83.29 2.68l-1.18 1.847c-.387.607-.657 1.29-.451 1.98.373 1.253 1.406 3.24 3.047 4.882a12.282 12.282 0 0 0 3.656 2.515c1.425.633 2.997.214 4.311-.626l.742-.474a2.151 2.151 0 0 1 2.68.291l2.118 2.119c.714.714.835 1.829.291 2.68Z"></path></g><defs><linearGradient id="paint0_linear_5116_3351" x1="20" x2="20" y1="9" y2="31" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><filter id="email-sms-icon-shadow" width="30" height="30" x="5" y="6" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5116_3351"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_5116_3351" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"></feColorMatrix><feBlend in2="shape" result="effect2_innerShadow_5116_3351"></feBlend></filter></defs></svg>,
      title: 'Phone',
    },
    {
      icon: <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" class="size-10"><g fill-rule="evenodd" clip-rule="evenodd" filter="url(#email-sms-icon-shadow)"><path fill="#5E5F6E" d="M20 32c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12Zm6-12c0 2.761-2.686 5-6 5a7.2 7.2 0 0 1-1.163-.094 1.227 1.227 0 0 0-.79.14c-.613.34-1.308.571-1.983.72-.82.182-1.314-.759-.895-1.485.04-.07.08-.14.119-.212.21-.382.099-.846-.184-1.178C14.409 22.075 14 21.077 14 20c0-2.761 2.686-5 6-5s6 2.239 6 5Z"></path><path fill="url(#paint0_linear_5116_3354)" fill-opacity=".2" d="M20 32c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12Zm6-12c0 2.761-2.686 5-6 5a7.2 7.2 0 0 1-1.163-.094 1.227 1.227 0 0 0-.79.14c-.613.34-1.308.571-1.983.72-.82.182-1.314-.759-.895-1.485.04-.07.08-.14.119-.212.21-.382.099-.846-.184-1.178C14.409 22.075 14 21.077 14 20c0-2.761 2.686-5 6-5s6 2.239 6 5Z"></path></g><defs><linearGradient id="paint0_linear_5116_3354" x1="20" x2="20" y1="9" y2="31" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient></defs></svg>,
      title: 'SMS',
      notifNum: '1',
    },
    {
      icon: <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" class="size-10"><g filter="url(#email-sms-icon-shadow)"><path fill="#5E5F6E" d="M19.083 13.241a.768.768 0 0 0-.179-.523c-.594-.657-2.828-2.545-8.984-2.718-.506-.014-.92.429-.92.973v16.746c0 .544.414.984.92.998 3.126.088 5.241.617 6.643 1.204.846.354 2.52-.54 2.52-1.515V13.24Z"></path><path fill="url(#paint0_linear_5116_3361)" fill-opacity=".2" d="M19.083 13.241a.768.768 0 0 0-.179-.523c-.594-.657-2.828-2.545-8.984-2.718-.506-.014-.92.429-.92.973v16.746c0 .544.414.984.92.998 3.126.088 5.241.617 6.643 1.204.846.354 2.52-.54 2.52-1.515V13.24Z"></path><path fill="#5E5F6E" d="M20.917 13.241c0-.194.053-.383.179-.523.594-.657 2.828-2.545 8.984-2.718.506-.014.92.429.92.973v16.746c0 .544-.414.984-.92.998-3.126.088-5.241.617-6.643 1.204-.846.354-2.52-.54-2.52-1.515V13.24Z"></path><path fill="url(#paint1_linear_5116_3361)" fill-opacity=".2" d="M20.917 13.241c0-.194.053-.383.179-.523.594-.657 2.828-2.545 8.984-2.718.506-.014.92.429.92.973v16.746c0 .544-.414.984-.92.998-3.126.088-5.241.617-6.643 1.204-.846.354-2.52-.54-2.52-1.515V13.24Z"></path></g><defs><linearGradient id="paint0_linear_5116_3361" x1="20" x2="20" y1="10" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_5116_3361" x1="20" x2="20" y1="10" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient></defs></svg>,
      title: 'Books',
    },
    {
      icon: <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" class="size-10"><g filter="url(#email-sms-icon-shadow)"><path fill="#5E5F6E" fill-rule="evenodd" d="M14 30a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z" clip-rule="evenodd"></path><path fill="url(#paint0_linear_5116_3364)" fill-opacity=".2" fill-rule="evenodd" d="M14 30a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z" clip-rule="evenodd"></path><path fill="#5E5F6E" d="M8 13a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V13Z"></path><path fill="url(#paint1_linear_5116_3364)" fill-opacity=".2" d="M8 13a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V13Z"></path></g><defs><linearGradient id="paint0_linear_5116_3364" x1="20" x2="20" y1="11" y2="31" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_5116_3364" x1="20" x2="20" y1="11" y2="31" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient></defs></svg>,
      title: 'TV',
    },
  ]

  return (
    <div
      style={{ width: '400px', height: '260px', borderRadius: '16px', backgroundColor: '#212126', position: 'relative', borderTopColor: '#d9d9de', boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.024) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.024) 0px 0px 0px 1px inset' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ height: '224px', width: '264px', borderTopLeftRadius: '44px', borderTopRightRadius: '44px', backgroundColor: 'rgb(47, 48, 55)', backgroundImage: 'linear-gradient(#FFFFFF0D 0%, #FFFFFF00 67.19%)', position: 'relative', borderTopColor: '#d9d9de', borderTopWidth: '1px', boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.024) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.024) 0px 0px 0px 1px inset', transform: \`translateX(25%) \${isHovered ? 'translateY(-10px)' : 'translateY(20px)'}\`, transition: 'transform 0.2s ease-in-out', padding: '6px' }}>
        <div style={{ paddingTop: '10px', paddingLeft: '20px', paddingRight: '20px', height: '220px', width: '252px', borderTopLeftRadius: '38px', borderTopRightRadius: '38px', backgroundColor: 'rgba(19, 19, 22, 0.5)', position: 'relative', borderTopColor: '#d9d9de', borderTopWidth: '1px', boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px', overflow: 'hidden' }}>
          {/* Notification */}
          <div style={{ padding: '8px', height: '56px', width: '236px', backgroundColor: 'rgb(47, 48, 55)', boxShadow: 'rgba(19, 19, 22, 0.6) 0px 6px 12px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset', display: 'flex', columnGap: '12px', position: 'absolute', left: '8px', top: '45px', borderRadius: '16px', zIndex: '100', filter: isHovered ? 'blur(0px)' : 'blur(2px)', opacity: isHovered ? '1' : '.5', transform: isHovered ? 'matrix(1, 0, 0, 1, 0, 0)' : 'matrix(0.9, 0, 0, 0.9, 0, -104)', transformOrigin: '118px 0px', transition: 'transform 0.2s ease-in-out', alignItems: 'center' }}>
            <div style={{ height: '40px', width: '40px', backgroundColor: 'rgb(66, 67, 77)', backgroundImage: 'radial-gradient(circle at center top, rgba(114, 233, 255, 0.2), rgba(114, 233, 255, 0))', borderRadius: '10px', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset' }}>
              <svg style={{ height: '40px', width: '40px' }} viewBox="0 0 40 40" fill="none" aria-hidden="true" ><g filter="url(#filter0_di_5116_3367)"><path fill="#5DE3FF" fill-rule="evenodd" d="M20 32c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12Zm6-12c0 2.761-2.686 5-6 5a7.2 7.2 0 0 1-1.163-.094 1.227 1.227 0 0 0-.79.14c-.613.34-1.308.571-1.983.72-.82.182-1.314-.759-.895-1.485.04-.07.08-.14.119-.212.21-.382.099-.846-.184-1.178C14.409 22.075 14 21.077 14 20c0-2.761 2.686-5 6-5s6 2.239 6 5Z" clip-rule="evenodd"></path></g><defs><filter id="filter0_di_5116_3367" width="42" height="42" x="-1" y="-1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_5116_3367"></feMorphology><feOffset></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.419608 0 0 0 0 0.905882 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5116_3367"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_5116_3367" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix><feBlend in2="shape" result="effect2_innerShadow_5116_3367"></feBlend></filter></defs></svg>
            </div>
            <div style={{ marginTop: '0px' }}>
              <p style={{ color: 'rgb(93, 227, 255)', fontSize: '10px', fontWeight: 'bold', lineHeight: '16px', margin: '0px' }}>Security alert</p>
              <p style={{ color: 'rgb(217, 217, 222)', fontSize: '11px', lineHeight: '16px', margin: '0px' }}>Your security passcode is 76...</p>
            </div>
          </div>
          {/* Top Lock Icon */}
          <div style={{ margin: '0px auto', height: '24px', width: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '99999px', borderBottomColor: 'rgb(217, 217, 222)', backgroundColor: isHovered ? 'rgb(93, 227, 255)' : 'rgb(19, 19, 22)', boxShadow: isHovered ? 'rgba(107, 231, 255, 0.3) 0px 0px 8px 1px, rgba(255, 255, 255, 0.2) 0px 1px inset' : 'rgba(255, 255, 255, 0.05) 0px 1px 0px 0px', transition: 'transform 0.2s ease-in-out' }}>
            {isHovered ?
              <svg viewBox="0 0 16 16" style={{ height: '16px', width: '16px' }} aria-hidden="true"><path fill="#fff" fill-opacity=".4" d="M3 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" opacity="1"></path><path fill="#fff" fill-opacity=".4" fill-rule="evenodd" d="M8 4a2.5 2.5 0 0 0-2.5 2.5V10h-1V6.5a3.5 3.5 0 1 1 7 0V10h-1V6.5A2.5 2.5 0 0 0 8 4Z" clip-rule="evenodd" opacity="1"></path><path d="M3 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" fill="rgba(4, 48, 72, 1)"></path><path fill-rule="evenodd" d="M8 3a2.5 2.5 0 0 0-2.5 2.5V9h-1V5.5a3.5 3.5 0 1 1 7 0V9h-1V5.5A2.5 2.5 0 0 0 8 3Z" clip-rule="evenodd" fill="rgba(4, 48, 72, 1)"></path></svg>
              :
              <svg viewBox="0 0 16 16" style={{ height: '16px', width: '16px' }} aria-hidden="true"><path fill="#fff" fill-opacity=".4" d="M3 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" opacity="0"></path><path fill="#fff" fill-opacity=".4" fill-rule="evenodd" d="M8 4a2.5 2.5 0 0 0-2.5 2.5V10h-1V6.5a3.5 3.5 0 1 1 7 0V10h-1V6.5A2.5 2.5 0 0 0 8 4Z" clip-rule="evenodd" opacity="0"></path><path d="M3 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" fill="rgba(116, 118, 134, 1)"></path><path fill-rule="evenodd" d="M8 3a2.5 2.5 0 0 0-2.5 2.5V9h-1V5.5a3.5 3.5 0 1 1 7 0V9h-1V5.5A2.5 2.5 0 0 0 8 3Z" clip-rule="evenodd" fill="rgba(116, 118, 134, 1)"></path></svg>
            }
          </div>
          {/* App Icons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', columnGap: '8px', rowGap: '16px', marginTop: '24px' }}>
            {appIcons.map((icon) =>
              <div style={{ marginTop: '0px', position: 'relative' }}>
                {icon.notifNum &&
                  <p style={{ position: 'absolute', top: '-8px', left: '-8px', zIndex: '10', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', fontSize: '10px', color: 'rgb(19, 19, 22)', backgroundColor: isHovered ? 'rgb(93, 227, 255)' : 'rgba(255, 255, 255, 0.25)', boxShadow: isHovered ? 'rgba(107, 231, 255, 0.3) 0px 0px 8px 1px, rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset' : 'rgba(107, 231, 255, 0.3) 0px 0px 0px 0px, rgba(255, 255, 255, 0.2) 0px 0px 0px 0px inset', backdropFilter: 'blur(8px)', borderRadius: '1000px', transition: '0.2s ease-in-out' }}>{icon.notifNum}</p>
                }
                <div style={{ backgroundColor: 'rgb(47, 48, 55)', borderRadius: '10px', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset', height: '40px', width: '40px', margin: '0px' }}>{icon.icon}</div>
                <p style={{ marginTop: '10px', lineHeight: '8px', textAlign: 'center', fontSize: '10px', color: 'rgb(183, 184, 194)', fontWeight: 'bold' }}>{icon.title}</p>
              </div>
            )}
            {/* Empty App Icons */}
            {Array.from({ length: 4 }, (_, index) => index).map((icon) =>
              <div style={{ marginTop: '0px', position: 'relative' }}>
                <div style={{ backgroundColor: 'rgb(47, 48, 55)', borderRadius: '10px', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset', height: '40px', width: '40px', margin: '0px' }}></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: 'linear-gradient(to top, rgb(33, 33, 38), rgba(33, 33, 38, 0))', width: '400px', height: '206px', position: 'absolute', top: '0px'}}></div>
      <div style={{ borderBottomRightRadius: '16px', borderBottomLeftRadius: '16px', width: '100%', position: 'absolute', bottom: '0px', padding: '24px', paddingTop: '0px', backgroundImage: "linear-gradient(to top, #212126, transparent)", zIndex: '100' }}>
        <p style={{ color: '#fff', fontWeight: 'bold', lineHeight: '24px', fontSize: '13px' }}>Email and SMS one-time passcodes</p>
        <p style={{ color: '#9395A1', marginTop: '8px', lineHeight: '20px', fontSize: '13px' }}>Fast and reliable one-time passcode delivery with built-in brute force prevention.</p>
      </div>
    </div >
  );
};

export { OneTimeCode };


`
