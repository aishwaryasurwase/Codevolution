import React, { Component } from 'react'

class RefsComponent extends Component {
    constructor(props) {
        super(props)

        // this.inputRef = React.createRef();
        this.cbRef =null;
        this.setCbRef = element =>{
            this.cbRef = element;
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus();
        if(this.cbRef){
            this.cbRef.focus();
        }
        // console.log("input ref ", this.inputRef);
    }

    clickHandler = () => {
        console.log("click handler", this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                <h3>Refs component</h3>
                {/* <input text="text" ref={this.inputRef} /> <br/><br/> */}
                <input text="text" ref={this.setCbRef} /> <br/><br/>
                <button onClick={this.clickHandler}>Click Me!</button>
            </div>
        )
    }
}

export default RefsComponent
