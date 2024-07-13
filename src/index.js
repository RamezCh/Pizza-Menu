import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import manakeeshData from './manakeesh.js';

// Doesn't have to be called App, it just needs to start with an Uppercase letter
function App() {
  // Never nest components inside a div, always use a fragment
  return (
    <div className="container">
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
function Manqoosha(props) {
  // Order of passing props is irrelevant
  return (
    <div className="manqoosha">
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price}</span>
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
