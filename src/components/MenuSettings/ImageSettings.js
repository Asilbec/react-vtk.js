import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context";
import "./MenuSettings.css";
import { AiFillEye } from "react-icons/ai";

function ImageSettings() {
  const { selected, viewref, volcontref } = useStateContext();
  const Visibility = viewref.current[selected].volume.getVisibility();
  const [selectedVolumeVis, newSelectedVolumeVis] = useState(Visibility);
  const [selectedVolumeCont, newSelectedVolumeCont] = useState(false);

  useEffect(() => {
    newSelectedVolumeVis(viewref.current[selected].volume.getVisibility());
    volcontref.current[selected].style.display = "none";
    newSelectedVolumeCont(false);
  }, [selected]);

  function changeVisibiltiy() {
    if (viewref.current[selected].volume.getVisibility()) {
      newSelectedVolumeVis(false);
      viewref.current[selected].volume.setVisibility(false);
      volcontref.current[selected].style.display = "none";
      newSelectedVolumeCont(false);
    } else {
      newSelectedVolumeVis(true);
      viewref.current[selected].volume.setVisibility(true);
      volcontref.current[selected].style.display = "flex";
      newSelectedVolumeCont(true);
    }
    viewref.current[selected].view.renderView();
  }

  function chnageVolumeController() {
    if (selectedVolumeCont) {
      newSelectedVolumeCont(false);
      volcontref.current[selected].style.display = "none";
    } else {
      volcontref.current[selected].style.display = "flex";
      newSelectedVolumeCont(true);
    }
  }

  return (
    <div className="ImageSettings">
      <Typography fontSize={20} color={"#4ba5d6"}>
        Settings
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
            onChange={() => chnageVolumeController()}
            checked={selectedVolumeCont}
          />
        </ListItem>
      </List>
    </div>
  );
}

export default ImageSettings;
