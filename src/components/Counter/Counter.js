import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    render() {
        // const incrementCountHandler = () => {
        //     let currentCount = this.state.count;
        //     this.setState({
        //         count: currentCount + 1
        //     })
        //     // this.state.count = this.state.count + 1;0
        //     // console.log(this.state.count);
        // }
        const incrementCountHandler = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1
            }))
            // this.state.count = this.state.count + 1;
            // console.log(this.state.count);
        }

        const incrementFive = () => {
            incrementCountHandler();
            incrementCountHandler();
            incrementCountHandler();
            incrementCountHandler();
            incrementCountHandler();
        }
        const decrementCountHandler = () => {
            let currentCount = this.state.count;
            this.setState({
                count: currentCount - 1
            })
        }

        return (
            <div>
                <h3>Count: {this.state.count} </h3>
                <button onClick={incrementFive} style={{ 'marginRight': '16px' }}>Increment</button>
                <button onClick={decrementCountHandler}>Decrement</button>
            </div>
        )
    }
}

export default Counter
