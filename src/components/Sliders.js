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
    slideMax,
  } = useStateContext();

  return (
    <AccordionDetails>
      {viewOne && (
        <Box>
          <Typography fontSize={15} color="white">
            Slice K
          </Typography>
          <Slider
            defaultValue={50}
            max={100}
            min={-2}
            aria-label="Default"
            valueLabelDisplay="auto"
            size="small"
            onChange={(e) => {
              console.log(e.target.value);
              updatekSlice(e.target.value);
            }}
          />
        </Box>
      )}

      {viewTwo && (
        <Box>
          <Typography fontSize={15} color="white">
            Slice I
          </Typography>
          <Slider
            defaultValue={0}
            max={slideMax[3]}
            min={-2}
            aria-label="Default"
            size="small"
            valueLabelDisplay="auto"
            onChange={(e) => updateiSlice(e.target.value)}
          />
        </Box>
      )}

      {viewThree && (
        <Box>
          <Typography fontSize={15} color="white">
            Slice J
          </Typography>
          <Slider
            defaultValue={50}
            max={slideMax[3]}
            min={0}
            aria-label="Default"
            size="small"
            valueLabelDisplay="auto"
            onChange={(e) => updatejSlice(e.target.value)}
          />
        </Box>
      )}

      {(viewOne || viewTwo || viewThree) && (
        <Box>
          <Typography fontSize={15} color="white">
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
          <Typography fontSize={15} color="white">
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
