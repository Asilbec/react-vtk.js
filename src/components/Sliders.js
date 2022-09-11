import React from "react";
import { Slider } from "@mui/material";
import { useStateContext } from "../context";
import { AccordionDetails, Box, Typography } from "@mui/material";
import FormControls from "./FormControl";

function Sliders() {
  const {
    viewOne,
    viewTwo,
    viewThree,
    updatekSlice,
    updateiSlice,
    updatejSlice,
    updateColorLevel,
    updateColorWindow,
  } = useStateContext();

  return (
    <AccordionDetails>
      {viewOne && (
        <Box>
          <Typography fontSize={20} color="white">
            Slice K
          </Typography>
          <Slider
            defaultValue={47}
            max={93}
            aria-label="Default"
            valueLabelDisplay="false"
            size="small"
            onChange={(e) => updatekSlice(e.target.value)}
          />
        </Box>
      )}

      {viewTwo && (
        <Box>
          <Typography fontSize={20} color="white">
            Slice K
          </Typography>{" "}
          <Slider
            defaultValue={128}
            max={256}
            aria-label="Default"
            size="small"
            valueLabelDisplay="false"
            onChange={(e) => updateiSlice(e.target.value)}
          />
        </Box>
      )}

      {viewThree && (
        <Box>
          <Typography fontSize={20} color="white">
            Slice K
          </Typography>{" "}
          <Slider
            defaultValue={128}
            max={256}
            aria-label="Default"
            size="small"
            valueLabelDisplay="false"
            onChange={(e) => updatejSlice(e.target.value)}
          />
        </Box>
      )}

      {(viewOne || viewTwo || viewThree) && (
        <Box>
          <Typography fontSize={20} color="white">
            Color Level
          </Typography>
          <Slider
            defaultValue={2095}
            max={4095}
            aria-label="Default"
            size="small"
            valueLabelDisplay="auto"
            onChange={(e) => updateColorLevel(e.target.value)}
          />
        </Box>
      )}

      {(viewOne || viewTwo || viewThree) && (
        <Box>
          <Typography fontSize={20} color="white">
            Color Window
          </Typography>
          <Slider
            defaultValue={2095}
            max={4095}
            size="small"
            aria-label="default"
            valueLabelDisplay="auto"
            onChange={(e) => updateColorWindow(e.target.value)}
          />
          <FormControls />
        </Box>
      )}
    </AccordionDetails>
  );
}

export default Sliders;
