import React from 'react';
import { Link } from 'react-router-dom';
import TaskTable from '../components/TaskTable';



function TryItPage() {
    const home = () => {
        if(window.confirm("Are you sure you want to leave the demo? Your edits won't be saved")) {
         <Link className="App-link" to="/how">Learn how Priori Task works</Link>
        };
    }
    return (
        <>
        <article className='App-article'>
            
            <h2> Demo Priori Task Hands On!</h2>
            <p>We use the help of the Eisenhower Decision Matrix and a few helpful algorithms to help you decide what to work on first and what to schedule next. </p>
            {/* <TaskTable tasks={ tasks } /> */}
            <h2>Create a Task</h2>
            <Link >Enter Name </Link>
            <p></p>
            <Link >Rank Priority</Link>
            <p></p>
            <Link >Set Due Date</Link>
            <p></p>
            <Link >Estimate Time Needed</Link>
            <p></p>
            <Link >Add a Description</Link>
            <p></p>
            <h2>Start a Work Block</h2>
            <Link >Enter Time Alloted</Link>
            <p></p>
            <Link >Generate Priori Tasks</Link>
            <p></p>
            <Link >Start</Link>
            <p></p>
           
            <button onClick={home} to="/">Click Here to go home</button>
            <h3></h3>
            <button> Go Back 1 page</button>
            <button>Go Forward 1 page</button>
        </article>
        </>
    );
}

export default TryItPage; 