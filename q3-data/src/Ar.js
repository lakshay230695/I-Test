import React from 'react';
import ReactGA from 'react-ga';
function Ar () {

    const clickHandler = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Click the button'
        })
        alert('Send the information to google analytics')
    }
    return (
        <div>
            <h1>Inspace's Augmented Reality</h1>

            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default Ar