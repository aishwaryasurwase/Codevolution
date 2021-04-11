import { Component } from "react";

class Message extends Component {
    state = {
        text: 'Welcome Visitors'
    }

    render() {
        const subscribeHandler = () => {
            this.setState({ text: 'Thank you for subscribing' });
        }
        return (
            <div>
                <p>{this.state.text}</p>
                <button type="button" onClick={subscribeHandler}>Subscribe</button>
            </div>
        )
    }
}
export default Message;