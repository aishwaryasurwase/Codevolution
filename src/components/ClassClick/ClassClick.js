import React, { Component } from 'react'

class ClassClick extends Component {
    render() {
        const buttonClicked = () => {
            console.log("Button clicked");
        }
        return (
            <div>
                <h3>Class Event Handler</h3>
                <button onClick={buttonClicked}>Click me!</button>
            </div>
        )
    }
}

export default ClassClick
