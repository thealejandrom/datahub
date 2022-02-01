import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*** I AM STILL TRYING TO MAKE THE LINKS IN THE HEADER AREA CLICKABLE AND BE ABLE TO
 * REDIRECT TO THE APPROPRIATE PAGE COMPONENT RENDERING. THIS IS WHERE I LEFT OFF. ***/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
