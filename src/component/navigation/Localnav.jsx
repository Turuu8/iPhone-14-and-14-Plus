import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { LocalnavItemns } from "../../data/NavigationData";

export const Localnav = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setSmall(window.pageYOffset > 44);
      });
    }
  }, []);
  return (
    <div
      className="local-navigation"
      style={{ borderBottom: small ? "1px solid #00000029" : null }}
    >
      <div className="list">
        {LocalnavItemns.map((el, i) => (
          <div
            key={i}
            className="items"
            style={{ borderBottom: !small ? "1px solid #00000029" : null }}
          >
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: "500",
                ":hover": { cursor: "pointer" },
              }}
            >
              {el.title}
            </Typography>
            <div className="menu-tray">
              <Typography
                ml="24px"
                sx={{ fontSize: "12px", fontWeight: "300", opacity: "0.8" }}
              >
                {el.item}
              </Typography>
              <Typography
                ml="24px"
                sx={{
                  fontSize: "12px",
                  fontWeight: "300",
                  ":hover": { cursor: "pointer", color: "secondary.main" },
                }}
              >
                {el.item1}
              </Typography>
              <Typography
                ml="24px"
                sx={{
                  fontSize: "12px",
                  fontWeight: "300",
                  ":hover": { cursor: "pointer", color: "secondary.main" },
                }}
              >
                {el.item2}
              </Typography>
              <Typography
                sx={{ ":hover": { cursor: "pointer", opacity: ".94" } }}
                className="buy-button"
              >
                Buy
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
