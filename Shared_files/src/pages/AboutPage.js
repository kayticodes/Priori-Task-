import React from 'react'
import { Link } from 'react-router-dom';



function AboutPage() {
    return (
        <>
        <article className='App-article'>
            
            <h2> About Us </h2>
            <p> Many times it can feel like there is too much to do, not enough time, everyone wants something from you, and you're left with the left overs. 
                With Priori Task on your team, you can say "GOOD BYE and GOOD RIDDENS " to that life style. Here at Priori Task, we're all about simplification and like to ask the 
                question, "What would this look like if it were simple?" Keep in mind that simple is not always easy. In the age of distraction, focusing 
                can sometimes be the hardest task of all. That is why Priori Task not only helps you to prioritize your tasks but also to gamify them!  </p>
            <p>We use the help of the Eisenhower Decision Matrix and a few helpful algorithms to help you decide what to work on first and what to schedule next. </p>
            <Link className="App-link" to="/how">Click Here for a Step-by-Step Tutorial</Link>
            <h3></h3>
            <button> Go Back 1 page</button>
            <button>Go Forward 1 page</button>
        </article>
        </>
    );
}

export default AboutPage; 