import React from 'react'

function EventHandler() {
    const buttonClick = () =>{
        console.log("Button clicked");
    }
    return (
        <div>
            <h3>Event Handler</h3>
            <button onClick={buttonClick}>Click Event</button>
        </div>
    )
}

export default EventHandler
