import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp.jsx';
import './index.css';
// import { CounterApp } from './01-useState/CounterApp.jsx';
import { CounterWhitCustomHook } from './01-useState/CounterWhitCustomHook.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksApp />
    {/* <CounterApp /> */}
    { <CounterWhitCustomHook /> }
  </React.StrictMode>,
)
