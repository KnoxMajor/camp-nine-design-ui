import React, { useState } from 'react';
import './one_time_code.css'

const OneTimeCode = ({
  darkmode = true,
  title = 'Email and SMS one-time passcodes',
  subtitle = 'Fast and reliable one-time passcode delivery with built-in brute force prevention.',
  notificationTitle = 'Security alert',
  notificationSubTitle = 'Your security passcode is 76...',
  accentColor = '#5DE3FF',
}) => {

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

  const backgroundColor = darkmode ? 'rgb(47, 48, 55)' : '#FFF';
  const textColor = darkmode ? '#9395A1' : '#212126';

  const backgroundGradient = darkmode
    ? 'linear-gradient(#FFFFFF0D 0%, #FFFFFF00 67.19%)'
    : 'linear-gradient(#FFFFFF 0%, #FFFFFF00 67.19%)';

  const bottomGradient = darkmode
    ? 'linear-gradient(to top, #212126, rgba(33, 33, 38, 0))'
    : 'linear-gradient(to top, #FFF, rgba(255, 255, 255, 0))';


  return (
    <div
      className="one_time_code"
      style={{ backgroundColor: darkmode ? '#212126' : '#B3B3B3' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="otc_inner_container" style={{ backgroundColor: backgroundColor, backgroundImage: backgroundGradient, transform: `translateX(25%) ${isHovered ? 'translateY(-10px)' : 'translateY(20px)'}` }}>
        <div className="otc_outer_wrapper">
          {/* Notification */}
          <div className="otc_notification_wrapper" style={{ backgroundColor: backgroundColor, filter: isHovered ? 'blur(0px)' : 'blur(2px)', opacity: isHovered ? '1' : '.5', transform: isHovered ? 'matrix(1, 0, 0, 1, 0, 0)' : 'matrix(0.9, 0, 0, 0.9, 0, -104)' }}>
            <div className="otc_notification_icon" style={{ backgroundColor: darkmode ? 'rgb(66, 67, 77)' : '#F7F7F7'}}>
              <svg style={{ height: '40px', width: '40px' }} viewBox="0 0 40 40" fill="none" aria-hidden="true" ><g filter="url(#filter0_di_5116_3367)"><path fill={accentColor} fill-rule="evenodd" d="M20 32c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12Zm6-12c0 2.761-2.686 5-6 5a7.2 7.2 0 0 1-1.163-.094 1.227 1.227 0 0 0-.79.14c-.613.34-1.308.571-1.983.72-.82.182-1.314-.759-.895-1.485.04-.07.08-.14.119-.212.21-.382.099-.846-.184-1.178C14.409 22.075 14 21.077 14 20c0-2.761 2.686-5 6-5s6 2.239 6 5Z" clip-rule="evenodd"></path></g><defs><filter id="filter0_di_5116_3367" width="42" height="42" x="-1" y="-1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_5116_3367"></feMorphology><feOffset></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.419608 0 0 0 0 0.905882 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5116_3367"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_5116_3367" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix><feBlend in2="shape" result="effect2_innerShadow_5116_3367"></feBlend></filter></defs></svg>
            </div>
            <div style={{ marginTop: '0px' }}>
              <p className="otc_notification_title" style={{ color: accentColor }}>{notificationTitle}</p>
              <p className="otc_notification_subtitle" style={{ color: textColor }}>{notificationSubTitle}</p>
            </div>
          </div>
          {/* Top Lock Icon */}
          <div className="otc_top_lock_icon" style={{ backgroundColor: isHovered ? accentColor : 'rgb(19, 19, 22)', boxShadow: isHovered ? 'rgba(107, 231, 255, 0.3) 0px 0px 8px 1px, rgba(255, 255, 255, 0.2) 0px 1px inset' : 'rgba(255, 255, 255, 0.05) 0px 1px 0px 0px' }}>
            {isHovered ?
              <svg viewBox="0 0 16 16" style={{ height: '16px', width: '16px' }} aria-hidden="true"><path fill="#fff" fill-opacity=".4" d="M3 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" opacity="1"></path><path fill="#fff" fill-opacity=".4" fill-rule="evenodd" d="M8 4a2.5 2.5 0 0 0-2.5 2.5V10h-1V6.5a3.5 3.5 0 1 1 7 0V10h-1V6.5A2.5 2.5 0 0 0 8 4Z" clip-rule="evenodd" opacity="1"></path><path d="M3 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" fill="rgba(4, 48, 72, 1)"></path><path fill-rule="evenodd" d="M8 3a2.5 2.5 0 0 0-2.5 2.5V9h-1V5.5a3.5 3.5 0 1 1 7 0V9h-1V5.5A2.5 2.5 0 0 0 8 3Z" clip-rule="evenodd" fill="rgba(4, 48, 72, 1)"></path></svg>
              :
              <svg viewBox="0 0 16 16" style={{ height: '16px', width: '16px' }} aria-hidden="true"><path fill="#fff" fill-opacity=".4" d="M3 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" opacity="0"></path><path fill="#fff" fill-opacity=".4" fill-rule="evenodd" d="M8 4a2.5 2.5 0 0 0-2.5 2.5V10h-1V6.5a3.5 3.5 0 1 1 7 0V10h-1V6.5A2.5 2.5 0 0 0 8 4Z" clip-rule="evenodd" opacity="0"></path><path d="M3 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" fill="rgba(116, 118, 134, 1)"></path><path fill-rule="evenodd" d="M8 3a2.5 2.5 0 0 0-2.5 2.5V9h-1V5.5a3.5 3.5 0 1 1 7 0V9h-1V5.5A2.5 2.5 0 0 0 8 3Z" clip-rule="evenodd" fill="rgba(116, 118, 134, 1)"></path></svg>
            }
          </div>
          {/* App Icons */}
          <div className="otc_app_icon_container">
            {appIcons.map((icon) =>
              <div style={{ marginTop: '0px', position: 'relative' }}>
                {icon.notifNum &&
                  <p className="otc_notif_num" style={{ backgroundColor: isHovered ? accentColor : 'rgba(255, 255, 255, 0.25)', boxShadow: isHovered ? 'rgba(107, 231, 255, 0.3) 0px 0px 8px 1px, rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset' : 'rgba(107, 231, 255, 0.3) 0px 0px 0px 0px, rgba(255, 255, 255, 0.2) 0px 0px 0px 0px inset' }}>{icon.notifNum}</p>
                }
                <div className="otc_app_icon" style={{ backgroundColor: backgroundColor }}>{icon.icon}</div>
                <p class="otc_app_title">{icon.title}</p>
              </div>
            )}
            {/* Empty App Icons */}
            {Array.from({ length: 4 }, (_, index) => index).map((icon) =>
              <div style={{ marginTop: '0px', position: 'relative' }}>
                <div className="otc_empty_app_icon" style={{ backgroundColor: backgroundColor }}></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="otc_bottom_bg_gradient" style={{ backgroundImage: bottomGradient }}></div>
      <div className="otc_bottom_caption_wrap" style={{ backgroundImage: darkmode ? "linear-gradient(to top, #212126, transparent)" : 'linear-gradient(to top, #fff, transparent)', zIndex: '100' }}>
        <p className="otc_bottom_title" style={{ color: darkmode ? '#fff' : '#212126' }}>{title}</p>
        <p className="otc_bottom_subtitle" style={{ color: textColor }}>{subtitle}</p>
      </div>
    </div>
  );
};

export { OneTimeCode };
