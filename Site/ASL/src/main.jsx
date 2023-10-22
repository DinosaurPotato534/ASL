import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage'
import VideoPage from './components/VideoPage'
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
);