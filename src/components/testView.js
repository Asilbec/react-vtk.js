import { useState, useRef, useEffect } from "react";

import "@kitware/vtk.js/Rendering/Profiles/Geometry";

import vtkFullScreenRenderWindow from "@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow";

import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";
import vtkMapper from "@kitware/vtk.js/Rendering/Core/Mapper";
import vtkConeSource from "@kitware/vtk.js/Filters/Sources/ConeSource";
import vtkITKHelper from "vtk.js/Sources/Common/DataModel/ITKHelper";
import vtkResourceLoader from "vtk.js/Sources/IO/Core/ResourceLoader";
import vtkLiteHttpDataAccessHelper from "vtk.js/Sources/IO/Core/DataAccessHelper/LiteHttpDataAccessHelper";

function App() {
  const vtkContainerRef = useRef(null);
  const context = useRef(null);
  const [coneResolution, setConeResolution] = useState(6);
  const [representation, setRepresentation] = useState(2);

  useEffect(() => {
    if (!context.current) {
      const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
        rootContainer: vtkContainerRef.current,
      });

      const mapper = vtkMapper.newInstance();

      const actor = vtkActor.newInstance();
      actor.setMapper(mapper);

      const renderer = fullScreenRenderer.getRenderer();
      const renderWindow = fullScreenRenderer.getRenderWindow();

      async function update() {
        const volumeArrayBuffer = await vtkLiteHttpDataAccessHelper.fetchBinary(
          `https://data.kitware.com/api/v1/file/5d2a36ff877dfcc902fae6d9/download`
        );

        const { image: itkImage, webWorker } =
          await window.itk.readImageArrayBuffer(
            null,
            volumeArrayBuffer,
            "knee.mha"
          );
        webWorker.terminate();

        const vtkImage = vtkITKHelper.convertItkToVtkImage(itkImage);

        mapper.setInputData(vtkImage);
        renderer.addVolume(actor);
        renderer.resetCamera();
        renderWindow.render();
        context.current = {
          fullScreenRenderer,
          renderWindow,
          renderer,
          actor,
          vtkImage,
          mapper,
        };
      }
      update();
    }

    return () => {
      if (context.current) {
        const { fullScreenRenderer, coneSource, actor, mapper } =
          context.current;
        actor.delete();
        mapper.delete();
        coneSource.delete();
        fullScreenRenderer.delete();
        context.current = null;
      }
    };
  }, [vtkContainerRef]);

  useEffect(() => {
    if (context.current) {
      const { coneSource, renderWindow } = context.current;
      coneSource.setResolution(coneResolution);
      renderWindow.render();
    }
  }, [coneResolution]);

  useEffect(() => {
    if (context.current) {
      const { actor, renderWindow } = context.current;
      actor.getProperty().setRepresentation(representation);
      renderWindow.render();
    }
  }, [representation]);

  return (
    <div>
      <div ref={vtkContainerRef} />
    </div>
  );
}

export default App;
