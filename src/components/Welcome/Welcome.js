import React, {Component} from 'react';
class Welcome extends Component{
    render(){
        return <p>Welcome {this.props.name} to {this.props.location}</p>
        // return React.createElement('div', {id: 'aish'}, React.createElement('h1', null, 'crazy girls'))
    }
}
export default Welcome