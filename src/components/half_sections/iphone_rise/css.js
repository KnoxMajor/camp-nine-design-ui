export default `
.iphone_rise {
  .container {
    width: 400px; /* mess with these for desired result */
    height: 500px; /* mess with these for desired result */
    position: relative;
    overflow: hidden;
    background-color: #000000;
    border-radius: 10px;
  }

  .iphone_container {
    width: 80%; /* mess with these for desired result */
    height: 100%;
    transform: translateX(15%) translateY(90%); /* mess with these for desired result */
    position: absolute;
    z-index: 1;
    opacity: 0;
    -webkit-transition: all .8s cubic-bezier(0.17,0.84,0.44,1);
    -moz-transition: all .8s cubic-bezier(0.17,0.84,0.44,1);
    -o-transition: all .8s cubic-bezier(0.17,0.84,0.44,1);
    transition: all .8s cubic-bezier(0.17,0.84,0.44,1);
  }

  .animate{
    transform: translateX(15%) translateY(10%); /* mess with these for desired result */
    opacity: 1;
  }

  .iphone {
    mix-blend-mode: multiply;
    position: relative;
    z-index: 2;
  }

  .screen {
    position: absolute;
    top: 0px;
    z-index: 1;

    /* \/ you will need to tweak these */
    margin: 5px 0px 0px 0px;
    width: 93%;
    transform: translateX(4%);
    /* /\ you will need to tweak these */
  }

  .radial-gradient {
    position: absolute;
    bottom: -90%;
    left: 50%;
    transform: translateX(-50%);
    width: 370%; /* mess with these for desired result */
    height: 150%; /* mess with these for desired result */
    background: radial-gradient(circle, #F7F6FB 15%, #8B4BE0 25%, #472987 30%, #000000 39%); /* mess with these for desired result */
  }
}
`
