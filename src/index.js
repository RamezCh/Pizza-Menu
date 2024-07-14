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
function Manqoosha({ manqoosha }) {
  // Order of passing props is irrelevant
  const className = manqoosha.soldOut ? 'manqoosha sold-out' : 'manqoosha';
  return (
    <div className={className}>
      <img src={manqoosha.photoName} alt={manqoosha.name} />
      <div className="manqoosha-info">
        <h3>{manqoosha.name}</h3>
        <p>{manqoosha.ingredients}</p>
        <span>${manqoosha.price}</span>
      </div>
    </div>
  );
}
// Statements aren't allowed in JSX, only expressions
function Header() {
  // {} for JS mode, {} for object
  // attribute: 'value'
  return (
    <header>
      <h1>Yummy Slices</h1>
    </header>
  );
}

function Menu() {
  // Anything can be passed into Props
  // They are like function parameters
  // Props are read-only (immutable)
  // Props are used to pass data from parent to child (One-way data flow )
  // to mutate props use state
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {manakeeshData.length > 0 ? (
        <>
          {/* React Fragments are used to return multiple elements without creating any new html tag / parent container
          You can also do <React.Fragment key=""></React.Fragment>
          When you need a key */}
          <p>
            Delicious. Budget Friendly & Fresh out of the Oven. The number one
            Bakery in the area.
          </p>
          <div className="manaqeesh">
            {manakeeshData.map(manqoosha => (
              <Manqoosha
                key={manqoosha.name}
                className="manqoosha"
                manqoosha={manqoosha}
              />
            ))}
          </div>
        </>
      ) : (
        <p>We're still working on our Menu. Please come back later.</p>
      )}
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
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
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
