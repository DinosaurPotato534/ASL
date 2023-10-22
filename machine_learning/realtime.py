import cv2
import numpy as np
import tensorflow as tf
import tensorflow_hub as hub

# Load the TensorFlow model and labels
model = tf.keras.models.load_model('models/epoch5_custom_model', custom_objects={'KerasLayer': hub.KerasLayer})
labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'del', 'nothing', 'space']

# Initialize the webcam
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()

    if not ret:
        print("Failed to grab frame")
        break

    # Preprocess the image
    frame = cv2.resize(frame, (224, 224))  # Resize to match model input size
    frame = frame / 255.0  # Normalize pixel values to [0, 1]

    # Make a prediction
    predictions = model.predict(np.expand_dims(frame, axis=0))
    highest_prediction_idx = np.argmax(predictions)

    # Get the corresponding label
    highest_prediction_label = labels[highest_prediction_idx]

    # Display the prediction in the console
    print("Highest Prediction: ", highest_prediction_label)

    # Display the frame
    cv2.imshow('Webcam Feed', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam and close OpenCV windows
cap.release()
cv2.destroyAllWindows()
