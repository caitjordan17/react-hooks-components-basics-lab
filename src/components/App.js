import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home(props) {
  return (
    <div id="home">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

function About() {/* write an <About> component here */
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <NavBar />
      <Home title="Home">
        <div id="about">
          <h1>About</h1>
        </div>
      </Home>
    </div>
  );
}

export default App;
