import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Doesn't have to be called App, it just needs to start with an Uppercase letter
function App() {
  // Never nest components inside a div, always use a fragment
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// React Components are just functions that return JSX
// JSX is a syntax extension for JavaScript
// It describes what the UI should look like and how it should behave
// Basically HTML, CSS and JS combined
// Note: React can be used without JSX, but it's not recommended
// Function name needs to start with an Uppercase letter
// Function needs to return markup like JSX or null or html elements
function Manqoosha() {
  return (
    <div className="manqoosha">
      <img src="images/Cheese Manakeesh.jpeg" alt="Cheese Manqoosha" />
      <h3>Cheese Manqoosha</h3>
      <p>Bread with olive oil topped with cheese</p>
    </div>
  );
}

function Header() {
  // {} for JS mode, {} for object
  // attribute: 'value'
  return (
    <header>
      <h1>Yummy Triangles</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Manqoosha />
      <Manqoosha />
      <Manqoosha />
      <Manqoosha />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour > openHour && hour < closeHour;
  return (
    <footer>
      {new Date().toLocaleTimeString()}.
      {isOpen ? `We're currently open` : `We're currently closed`}
    </footer>
  );
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
