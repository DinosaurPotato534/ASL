import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage'

import ASLVideo from './components/ASLVideo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage /> 
    {/*<ASLVideo />*/}
  </React.StrictMode>,
)
