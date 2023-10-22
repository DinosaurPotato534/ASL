import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage'
import VideoPage from './components/VideoPage'
import ASLVideo from './components/ASLVideo'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VideoPage />
  </React.StrictMode>,
);