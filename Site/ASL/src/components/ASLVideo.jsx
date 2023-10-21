import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';

function ASLVideo() {
  const webcamRef = useRef(null);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  };

  useEffect(() => {
    const loadModel = async () => {
      const model = await tf.loadLayersModel('/english_model_js/model.json');

      // Access the webcam and process video frames
      const webcam = webcamRef.current.video;
      const video = tf.browser.fromPixels(webcam);

      async function predictFrame() {
        const prediction = model.predict(video);
        // Log the prediction to the console
        console.log('Model Prediction:', prediction.dataSync());
        prediction.dispose(); // Dispose to avoid memory leaks
        requestAnimationFrame(predictFrame);
      }

      predictFrame();
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
