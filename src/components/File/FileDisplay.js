import React from "react";
import { useStateContext } from "../../context";
import { Typography, ListItem, List, Button } from "@mui/material";

function FileDisplay() {
  const { files, viewref } = useStateContext();
  return (
    <div style={{ width: "95%", margin: "0 auto" }}>
      <Typography fontSize={20} color={"#4ba5d6"}>
        Current Files
      </Typography>
      <div className="FileDisplayContainer">
        <List
          sx={{
            width: "100%",
            background: "black",
          }}
        >
          {files.map((file, index) => (
            <ListItem
              key={index}
              sx={{
                boxSizing: "border-box",
                width: "100%",
                padding: "5px 0px",
              }}
            >
              <Button
                onClick={() => {
                  viewref.current[index].volume.setVisibility(false);
                  viewref.current[index].view.renderView();
                }}
                sx={{ width: "100%" }}
                variant="outlined"
              >
                {file.name}
              </Button>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default FileDisplay;
