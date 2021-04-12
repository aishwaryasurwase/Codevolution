import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("Pure component");
        return (
            <div>
                <h3>Pure component</h3>
                {this.props.name}
            </div>
        )
    }
}

export default PureComp
