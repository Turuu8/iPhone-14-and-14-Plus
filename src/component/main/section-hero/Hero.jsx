import iPhone from "../../../images/hero_iphone_14_logo_medium_2x.png";
import left from "../../../images/hero_iphone_14_leftHand_large_2x.jpeg";
import right from "../../../images/hero_iphone_14_plus_rightHand__large_2x.jpeg";
import battery from "../../../images/hero_battery__jtsk5nz27w6e_medium_2x.png";
import batteryFill from "../../../images/hero_battery_fill__codbl8bf5u82_medium_2x.png";
import sosImage from "../../../images/hero_sos_icon__cq7nkrk5on8m_medium_2x.png";
import lowLightImage from "../../../images/hero_low_light__g8qll6yh8cae_small_2x.jpeg";
import midnight from "../../../images/hero_midnight__dxw9agfe9biq_large_2x.png";
import blue from "../../../images/hero_blue__fkesnsm4u5qy_large_2x.png";
import starlight from "../../../images/hero_starlight__e51cnln46a2q_large_2x.png";
import purple from "../../../images/hero_purple__folu9o3eqn2i_large_2x.png";
import red from "../../../images/hero_red__dmrr60zqdrqu_large_2x.png";
import { Box, Typography } from "@mui/material";
import { forwardRef, useImperativeHandle, useRef } from "react";

