import { React, useState } from "react";
import "../css/Menu.css";
import Sliders from "./Sliders";
import GroupButton from "./GroupButtons";
import {
  Accordion,
  AccordionSummary,
  Typography,
  Box,
  AccordionDetails,
  Tab,
  Tabs,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateContext } from "../context";
import TabPanel from "./TabPanels";
import { makeStyles } from "@mui/styles";
import { purple, red } from "@mui/material/colors";

const useStyles = makeStyles({
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "orange",
      height: 3,
    },
    "& .MuiTab-root.Mui-selected": {
      color: "red",
    },
  },
});

function ControlBar() {
  const { viewOne, viewTwo, viewThree } = useStateContext();
  const [value, setValue] = useState(0);

  const primary = red[500]; // #f44336
  const accent = purple["A200"]; // #e040fb
  const classes = useStyles();

  return (
    <div className="MenuBarContainer">
      <div className="MenuBarContainerScroll">
        <GroupButton />
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
        <Accordion style={{ background: "#252526" }}>
          <AccordionSummary
            style={{ color: "white" }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          >
            <Typography>View Controls</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{ borderBottom: 1, borderColor: "divider", color: "white" }}
              >
                <Tabs
                  selectionFollowsFocus
                  value={value}
                  variant="fullWidth"
                  onChange={(e, newValue) => setValue(newValue)}
                  aria-label="basic tabs example"
                  className={classes.tabs}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <Tab className="1" label="Camera" />
                  <Tab className="2" label="Background" />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                Item Oness
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default ControlBar;
