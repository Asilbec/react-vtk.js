import React from "react";
import "../css/Menu.css";
import Slider from "@mui/material/Slider";
import { useStateContext } from "../context";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import vtkColorMaps from "@kitware/vtk.js/Rendering/Core/ColorTransferFunction/ColorMaps.js";
import { Button } from "@mui/material";

function ControlBar() {
  const {
    updateiSlice,
    updatejSlice,
    updatekSlice,
    updateColorPresets,
    updateColorLevel,
    updateColorWindow,
    viewOne,
    viewTwo,
    viewThree,
    viewFour,
    updateCloseUp,
  } = useStateContext();

  return (
    <div className="MenuBarContainer">
      <div className="MenuBarContainerScroll">
        {viewOne && (
          <Slider
            defaultValue={47}
            max={93}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(e) => updatekSlice(e.target.value)}
          />
        )}

        {viewTwo && (
          <Slider
            defaultValue={128}
            max={256}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(e) => updateiSlice(e.target.value)}
          />
        )}

        {viewThree && (
          <Slider
            defaultValue={128}
            max={256}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(e) => updatejSlice(e.target.value)}
          />
        )}

        {(viewOne || viewTwo || viewThree) && (
          <Slider
            defaultValue={2095}
            max={4095}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(e) => updateColorLevel(e.target.value)}
          />
        )}

        <Slider
          defaultValue={2095}
          max={4095}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={(e) => updateColorWindow(e.target.value)}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gap: "10px",
          }}
        >
          <Button
            onClick={() => {
              updateCloseUp("one");
            }}
            variant={viewOne ? "contained" : "outlined"}
          >
            Slice One
          </Button>

          <Button
            onClick={() => {
              updateCloseUp("two");
            }}
            variant={viewTwo ? "contained" : "outlined"}
          >
            Slice Two
          </Button>

          <Button
            onClick={() => {
              updateCloseUp("three");
            }}
            variant={viewThree ? "contained" : "outlined"}
          >
            Slice Three
          </Button>

          <Button
            onClick={() => {
              updateCloseUp("four");
            }}
            variant={viewFour ? "contained" : "outlined"}
          >
            3D view
          </Button>
        </div>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
    </div>
  );
}

export default ControlBar;
