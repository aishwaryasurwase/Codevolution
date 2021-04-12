import React, { Component } from 'react'
import ChildComponent from '../ChildComponent/ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent component'
        }
    }


    greet = (para) => {
        alert(`Hello ${this.state.parentName} from child component as a parameter ${para}`)
    }

    render() {
        return (
            <div>
                <ChildComponent buttonClicked={this.greet} />
            </div>
        )
    }
}

export default ParentComponent
