import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';

const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'del', 'nothing', 'space'];

const confidenceThreshold = 0.5;

function ASLVideo() {
  const webcamRef = useRef(null);
  const videoConstraints = {
    width: 224,
    height: 224,
    facingMode: 'user',
  };
  const [bestPrediction, setBestPrediction] = useState({ label: 'Undeterminable', confidence: 0 });
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const model = await tf.loadGraphModel('/english_model_js/model.json');
        setModelLoaded(true);

        async function predictFrame() {
          try {
            const webcam = webcamRef.current.video;
            const frame = tf.browser.fromPixels(webcam);
            const resizedFrame = tf.image.resizeBilinear(frame, [224, 224]); // Ensure resizing to the input size
            const frameWithRGB = tf.tidy(() => {
              if (resizedFrame.shape[2] === 3) {
                return resizedFrame;
              }
              return tf.concat([resizedFrame, resizedFrame, resizedFrame], 2);
            });

            const normalizedFrame = frameWithRGB.toFloat().div(tf.scalar(255.0));
            const inputTensor = normalizedFrame.reshape([-1, 224, 224, 3]);

            const prediction = model.predict(inputTensor);
            const predictionData = prediction.dataSync();

            const bestIndex = predictionData.indexOf(Math.max(...predictionData));
            const bestLabel = labels[bestIndex];
            const confidence = predictionData[bestIndex];

            if (confidence >= confidenceThreshold) {
              setBestPrediction({ label: bestLabel, confidence: confidence });
            } else {
              setBestPrediction({ label: 'Undeterminable', confidence: 0 });
            }

            frame.dispose();
            resizedFrame.dispose();
            frameWithRGB.dispose();
            normalizedFrame.dispose();
            prediction.dispose();
          } catch (error) {
            console.error('Error in predictFrame:', error);
          }

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
      {modelLoaded ? (
        <Webcam
          audio={false}
          className="video-element"
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          ref={webcamRef}
        />
      ) : (
        <div className="loading-indicator">Loading model...</div>
      )}
      <div className="best-prediction">
        <h2>Best Prediction:</h2>
        <p>
          Label: {bestPrediction.label}
          <br />
          Confidence: {bestPrediction.confidence.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default ASLVideo;
