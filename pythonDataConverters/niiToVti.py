import sys

# import paraview.vtk.io as vtk_io
import SimpleITK as sitk

from vtk import vtkStructuredPointsReader
from vtk import vtkXMLImageDataWriter

niiImageFileName = 'image.nii'
vtpImageFileName = 'image.vtk'
vtiImageFileName = 'image.vti'

#convert .nii to .vtp

niiReader = sitk.ImageFileReader()
niiReader.SetImageIO("NiftiImageIO")
niiReader.SetFileName(niiImageFileName)
niiImage = niiReader.Execute()

vtpWriter = sitk.ImageFileWriter()
vtpWriter.SetFileName(vtpImageFileName)
vtpWriter.Execute(niiImage)

print('--------- .nii converted to .vtk ---------')

#convert .vtp to .vtk

vtpReader = vtkStructuredPointsReader()
vtpReader.SetFileName(vtpImageFileName)

vtiWriter = vtkXMLImageDataWriter()
vtiWriter.SetInputConnection(vtpReader.GetOutputPort())

vtiWriter.SetFileName(vtiImageFileName)
vtiWriter.Write()
print('--------- .vtk converted to .vti ---------')
