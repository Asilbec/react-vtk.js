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
  const { selected, viewref, graphlist, updateSelectedMap } = useStateContext();
  const Visibility = viewref.current[selected].volume.getVisibility();
  const [selectedVolumeVis, newSelectedVolumeVis] = useState(Visibility);
  const [selectedVolumeCont, newSelectedVolumeCont] = useState(false);

  useEffect(() => {
    newSelectedVolumeVis(viewref.current[selected].volume.getVisibility());
    newSelectedVolumeCont(false);
  }, [selected]);

  function changeVisibiltiy() {
    if (viewref.current[selected].volume.getVisibility()) {
      newSelectedVolumeVis(false);
      viewref.current[selected].volume.setVisibility(false);
      newSelectedVolumeCont(false);
    } else {
      newSelectedVolumeVis(true);
      viewref.current[selected].volume.setVisibility(true);
      newSelectedVolumeCont(true);
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
        <ListItem>
          <ListItemIcon>
            <AiFillEye color="white" />
          </ListItemIcon>
          <ListItemText
            style={{ color: "white" }}
            id="switch-list-label-bluetooth"
            primary="Mapper"
          />
          <Switch
            // onChange={() => chnageVolumeController()}
            checked={selectedVolumeCont}
          />
        </ListItem>
      </List>
      <Typography fontSize={20} color={"#4ba5d6"}>
        Scalars
      </Typography>
      <Button
        onClick={() => {
          updateSelectedMap(0);
        }}
        variant="contained"
      >
        Click Me
      </Button>
      <Button
        onClick={() => {
          console.log(graphlist[selected]);
          updateSelectedMap(1);
        }}
        variant="contained"
      >
        Click Me
      </Button>
    </div>
  );
}

export default ImageSettings;
