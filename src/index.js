import React from 'react';
import ReactDOM from 'react-dom/client';

// Doesn't have to be called App, it just needs to start with an Uppercase letter
function App() {
  return <h1>Hello React!</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
// StrictMode renders components twice to check for side effects
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
/*
React.render(<App />);
And don't use ReactDOM/client
*/
