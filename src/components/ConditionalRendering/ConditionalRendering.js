import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        let message = null;
        // if (this.state.isLoggedIn) {
        //     return <p>Welcome Aishwarya</p>
        // } else {
        //     return <p>Welcome Guest</p>
        // }
        // if (this.state.isLoggedIn) {
        //     message = "Welcome Aishwarya";
        // } else {
        //     message = "Welcome Guest";
        // }
        // return (
        //     <div>
        //         <h3>Conditional Rendering</h3>
        //         {/* <p>Welcome Aishwarya</p>
        //         <p>Welcome User</p> */}
        //         <p>{message}</p>
        //     </div>
        // )

        // return (
        //     this.state.isLoggedIn ?
        //         <p>Welcome Aishwarya</p> :
        //         <p>Welcome User</p>
        // )
        return (
            this.state.isLoggedIn &&
            <p>Welcome Aishwarya</p>
        )
    }
}

export default ConditionalRendering
