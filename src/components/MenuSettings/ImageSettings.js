import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context";
import "./MenuSettings.css";
import { AiFillEye } from "react-icons/ai";

function ImageSettings() {
  const {
    selected,
    viewref,
    graphlist,
    updateSelectedMap,
    volcontref,
    selectedMap,
  } = useStateContext();
  const Visibility = viewref.current[selected].volume.getVisibility();
  const [selectedVolumeVis, newSelectedVolumeVis] = useState(Visibility);

  useEffect(() => {
    newSelectedVolumeVis(viewref.current[selected].volume.getVisibility());
  }, [selected]);

  function changeVisibiltiy() {
    if (viewref.current[selected].volume.getVisibility()) {
      newSelectedVolumeVis(false);
      viewref.current[selected].volume.setVisibility(false);
    } else {
      newSelectedVolumeVis(true);
      viewref.current[selected].volume.setVisibility(true);
    }
    viewref.current[selected].view.renderView();
  }

  return (
    <div className="ImageSettings">
      <Typography fontSize={20} color={"#4ba5d6"}>
        Visibility
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <AiFillEye color="white" />
          </ListItemIcon>
          <ListItemText
            style={{ color: "white" }}
            id="switch-list-label-bluetooth"
            primary="Image"
          />
          <Switch
            onChange={() => changeVisibiltiy()}
            checked={selectedVolumeVis}
          />
        </ListItem>
      </List>
      <Typography fontSize={20} color={"#4ba5d6"}>
        Scalars
      </Typography>
      <div>
        {graphlist[selected].map((list, index) => (
          <Button
            onClick={() => updateSelectedMap(index)}
            variant="contained"
            key={index}
          >
            {index}
          </Button>
        ))}
      </div>
      <Button
        onClick={() => {
          console.log(volcontref.current[selectedMap]);
        }}
        variant="contained"
      >
        Click Me
      </Button>
    </div>
  );
}

export default ImageSettings;
