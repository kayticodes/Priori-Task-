import React from 'react'
import { Link} from 'react-router-dom';



function HomePage() {
    return (
   
        <>
        <article className='App-article'>
            
            <h2> It's easy to feel scattered </h2>
            <p> When feeling overwhelmed, use Priori Task to help you turn your to-dos into ta-das! </p>
            <Link className="App-link" to="/how">Learn how Priori Task works</Link>
           
            <h3></h3>
            <button> Go Back 1 page</button>
            <button>Go Forward 1 page</button>
        </article>

        </>
       
    );
}

export default HomePage; 