import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
} from "@mui/material";
import React from "react";
import { useStateContext } from "../../context";
import "./MenuSettings.css";
import { AiFillEye } from "react-icons/ai";

function ImageSettings() {
  const { selected, files } = useStateContext();
  return files.length > 0 ? (
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
            primary="Visibility"
          />
          <Switch />
        </ListItem>
      </List>
    </div>
  ) : (
    <></>
  );
}

export default ImageSettings;
