export default `
.passwords {
  width: 400px;
  min-width: 280px;
  height: 260px;
  border-radius: 16px;
  position: relative;
  border-top-color: #d9d9de;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.024) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.024) 0px 0px 0px 1px inset;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 480px) {
  .passwords {
    width: 100%;
  }
}

.pass_lock_bg {
  height: 80px;
}

.pass_lock_wrap {
  -webkit-transition: all .4s cubic-bezier(.26, .48, .34, .99);
  -moz-transition: all .4s cubic-bezier(.26, .48, .34, .99);
  -o-transition: all .4s cubic-bezier(.26, .48, .34, .99);
  transition: all .4s cubic-bezier(.26, .48, .34, .99);
}

.pass_lock_otr {
  background-color: rgb(19, 19, 22);
  border-radius: 9999px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  position: relative;
  top: 48px;
  width: 64px;
  height: 64px;
  padding: 4px;
}

.pass_lock {
  background-image: repeating-radial-gradient(rgba(0, 0, 0, 0.2) 0.125rem, rgba(0, 0, 0, 0) 0.25rem);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.08) 0px 1px 0px 0px inset;
  width: 100%;
  height: 100%;
  background-color: #393940;
  border-radius: 9999px;
}

.pass_lock_inner_detail{
  background-image: linear-gradient(rgb(39, 39, 45), rgba(47, 48, 55, 0.5));
  border-radius: 10000px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.02) 0px 1px 0px 0px, rgba(255, 255, 255, 0.06) 0px -1px 0px 0px, rgba(255, 255, 255, 0.02) 0px -2px 4px 0px, rgba(0, 0, 0, 0.2) 0px 1px 1px 0px inset;
  position: absolute;
  height: 32px;
  width: 32px;
  left: 16px;
  top: 16px;
}

.pass_svg {
  margin: 0px auto;
}

.pass_svg_wrap {
  margin: 0px !important;
  position: relative;
  top: 10px;
  -webkit-transition: all .5s cubic-bezier(.94, -0.01, .65, .99);
  -moz-transition: all .5s cubic-bezier(.94, -0.01, .65, .99);
  -o-transition: all .5s cubic-bezier(.94, -0.01, .65, .99);
  transition: all .5s cubic-bezier(.94, -0.01, .65, .99);
  filter: drop-shadow(rgba(255, 255, 255, 0.1) 0px 1px 0px)
}

.pass_svg_bg_wrap {
  margin: 0px !important;
  overflow: hidden;
  height: 100%;
  z-index: 0;
}

.pass_svg_bg_wrap_gradient {
  position: absolute;
  height: 80px;
  width: 100%;
  background-image: linear-gradient(to top, #212126, rgba(33, 33, 38, 0));
  z-index: 1;
}

.pass_passcode_outer {
  display: block;
  width: 100%;
  position: absolute;
  top: 110px;
  z-index: 2;
  -webkit-transition: all .2s cubic-bezier(.26, .48, .34, .99);
  -moz-transition: all .2s cubic-bezier(.26, .48, .34, .99);
  -o-transition: all .2s cubic-bezier(.26, .48, .34, .99);
  transition: all .2s cubic-bezier(.26, .48, .34, .99);
}

.pass_passcode_wrap {
  background-color: #33353C;
  background-image: linear-gradient(rgb(47, 48, 55), rgb(39, 39, 45));
  border-radius: 6px;
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
  height: 28px;
  width: 224px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  column-gap: 6px;
  padding: 0px 12px;
}

.pass_password_dot {
  border-radius: 99999px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.4) 0px 1px 2px 0px;
  height: 4px;
  width: 4px;
  margin-top: 0px !important;
  position: relative;
  transition-property: filter, opacity;
}

.pass_password_dot_in {
  opacity: 1;
  filter: blur(0px);
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
  transition: all .3s ease-out;
}

.pass_password_dot_out {
  opacity: 0;
  filter: blur(30px);
  -webkit-transition: all .1s ease-out;
  -moz-transition: all .1s ease-out;
  -o-transition: all .1s ease-out;
  transition: all .1s ease-out;
}

.pass_bottom_bg_gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  margin-top: 0px !important;
  border-radius: 16px;
}

.pass_bottom_caption_wrap {
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  padding: 24px;
  padding-top: 0px;
}

.pass_bottom_title {
  font-weight: bold;
  line-height: 24px;
  font-size: 13px;
}

.pass_bottom_subtitle {
  margin-top: 8px !important;
  line-height: 20px;
  font-size: 13px
}
`
