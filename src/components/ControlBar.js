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
        <Button
          onClick={() => updateVolumeController()}
          style={{
            width: "95%",
            margin: "auto",
            display: viewFour ? "flex" : "none",
          }}
          variant="contained"
        >
          {volumeControllerDiv ? "Model One" : "Model Two"}
        </Button>

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
