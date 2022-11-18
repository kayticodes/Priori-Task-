import './App.css';
import items from './data/items';
import tasks from './data/tasks';

// import dependancies 
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'



// import pages 
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage';
import TutorialPage from './pages/TutorialPage';
import TryItPage from './pages/TryItPage';

// import SiteDate from './pages/date.js';


function App() {  
  return (
    <div className="App">
        {/* <header className="App-header"> */}
        <Router>
          <header className="App-header">
          <h1>Priori Task</h1>
            <p><cite> "I have two kinds of problems: the urgent and the important. The urgent are not important, and the important are never urgent."  </cite> - Dr J. Roscoe Miller</p>

          </header>
            <NavBar />
            <main className='App-main'>
            <Route path="/" exact><HomePage /></Route>
            <Route path="/about" exact><AboutPage/></Route>
            <Route path="/how" exact><TutorialPage/></Route>
            <Route path="/try" exact><TryItPage tasks ={tasks}  /></Route>
            </main>
            
          </Router>

      <footer className="App-footer"> 
        <p>
          Modified on 10/17/22. &copy; Catherine Martens 2022.
        </p>
      </footer>
    </div>
  );
}

export default App;