export const Hero = forwardRef((props, ref) => {
  const iPhone14 = useRef(null);
  const iPhoneLeft = useRef(null);
  const iPhoneRight = useRef(null);
  const Big = useRef(null);
  const AndBigger = useRef(null);
  const iPhone14Inch = useRef(null);
  const iPhone14PlusInch = useRef(null);
  const fill = useRef(null);
  const batteryContainer = useRef(null);
  const sos = useRef(null);
  const sosText = useRef(null);
  const lowLight = useRef(null);
  const lowLightText = useRef(null);
  const wonderfull = useRef(null);
  const wonderfullImages = useRef(null);
  const WFImagesMidnight = useRef(null);
  const WFImagesBlue = useRef(null);
  const WFImagesStarlight = useRef(null);
  const WFImagesPurple = useRef(null);
  const WFImagesRed = useRef(null);
  const iPhone14andiPhone14Plus = useRef(null);
  useImperativeHandle(ref, () => ({
    iPhone14,
    iPhoneLeft,
    iPhoneRight,
    Big,
    AndBigger,
    iPhone14Inch,
    iPhone14PlusInch,
    fill,
    batteryContainer,
    sos,
    sosText,
    lowLight,
    lowLightText,
    wonderfull,
    wonderfullImages,
    WFImagesMidnight,
    WFImagesBlue,
    WFImagesStarlight,
    WFImagesPurple,
    WFImagesRed,
    iPhone14andiPhone14Plus,
  }));
  return (
    <>
      {/* ________________ iPhone 14 text ______________ */}
      <img ref={iPhone14} src={iPhone} width="750px" height="138px" alt="" />

      <div style={{ display: "flex" }}>
        <div
          //  ---------------------- iPhone 14 FIRST LEFT animation  ----------------------
          className="hero-section-iPhone-left-hand-maskImage"
          ref={iPhoneLeft}
        >
          <img src={left} width="590px" height="998px" alt="" />
        </div>
        <div
          //  ---------------------- iPhone 14 FIRST RIGHT animation  ----------------------
          className="hero-section-iPhone-right-hand-maskImage"
          ref={iPhoneRight}
        >
          <img src={right} width="622px" height="998px" alt="" />
        </div>
      </div>
      {/* ______________________________ BIG & AND BIGGER. ______________ */}
      <div ref={Big}>
        <Typography
          sx={{
            lineHeight: 1.4705882353,
            transform: "skew(0deg, -15deg)",
            letterSpacing: "-0.07em",
          }}
          fontSize="50px"
          fontWeight="500"
        >
          Big
        </Typography>
      </div>
      <div ref={AndBigger}>
        <Typography
          sx={{
            lineHeight: 1.4705882353,
            transform: "skew(0deg, 15deg)",
            letterSpacing: "-0.06em",
          }}
          fontSize="50px"
          fontWeight="500"
        >
          and bigger.
        </Typography>
      </div>
      {/* ______________________________ BIG & AND BIGGER. ______________ */}

      {/* ====================================  iPhone - INCH & NAME  =================================== */}
      <div style={{ textAlign: "center" }} ref={iPhone14Inch}>
        <Typography
          sx={{
            lineHeight: 1.4705882353,
            transform: "skew(0deg, -15deg)",
            letterSpacing: "-0.05em",
          }}
          fontSize="24px"
          fontWeight="500"
        >
          iPhone 14
        </Typography>
        <Typography
          sx={{
            lineHeight: 1.4705882353,
            transform: "skew(0deg, -15deg)",
            letterSpacing: "-0.09em",
          }}
          fontSize="80px"
          fontWeight="500"
        >
          6.1"
        </Typography>
      </div>
      <div style={{ textAlign: "center" }} ref={iPhone14PlusInch}>
        <Typography
          sx={{
            lineHeight: 1.4705882353,
            transform: "skew(0deg, 15deg)",
            letterSpacing: "0.05em",
          }}
          fontSize="24px"
          fontWeight="500"
        >
          iPhone 14 Plus
        </Typography>
        <Typography
          sx={{
            lineHeight: 1.4705882353,
            transform: "skew(0deg, 15deg)",
            letterSpacing: "-0.05em",
          }}
          fontSize="80px"
          fontWeight="500"
        >
          6.7"
        </Typography>
      </div>
      {/*====================================  iPhone - INCH & NAME =================================== */}

      <Box
        // >>>>>>>>>>>>>>>>>>>>>> BATTERY ANIMATION SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<
        className="hero-section-battery-container"
        ref={batteryContainer}
      >
        <img
          style={{ zIndex: "1" }}
          width="172px"
          height="86px"
          src={battery}
          alt=""
        />
        <div style={{ position: "absolute", top: "0" }}>
          <img width="172px" height="86px" src={batteryFill} alt="" />
          <div className="battery-fill" ref={fill}></div>
        </div>
        <Typography
          fontSize="72px"
          fontWeight="600"
          textAlign="center"
          lineHeight="1"
          mt="30px"
        >
          Our longest battery life ever.
        </Typography>
      </Box>
      {/* >>>>>>>>>>>>>>>>>>>>>> BATTERY ANIMATION SECTION  <<<<<<<<<<<<<<<<<<<<<<<<< */}
      <Box
        // ________________________________  SOS ANIMATION SECTION    ___________________
        ref={sos}
        className="hero-section-safety-container"
      >
        <img width="142px" src={sosImage} alt="" />
        <Box
          className="safety-circle"
          sx={{
            width: "50%",
            height: "50%",
          }}
        />
        <Box
          className="safety-circle"
          sx={{
            width: "60%",
            height: "60%",
            opacity: "0.8",
          }}
        />
        <Box
          className="safety-circle"
          sx={{
            width: "70%",
            height: "70%",
            opacity: "0.6",
          }}
        />
        <Box
          className="safety-circle"
          sx={{
            width: "80%",
            height: "80%",
            opacity: "0.4",
          }}
        />
      </Box>
      <Box textAlign="center" ref={sosText}>
        <Typography fontSize="84px" fontWeight="600">
          Emergency SOS via
        </Typography>
        <Typography fontSize="84px" fontWeight="600">
          satellite.
        </Typography>
      </Box>
      <div ref={lowLight} className="hero-section-manifesto-camera">
        <Typography
          ref={lowLightText}
          fontSize="84px"
          variant="h1"
          fontWeight="600"
        >
          A huge leap in low‑light photos.
        </Typography>
        <img src={lowLightImage} alt="" />
      </div>
      {/* ________________________________ SOS ANIMATION SECTION    ___________________ */}
      <div className="hero-section-bottom-wonderfull">
        <Typography
          sx={{
            opacity: "0",
            transformStyle: "preserve-3d",
          }}
          ref={wonderfull}
          variant="h2"
          fontSize="96px"
          fontWeight="600"
        >
          Wonderfull.
        </Typography>
        <Typography
          ref={iPhone14andiPhone14Plus}
          className="iPhone14andiPhone14PlusText"
          fontSize="40px"
          fontWeight="500"
        >
          iPhone 14 and iPhone 14 Plus
        </Typography>
      </div>
      <div
        className="hero-section-bottom-wonderfullImages"
        ref={wonderfullImages}
      >
        <img
          ref={WFImagesMidnight}
          className="image1"
          width="392px"
          height="400px"
          src={midnight}
          alt=""
        />
        <img
          ref={WFImagesBlue}
          className="image2"
          width="322px"
          height="412px"
          src={blue}
          alt=""
        />
        <img
          ref={WFImagesStarlight}
          className="image3"
          width="274px"
          height="378px"
          src={starlight}
          alt=""
        />
        <img
          ref={WFImagesPurple}
          className="image4"
          width="324px"
          height="412px"
          src={purple}
          alt=""
        />
        <img
          ref={WFImagesRed}
          className="image5"
          width="392px"
          height="400px"
          src={red}
          alt=""
        />
      </div>
    </>
  );
});
