import React from "react";
import "../css/Menu.css";
import Sliders from "./Sliders";
import GroupButton from "./GroupButtons";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateContext } from "../context";

function ControlBar() {
  const { viewOne, viewTwo, viewThree } = useStateContext();

  return (
    <div className="MenuBarContainer">
      <div className="MenuBarContainerScroll">
        <GroupButton />

        {(viewOne || viewTwo || viewThree) && (
          <Accordion style={{ background: "#252526" }}>
            <AccordionSummary
              style={{ color: "white" }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>Slice Controls</Typography>
            </AccordionSummary>
            <Sliders />
          </Accordion>
        )}
      </div>
    </div>
  );
}

export default ControlBar;
