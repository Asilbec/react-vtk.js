import React from "react";
import { useStateContext } from "../context";
import { FormControl, MenuItem, Select, Box, Typography } from "@mui/material";
import vtkColorMaps from "@kitware/vtk.js/Rendering/Core/ColorTransferFunction/ColorMaps.js";

function FormControls() {
  const { updateColorPresets } = useStateContext();
  return (
    <Box>
      <Typography
        style={{ color: "white", fontSize: 15, marginBottom: "10px" }}
      >
        Color Presets
      </Typography>
      <FormControl fullWidth>
        <Select
          defaultValue={32}
          displayEmpty
          style={{ color: "white", border: "1px solid white" }}
          onChange={(e) =>
            updateColorPresets(vtkColorMaps.rgbPresetNames[e.target.value])
          }
        >
          {vtkColorMaps.rgbPresetNames.map((index, item) => (
            <MenuItem key={index} value={item}>
              {index}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default FormControls;
