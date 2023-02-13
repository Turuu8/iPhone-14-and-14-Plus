import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Hero } from "./Hero";
import { Typography } from "@mui/material";

export const HeroAnimation = () => {
  return (
    <Controller>
      <Scene
        duration={6000}
        pin={true}
        //  indicators={true}
        triggerHook={0.062}
      >
        {(progrss) => (
          <div className="hero-section">
            <Timeline totalProgress={progrss} paused target={<Hero />}>
              {/* ________________ iPhone 14 text ______________ */}
              <Tween
                target="iPhone14"
                from={{ position: "absolute", top: "30%" }}
                to={{ position: "absolute", top: "-20%", opacity: "0" }}
                position="-0.1"
                duration={0.06}
              />
              <Tween
                //  ---------------------- iPhone 14 FIRST LEFT animation  ----------------------
                from={{
                  position: "absolute",
                  top: "115%",
                  left: "2.5%",
                  scale: "1.3",
                }}
                to={{
                  position: "absolute",
                  top: "43%",
                  left: "2.5%",
                  zIndex: "10",
                }}
                target="iPhoneLeft"
                position="0.01"
                duration={0.06}
              />
              <Tween
                //  ---------------------- iPhone 14 FIRST RIGHT animation  ----------------------
                from={{
                  position: "absolute",
                  top: "115%",
                  right: "0",
                  scale: "1.3",
                }}
                to={{ position: "absolute", top: "43%", right: "0" }}
                target="iPhoneRight"
                position="0.01"
                duration={0.06}
              />
              {/* ________________ BIG & AND BIGGER. ______________ */}
              <Tween
                from={{
                  position: "absolute",
                  top: "105%",
                  left: "35%",
                  scale: "0.2",
                }}
                to={{
                  position: "absolute",
                  top: "20%",
                  scale: "2.1",
                }}
                target="Big"
                position="0.01"
                duration={0.06}
              />
              <Tween
                to={{
                  position: "absolute",
                  top: "17%",
                  scale: "0",
                }}
                target="Big"
                position="0.085"
                duration={0.14}
              />
              {/* =============================== */}
              <Tween
                from={{
                  position: "absolute",
                  top: "100%",
                  right: "30%",
                  scale: "0.2",
                }}
                to={{
                  position: "absolute",
                  top: "12%",
                  scale: "2.1",
                }}
                target="AndBigger"
                position="0.01"
                duration={0.06}
              />
              <Tween
                to={{
                  position: "absolute",
                  top: "10%",
                  scale: "0",
                }}
                target="AndBigger"
                position="0.085"
                duration={0.14}
              />
              {/* ________________ BIG &  AND BIGGER. ______________ */}

              {/*====================================  INCH  =================================== */}
              <Tween
                from={{
                  position: "absolute",
                  top: "40%",
                  display: "none",
                  left: "33%",
                }}
                to={{
                  position: "absolute",
                  top: "22%",
                  left: "20%",
                  display: "block",
                }}
                target="iPhone14Inch"
                position="0.085"
                duration={0.13}
              />
              <Tween
                to={{
                  position: "absolute",
                  left: "28%",
                  display: "none",
                }}
                target="iPhone14Inch"
                position="0.220"
                duration={0.02}
              />
              {/* ++++++++++++++++++++++++ */}
              <Tween
                from={{
                  position: "absolute",
                  top: "40%",
                  display: "none",
                  right: "31%",
                }}
                to={{
                  position: "absolute",
                  top: "22%",
                  right: "16%",
                  display: "block",
                }}
                target="iPhone14PlusInch"
                position="0.085"
                duration={0.13}
              />
              <Tween
                to={{
                  position: "absolute",
                  right: "27%",
                  display: "none",
                }}
                target="iPhone14PlusInch"
                position="0.220"
                duration={0.02}
              />
              {/*====================================  INCH  =================================== */}

              <Tween
                // ---------------------- iPhone 14 LEFT UP animation  ----------------------
                to={{ position: "absolute", top: "22%", left: "2.5%" }}
                target="iPhoneLeft"
                position="0.085"
                duration={0.13}
              />
              <Tween
                // ---------------------- iPhone 14 RIGHT UP animation  ----------------------
                to={{ position: "absolute", top: "22%", right: "0" }}
                target="iPhoneRight"
                position="0.085"
                duration={0.13}
              />
              {/* ________________ iPhone 14 Image LEFT & RIGHT - BOTH WAYS ______________ */}
              <Tween
                to={{ x: "-100vw", scale: "0" }}
                target="iPhoneLeft"
                position="0.220"
                duration={0.5}
              />
              <Tween
                to={{ x: "100vw", scale: "0" }}
                target="iPhoneRight"
                position="0.220"
                duration={0.5}
              />
              {/* ________________ iPhone 14 Image LEFT & RIGHT - BOTH WAYS ______________ */}

              <Tween
                // >>>>>>>>>>>>>>>>>>>>>> BATTERY ANIMATION SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<
                from={{
                  opacity: "0",
                  scale: "0",
                  transform: "matrix3d(0.125, 0, 0, 0, 0, 0.125, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                }}
                to={{
                  opacity: "1",
                }}
                target="batteryContainer"
                position="0.220"
                duration={0.13}
              />
              <Tween
                to={{
                  scale: "1.4",
                  transform:
                    "perspective(1600px) matrix3d(0.817557, -0.283503, 0.493623, 0, 0, 0.863872, 0.496149, 0, -0.571408, -0.408721, 0.711646, 0, 0, 0, 0, 1) translate3d(100px, 100px, 180px)",
                }}
                target="batteryContainer"
                position="0.220"
                duration={0.15}
              />
              <Tween
                to={{
                  top: "-50%",
                  transform:
                    "perspective(1600px) matrix3d(0.920608, 0.227858, -0.317115, 0.005, -1,    0.733711, -0.677486, 0, 0.005, 0.640116, 0.663665,    0,  100, -502.479, 0, 1) translate3d(100px, 100px, 180px)",
                }}
                target="batteryContainer"
                position="0.36"
                duration={0.153}
              />
              <Tween
                to={{ width: "0" }}
                target="fill"
                position="0.193"
                duration={0.253}
                // >>>>>>>>>>>>>>>>>>>>>> BATTERY ANIMATION SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<
              />
              <Tween
                // ___________________  SOS ANIMATION SECTION    ___________________
                from={{
                  position: "absolute",
                  top: "90%",
                  transform:
                    "matrix3d(1.02462, -0.12755, -0.35044, 0, 0, 1.02462, -0.372931, 0, 0.34202, 0.321394, 0.883022, 0, 0, 158.611, 0, 1)",
                }}
                to={{
                  width: "500px",
                  height: "500px",
                  top: "-160%",
                  position: "absolute",
                }}
                target="sos"
                position="0.42"
                duration={0.223}
              />
              <Tween
                to={{
                  transform: "matrix3d(1.2, 0, 0, 0, 0, 1.2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                }}
                target="sos"
                position="0.42"
                duration={0.12}
              />

              <Tween
                from={{
                  position: "absolute",
                  top: "115%",
                  transform:
                    "matrix3d(1.02462, -0.12755, -0.35044, 0, 0,   1.02462, -0.372931, 0, 0.34202, 0.321394, 0.883022, 0, 0, 158.611, 0, 1)",
                }}
                to={{
                  top: "-100%",
                  position: "absolute",
                }}
                target="sosText"
                position="0.42"
                duration={0.223}
              />
              <Tween
                to={{
                  transform: "matrix3d(1.2, 0, 0, 0, 0, 1.2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                }}
                target="sosText"
                position="0.42"
                duration={0.12}
                // ___________________  SOS ANIMATION SECTION    ___________________
              />
              {/* ________________ Low Light  Section______________ */}
              <Tween
                from={{
                  top: "100%",
                }}
                to={{
                  top: "-140%",
                }}
                target="lowLight"
                position="0.5"
                duration={0.2}
              />
              <Tween
                from={{
                  transform:
                    "matrix3d(1.15911, -0.0803848, -0.3, 0, 0, 1.15911, -0.310583, 0, 0.258819, 0.25, 0.933013, 0, 0, 0, 0, 1)",
                }}
                to={{
                  scale: "1.3",
                  transform:
                    "matrix3d(0.787846, 0, 0.138919, 0, 0, 0.8, 0, 0, -0.173648, 0, 0.984808, 0, 0, 0, 0, 1)",
                }}
                target="lowLightText"
                position="0.5"
                duration={0.1}
              />
              {/* ________________ Low Light Section ______________ */}

              <Tween
                // >>>>>>>>>>>>>>>>>>>>>> WONDERFULL Section <<<<<<<<<<<<<<<<<<<<<<<
                from={{
                  x: "0",
                  y: "20vh",
                  transform:
                    "perspective(0.9993px) translate3d(0px, 0.1094px, 0px) rotateX(-0.0591deg) scale(2.4601, 2.2582)",
                }}
                to={{
                  x: "0",
                  y: "-10vh",
                  transform:
                    "perspective(0.9993px) translate3d(0px, 0.1094px, 0px) rotateX(-0.0591deg) scale(1.9601, 1.7582)",
                }}
                target="wonderfull"
                position="0.6"
                duration={0.2}
              />
              <Tween
                to={{
                  opacity: "1",
                }}
                target="wonderfull"
                position="0.6"
                duration={0.2}
              />
              <Tween
                from={{ y: "-10vh" }}
                to={{
                  y: "-20vh",
                  transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                }}
                target="wonderfull"
                position="0.8"
                duration={0.15}
              />
              <Tween
                from={{
                  opacity: "0",
                }}
                to={{
                  opacity: "1",
                }}
                target="iPhone14andiPhone14Plus"
                position="0.85"
                duration={0.1}
              />
              {/* _________________________________________________________________________________________ */}
              <Tween
                // ___________________  WONDERFULL IMAGES SECTION    ___________________
                from={{
                  scale: "0.5",
                  y: "50vh",
                }}
                to={{
                  scale: "1",
                  right: "64%",
                  y: "2vh",
                }}
                target="WFImagesMidnight"
                position="0.83"
                duration={0.09}
                // _________  Midnigth  _________
              />
              <Tween
                from={{
                  scale: "0.5",
                  y: "50vh",
                }}
                to={{
                  scale: "1",
                  right: "36%",
                  left: "0",
                  y: "-14vh",
                }}
                target="WFImagesBlue"
                position="0.8"
                duration={0.09}
                // _________  Blue  _________
              />
              <Tween
                from={{
                  scale: "0.5",
                  y: "50vh",
                }}
                to={{
                  scale: "1",
                  y: "-17vh",
                }}
                target="WFImagesStarlight"
                position="0.75"
                duration={0.09}
                // _________  Starlight  _________
              />
              <Tween
                from={{
                  scale: "0.5",
                  y: "50vh",
                }}
                to={{
                  scale: "1",
                  left: "36%",
                  y: "-14vh",
                }}
                target="WFImagesPurple"
                position="0.77"
                duration={0.09}
                // _________  Purple  _________
              />
              <Tween
                from={{
                  scale: "0.5",
                  y: "50vh",
                }}
                to={{
                  left: "64%",
                  scale: "1",
                  y: "2vh",
                }}
                target="WFImagesRed"
                position="0.81"
                duration={0.09}
                // _________  Red  _________
              />
            </Timeline>
          </div>
        )}
      </Scene>
      <div className="hero-section-last-price-link">
        <Typography>From $33.29/mo. for 24 mo. or $799 before trade‑in*</Typography>
        <div>
          <Typography>Watch the film</Typography>
          <Typography>Watch the event</Typography>
        </div>
      </div>
    </Controller>
  );
};
