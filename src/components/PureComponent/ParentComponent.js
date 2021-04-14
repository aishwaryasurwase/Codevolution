import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComp';
import MemoComponent from '../MemoComponent/MemoComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Aishwarya'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Aishwarya'
            })
        }, 3000)
    }

    render() {
        console.log("Parent component");
        return (
            <div>
                <h3>Parent component</h3>
                <MemoComponent />
                {/* <PureComp name={this.state.name} />
                <RegularComponent name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComponent
