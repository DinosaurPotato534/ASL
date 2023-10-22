import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage'
import VideoPage from './components/VideoPage'
<<<<<<< Updated upstream
import ASLVideo from './components/ASLVideo'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VideoPage />
  </React.StrictMode>,
=======
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/video" component={VideoPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> Stashed changes
);