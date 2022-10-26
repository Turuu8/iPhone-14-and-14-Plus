import { Box } from "@mui/material";
import { GlobalnavItems } from "../../data/NavigationData";

export const Globalnav = () => {
  return (
    <div className="global-navigation">
      <div className="list">
        <div className="glo-items">
          {GlobalnavItems.map((el, i) => (
            <Box
              key={i}
              sx={{
                padding: "0 8px",
                opacity: ".8",
                ":hover": { opacity: "1", cursor: "pointer" },
              }}
            >
              <img src={el.url} alt="" />
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
};
