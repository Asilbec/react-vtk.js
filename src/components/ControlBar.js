import React from "react";
import "../css/Menu.css";
import Slider from "@mui/material/Slider";
import { useStateContext } from "../context";

function ControlBar() {
  const { updateiSlice, updatejSlice, updatekSlice } = useStateContext();
  return (
    <div className="MenuBarContainer">
      <div className="MenuBarContainerScroll">
        <Slider
          defaultValue={128}
          max={256}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={(e) => updateiSlice(e.target.value)}
        />

        <Slider
          defaultValue={128}
          max={256}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={(e) => updatejSlice(e.target.value)}
        />

        <Slider
          defaultValue={47}
          max={93}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={(e) => updatekSlice(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ControlBar;
