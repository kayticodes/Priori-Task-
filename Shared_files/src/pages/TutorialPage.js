import React from 'react'
import { Link } from 'react-router-dom';



function TutorialPage() {
    const try_it = () => {
        if(window.confirm("The demo should take about 15 min. Would you like to continue?")) {
         <Link className="App-link" to="/try">Try It!</Link>
        }
        else{
            <Link className="App-link" to="/how">Stay Here!</Link>
        };
    }
    return (
        <>
        <article className='App-article'>
            
            <h2> The Priori Task Tutorial Page </h2>
            <p> </p>
            <p>We use the help of the Eisenhower Decision Matrix and a few helpful algorithms to help you decide what to work on first and what to schedule next. Here is a step by step tutorial to describe how it works: </p>
            <h3>Step #1: Add your tasks</h3>
            <p>Name your task </p>
            <p>On a scale of 1-5, rate how important this task is.</p>
            <p>Estimate how long the task will take.</p>
            <p>Establish a due date.</p>
            <p>Add a description. </p>

            <h3>Step #2: Generate a Work Block</h3>
            <p>Input how much time you have.</p>
            <p>hit start.</p>
            <p>Approve your Priori Task work block.</p>
            <p>hit start.</p>

            <h3>Step #3: Get to Working!</h3>
            <p>Approve your Priori Task work block by selecting start.</p>
            <p>The app will show what your time estimate was and how much time you've used so far.</p>
            <p>Hit the "completed" button once you're finnished with that task.</p>
            <p>Start working on the next one!</p>

            <h3>Step #4: End and Review your Session</h3>
            <p>You can pause or end your session at anytime.</p>
            <p>When you end your work block, you can review your performance and make any notes.</p>
            
            <h3>Step #5: Learn and Level Up!</h3>
            <p>As you continue to use Priori Task, we will give you insights that will help you grow.</p>
            <p>The more tasks you complete the more points you accrue.</p>
            <p>Gamify your task and try to beat your previous record.</p>
            <p>Rack up your streaks by completing tasks each day.</p>
            <p>Look back on your notes to assess your primary distractions</p>
            
            <Link onClick={try_it} to="/try">Click Here to Try a Demo</Link>
            <p></p>
            <button> Go Back 1 page</button>
            <button>Go Forward 1 page</button>
        </article>
        
        </>

    );
}

export default TutorialPage; 