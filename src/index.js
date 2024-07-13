import React from 'react';
import ReactDOM from 'react-dom/client';

// Doesn't have to be called App, it just needs to start with an Uppercase letter
function App() {
  // Never nest components inside a div, always use a fragment
  return <h1>Hello React!</h1>;
}

// React Components are just functions that return JSX
// Function name needs to start with an Uppercase letter
// Function needs to return markup like JSX or null or html elements
function Pizza() {
  return <h2>Pizza</h2>;
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
React.render(<App />, document.getElementById('root'));
And don't use ReactDOM/client
*/
