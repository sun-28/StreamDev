import roboflow
import matplotlib.pyplot as plt

rf = roboflow.Roboflow(api_key="")

project = rf.workspace().project("object-detection-3srwg")
model = project.version("1").model

# optionally, change the confidence and overlap thresholds
# values are percentages
model.confidence = 50
model.overlap = 25

# predict on a local image
prediction = model.predict("frame_120.jpg")

# Plot the prediction
fig = prediction.plot()

# Save the plot as an image
fig.savefig("prediction_image.png")

# Close the plot to free up memory
plt.close(fig)
