import React from "react";
import "../css/Menu.css";
import Sliders from "./Sliders";
import GroupButton from "./GroupButtons";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ControlBar() {
  return (
    <div className="MenuBarContainer">
      <div className="MenuBarContainerScroll">
        <Accordion style={{ background: "#252526" }}>
          <AccordionSummary
            style={{ color: "white" }}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Slice Controls</Typography>
          </AccordionSummary>
          <Sliders />
        </Accordion>
        <GroupButton />
      </div>
    </div>
  );
}

export default ControlBar;
