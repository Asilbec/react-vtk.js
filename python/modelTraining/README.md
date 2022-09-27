This code was used to generate models to classify COVID-19 ct images. 


## Dataset
The dataset used contains 2D axial slices from CT scans of the lungs in patients with and without COVID-19. 
https://github.com/UCSD-AI4H/COVID-CT

## Preprocessing
Images were first converted to RGB using PIL, then resized to 224, 224, 3.

## Data Augmentation
Images were randomly flipped horizontally before being sent to the model for training. 

## Performance
CNN - Achieved validation accuracy of 65%. 
Trasnfer Learning ViT - Achieved validation accuracy --%

## Transfer Learning
The ViT was fine tuned on this dataset. Original ViT: _______

## Files Explained
### load_data.py
### train_model.py
### training_loop.py
### vit.py
