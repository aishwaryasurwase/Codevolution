import React, { Component } from 'react'

class EventBind extends Component {
    // state = {
    //     message: 'Hello'
    // }
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        // this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage = () => {
        // console.log("button clicked");
        this.setState({
            message: "Good bye!"
        });
        console.log(this);
    }
    // changeMessage() {
    //     // console.log("button clicked");
    //     this.setState({
    //         message: "Good bye!"
    //     });
    //     console.log(this);
    // }
    render() {
        // function changeMessage() {
        //     // console.log("button clicked");
        //     this.setState({
        //         message: "Good bye!"
        //     });
        //     console.log(this);
        // }
        return (
            <div>
                {this.state.message}
                <br />
                <button onClick={this.changeMessage}>Click Me!</button>
                {/* <button onClick={this.changeMessage}>Click Me!</button> */}
                {/* <button onClick={() => this.changeMessage()}>Click Me!</button> */}
                {/* <button onClick={changeMessage.bind(this)}>Click Me!</button> */}
            </div>
        )
    }
}

export default EventBind
