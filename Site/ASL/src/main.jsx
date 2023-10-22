import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage'
import VideoPageEng from './components/VideoPageEng'
import VideoPageInd from './components/VideoPageInd'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../index.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.js"
import VideoPageArab from './components/VideoPageAra'
import VideoPageSpan from './components/VideoPageSpan'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/video-eng" component={VideoPageEng} />
        <Route path="/video-ind" component={VideoPageInd} />
        <Route path="/video-arab" component={VideoPageArab} />
        <Route path="/video-span" component={VideoPageSpan} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);