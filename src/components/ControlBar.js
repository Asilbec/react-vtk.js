import { React } from "react";
import "../css/Menu.css";
import Sliders from "./Sliders";
import GroupButton from "./GroupButtons";
import { Accordion, AccordionSummary, Button, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateContext } from "../context";

function ControlBar() {
  const {
    viewOne,
    viewTwo,
    viewThree,
    viewFour,
    updateVolumeController,
    volumeControllerDiv,
  } = useStateContext();

  return (
    <div className="MenuBarContainer">
      <div className="MenuBarContainerScroll">
        <GroupButton />
        <div
          style={{
            display: "flex",
            boxSizing: "border-box",
            padding: "5px",
            gap: "10px",
          }}
        >
          <Button
            onClick={() => updateVolumeController()}
            style={{
              width: "100%",
              display: viewFour ? "flex" : "none",
            }}
            variant={volumeControllerDiv ? "outlined" : "contained"}
          >
            Model One
          </Button>

          <Button
            onClick={() => updateVolumeController()}
            style={{
              width: "100%",
              display: viewFour ? "flex" : "none",
            }}
            variant={volumeControllerDiv ? "contained" : "outlined"}
          >
            Model Two
          </Button>
        </div>

        {(viewOne || viewTwo || viewThree) && (
          <Accordion style={{ background: "#252526" }}>
            <AccordionSummary
              style={{ color: "white" }}
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
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
