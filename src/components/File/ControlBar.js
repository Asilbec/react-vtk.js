import { React, useState } from "react";
// import Sliders from "./Sliders";
import { Button } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FileUpload from "./FileUpload";
import FileDisplay from "./FileDisplay";
import ImageSettings from "../MenuSettings/ImageSettings";
function ControlBar() {
  const [ControlBarWidth, setControlBarWidth] = useState(true);

  return ControlBarWidth ? (
    <div id="menbarContainer" className="MenuBarContainer">
      <Button
        style={{ width: "95%", margin: "0 auto" }}
        onClick={() => {
          setControlBarWidth(false);
        }}
        variant={"contained"}
      >
        Close Menu
      </Button>
      <FileUpload />
      <FileDisplay />
      <ImageSettings />
    </div>
  ) : (
    <div
      style={{ position: "absolute", zIndex: 100, top: "10px", right: "5px" }}
    >
      <Button
        style={{ width: "150px", height: "40px" }}
        onClick={() => setControlBarWidth(true)}
        variant="contained"
      >
        Open Menu
      </Button>
    </div>
  );
}

export default ControlBar;
