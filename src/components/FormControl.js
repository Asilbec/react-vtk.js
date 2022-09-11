import React from "react";
import { useStateContext } from "../context";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import vtkColorMaps from "@kitware/vtk.js/Rendering/Core/ColorTransferFunction/ColorMaps.js";

function FormControls() {
  const { updateColorPresets } = useStateContext();
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color Preset</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="ColorPreset"
          defaultValue={32}
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
    </div>
  );
}

export default FormControls;
