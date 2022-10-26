import iPhone from "../../../images/hero_iphone_14_logo_medium_2x.png";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export const Hero = () => {
  return (
    <Controller>
      <Scene duration={5000} pin={true} indicators={true} triggerHook="onLeave">
        {(progrss) => (
          <div
            style={{
              // backgroundColor: "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <Timeline totalProgress={progrss} paused>
              <Tween
                from={{ y: "-10vh" }}
                to={{ y: "-50vh", opacity: "0" }}
                duration={1.2}
              >
                <div>
                  <img
                    src={iPhone}
                    style={{
                      transition: "transfrom .4s ease-out",
                    }}
                    width="750px"
                    height="138px"
                    alt=""
                  />
                </div>
              </Tween>
              <Tween
                from={{ y: "0" }}
                to={{ y: "0", opacity: "0" }}
                duration={30}
              >
                <div>
                  {/* <img
                    src={iPhone}
                    style={{
                      transition: "transfrom .4s ease-out",
                    }}
                    width="750px"
                    height="138px"
                    alt=""
                  /> */}
                </div>
              </Tween>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
    // <></>
    // <div>
    //   <div
    //     style={{
    //       height: "100vh",
    //       backgroundColor: "orange",
    //     }}
    //   ></div>
    // </div>
  );
};

// import { Box } from "@mui/material";
// import {
//   Animator,
//   batch,
//   Fade,
//   MoveOut,
//   ScrollContainer,
//   ScrollPage,
//   Sticky,
//   Zoom,
//   FadeIn,
//   ZoomIn,
//   Move,
//   StickyIn,
//   MoveIn,
//   FadeOut,
//   ZoomOut,
// } from "react-scroll-motion";
// import iPhone from "../../../images/hero_iphone_14_logo_medium_2x.png";
// import left from "../../../images/hero_iphone_14_leftHand_large_2x.jpeg";
// import right from "../../../images/hero_iphone_14_plus_rightHand__large_2x.jpeg";
// import { Controller, Scene } from "react-scrollmagic";
// // import { gsap } from "gsap";
// // import { useEffect } from "react";
// import React, { useState, useEffect } from "react";
// import { render } from "react-dom";
// import { TimelineLite } from "gsap/all";

// export const Hero = () => {
//   // const tl = gsap.timeline();
//   // let tweenTarget = null;
//   // const iPhonescroll = batch(Fade(), Sticky(), MoveIn(0, 0));
//   // const ZoomInScrollOut = batch(MoveOut(-1000, 0));
//   // const ZoomInScrollOut2 = batch(MoveOut(1000, 0));
//   // const FadeUp = batch(Fade(), Sticky(), Move());

//   // useEffect(() => {
//   //   tl.to(tweenTarget, 0.5, { x: 100 })
//   //     .to(tweenTarget, 0.5, { y: 100 })
//   //     .to(tweenTarget, 1, { rotation: 360 })
//   //     .reverse();
//   // }, []);
//   // console.log(tweenTarget);

//   const [toggle, setToggle] = useState(false);
//   const [tl] = useState(new TimelineLite({ paused: true }));

//   let tweenTarget = null;

//   const toggleTimeline = () => {
//     setToggle(!toggle);
//   };

//   useEffect(() => {
//     tl.to(tweenTarget, 0.5, { x: 100 })
//       .to(tweenTarget, 0.5, { y: 100 })
//       .to(tweenTarget, 1, { rotation: 360 })
//       .reverse();
//   }, []);

//   useEffect(() => {
//     tl.reversed(!toggle);
//   }, [toggle]);

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-12">
//           <h2 className="text-center">Using a Timeline with React Hooks</h2>
//           <hr />
//           <button className="btn btn-info" onClick={toggleTimeline}>
//             Toggle Timeline
//           </button>
//           <hr />
//           <div
//             className="card text-white bg-success"
//             style={{ width: "200px" }}
//             ref={(e) => (tweenTarget = e)}
//           >
//             <div className="card-body">
//               <div>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     // <div>
//     //   <Controller>
//     //     <Scene duration={1000} pin>
//     //       {/* <Timeline>
//     //         <Tween> */}
//     //       <div ref={(e) => (tweenTarget = e)}>
//     //         sdfsdf
//     //         {/* <img
//     //           ref={(e) => (tweenTarget = e)}
//     //           src={iPhone}
//     //           width="750px"
//     //           height="138px"
//     //           alt=""
//     //         /> */}
//     //       </div>
//     //       {/* </Tween>
//     //       </Timeline> */}
//     //     </Scene>
//     //   </Controller>
//     // </div>
//     // <ScrollContainer>
//     //   <ScrollPage page={1}>
//     //     <Animator animation={iPhonescroll}>
//     //       <img src={iPhone} width="750px" height="138px" alt="" />
//     //     </Animator>
//     //   </ScrollPage>
//     //   <ScrollPage page={1}>
//     //     <Box display="flex">
//     //       <Animator animation={ZoomInScrollOut}>
//     //         <img src={left} width="779px" height="1318px" alt="" />
//     //       </Animator>
//     //       <Animator animation={ZoomInScrollOut2}>
//     //         <img src={right} width="820px" height="1318px" alt="" />
//     //       </Animator>
//     //     </Box>
//     //   </ScrollPage>
//     //   <ScrollPage page={2}>
//     //     <Animator animation={FadeUp}>
//     //       <h2>I, FadeUp </h2>
//     //     </Animator>
//     //   </ScrollPage>

//     //   <ScrollPage page={3}>
//     //     <div
//     //       style={{
//     //         backgroundColor: "#8f22d8",
//     //         color: "#fff",
//     //         height: "100%",
//     //         display: "flex",
//     //         flexDirection: "column",
//     //         alignItems: "center",
//     //         justifyContent: "center",
//     //       }}
//     //     >
//     //       <h2>
//     //         <Animator animation={MoveIn(-1000, 0)}>hello</Animator>
//     //         <Animator animation={MoveIn(1000, 0)}>nice to meet</Animator>
//     //         <Animator animation={MoveOut(1000, 0)}>good ney</Animator>
//     //         <Animator animation={MoveOut(-1000, 0)}>see you</Animator>
//     //       </h2>
//     //     </div>
//     //   </ScrollPage>
//     //   <ScrollPage page={3}>
//     //     <Animator animation={batch(Fade(), Sticky())}>
//     //       <h2>Done</h2>
//     //     </Animator>
//     //   </ScrollPage>
//     // </ScrollContainer>
//     // <Box
//     //   sx={{
//     //     height: "100vh",
//     //     width: "100%",
//     //     display: "flex",
//     //     alignItems: "center",
//     //     justifyContent: "center",
//     //   }}
//     // ></Box>
//   );
// };
