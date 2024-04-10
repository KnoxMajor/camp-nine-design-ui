export default `
.custom_roles {
  width: 400px;
  min-width: 280px;
  height: 528px;
  border-radius: 16px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px, rgba(34, 42, 53, 0.04) 0px 4px 6px 0px, rgba(47, 48, 55, 0.05) 0px 24px 68px 0px, rgba(0, 0, 0, 0.04) 0px 2px 3px 0px;
}

.cr_copy_wrap {
  padding: 24px 24px 0px 24px;
}

.cr_title {
  font-weight: bold;
  line-height: 24px;
  font-size: 13px;
  margin-top: 0px !important;
}

.cr_subtitle {
  margin-top: 8px !important;
  line-height: 20px;
  font-size: 13px
}

.cr_profiles_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cr_profile_grid {
  display: flex;
  width: 256px;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.cr_profile {
  margin: 0px !important;
  border: 1px solid #d9d9de;
  width: 80px;
  height: 92px;
  border-radius: 8px;
  background-color: #fff;
}

.cr_profile_add_photo {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .1);
  padding: 4px;
  -webkit-transition: all 1s ease-out;
  -moz-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  transition: all 1s ease-out;
}

.cr_profile_w_photo {
  border-radius: 4px;
  padding: 0px;
  background-image: radial-gradient(241.22% 160.71% at 49.27% -9.52%, rgba(108, 71, 255, 0.3), rgba(255, 249, 99, 0.24) 41.24%, rgba(56, 218, 253, 0.18) 62.34%, rgba(98, 72, 246, 0) 91.89%);
  height: 100%;
  position: relative;
}

.cr_profile_photo{
  border: 1px solid rgb(217, 217, 222);
  border-radius: 4px;
  -webkit-transition: all .2s ease-out;
  -moz-transition: all .2s ease-out;
  -o-transition: all .2s ease-out;
  transition: all .2s ease-out;
  mix-blend-mode: multiply;
}

.cr_profile_svg {
  height: 100% !important;
  width: 100%;
  top: 0px;
  z-index: 10;
  border-radius: 4px;
  margin: 0px !important;
  position: absolute;
}

.cr_titles_list_wrap {
  margin-top: 25px !important;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.cr_titles_list {
  margin: 0px !important;
  display: flex;
  gap: 12px;
  width: max-content;
  position: relative;
  -webkit-transition: all .2s ease-out;
  -moz-transition: all .2s ease-out;
  -o-transition: all .2s ease-out;
  transition: all .2s ease-out;
}

.cr_titles_title {
  margin: 0px !important;
  padding: 4px 8px;
}

.cr_titles_floating_rect_wrap {
  position: absolute;
  width: 100%;
  height: max-content;
}

.cr_titles_floating_rect {
  transition: width 0.5s ease, transform 0.5s ease;
  height: 37px;
  margin: 0px auto;
  border-radius: 10000px;
  border: 1px solid rgb(217, 217, 222);
  background-color: rgb(250, 250, 251);
}

`
