import { React } from "react";
import { useStateContext } from "../context";

function FileInput() {
  const { menu, updateUploadedFile } = useStateContext();

  return (
    <div
      className="FileInputContainer"
      style={{ display: menu ? "flex" : "none" }}
    >
      <div className="FileInputContainerMax">
        <button
          onClick={() => document.getElementById("customFiledInput").click()}
          id="exampleFile"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "5px",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
          <h1>Use the Kitware API</h1>
          <h3>Access sample datasets from the Kitware api</h3>
        </button>
        <button
          onClick={() => document.getElementById("customFiledInput").click()}
          id="customFile"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "5px",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
          <h1>Upload Your Own</h1>
          <h3>Bring your VTI files to life by uploading to our new Viewer </h3>
          <input
            onChange={() => {
              updateUploadedFile();
            }}
            id="customFiledInput"
            hidden
            type={"file"}
          />
        </button>
      </div>
    </div>
  );
}

export default FileInput;
