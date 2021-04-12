import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <h3>Child to Parent Communication using method as props</h3>
            <button onClick={() =>props.buttonClicked("New Child")}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
