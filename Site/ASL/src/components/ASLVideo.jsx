import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';

function ASLVideo() {
  const webcamRef = useRef(null);
  const videoConstraints = {
    width: 224,
    height: 224,
    facingMode: 'user',
  };

  useEffect(() => {
    const loadModel = async () => {
      try {
        const model = await tf.loadLayersModel('/english_model_js/model.json');

        async function predictFrame() {
          try {
            // Access the webcam and process video frames
            const webcam = webcamRef.current.video;
            const frame = tf.browser.fromPixels(webcam);

            // Resize the captured frame to [224, 224]
            const resizedFrame = tf.image.resizeBilinear(frame, [224, 224]);

            // Ensure that the frame has 3 color channels
            const frameWithRGB = tf.tidy(() => {
              if (resizedFrame.shape[2] === 3) {
                return resizedFrame;
              }
              return tf.concat([resizedFrame, resizedFrame, resizedFrame], 2);
            });

            // Perform predictions using the model
            const prediction = model.predict(frameWithRGB);

            // Log the prediction to the console
            console.log('Model Prediction:', prediction.dataSync());

            // Dispose of tensors to avoid memory leaks
            frame.dispose();
            resizedFrame.dispose();
            frameWithRGB.dispose();
            prediction.dispose();
          } catch (error) {
            console.error('Error in predictFrame:', error);
          }

          // Request the next frame
          requestAnimationFrame(predictFrame);
        }

        predictFrame();
      } catch (error) {
        console.error('Error loading the model:', error);
      }
    };

    loadModel();
  }, []);

  return (
    <div className="main">
      <Webcam
        audio={false}
        className="video-element"
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        ref={webcamRef}
      />
    </div>
  );
}

export default ASLVideo;
