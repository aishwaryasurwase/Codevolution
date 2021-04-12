import React, { Component } from 'react'
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'Angular'
        }
    }

    usernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    commentChangeHandler = event => {
        this.setState({ comments: event.target.value })
    }

    topicChangeHandler = (event) =>{
        console.log(event.target.value);
        this.setState({
            topic: event.target.value
        })
    }

    formSubmitHandler = (event) =>{
        console.log(`${this.state.username} and comment is ${this.state.comments} 
                        and Topic selected ${this.state.topic}`)    
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>Form</h3>
                <form onSubmit={this.formSubmitHandler}>
                    <div>
                        <label>Username</label><br />
                        <input type="text" className="Form" name="username" 
                        value={this.state.username} onChange={this.usernameChangeHandler} 
                        autoComplete="off"/>
                        {/* <input type="text" name="username" value={this.state.username}/> */}
                    </div>
                    <br />
                    <div>
                        <label>Comments</label><br />
                        <textarea name="comments" className="FormComment" value={this.state.comments} onChange={this.commentChangeHandler}></textarea>
                    </div>
                    <br/>
                    <div>
                        <label>Topic</label> <br/>
                        <select value={this.state.topic} onChange={this.topicChangeHandler} className="Form">
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue.js">Vue.js</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
