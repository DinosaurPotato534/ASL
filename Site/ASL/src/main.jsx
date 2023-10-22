import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage'
import VideoPage from './components/VideoPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
    <VideoPage />
  </React.StrictMode>,
);