import React, { Component } from 'react'

class RegularComponent extends Component {
    render() {
        console.log("Regular component");
        return (
            <div>
                <h3>Regular component</h3>
                {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
