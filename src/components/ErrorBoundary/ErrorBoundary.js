import React, { Component } from 'react'

class ErrorBoundary extends Component {
    render() {
        if (this.props.heroname === 'Joker') {
            throw new Error('Not a hero');
        }
        return (
            <div>
                {this.props.heroname}
            </div>
        )
    }
}
y



export default ErrorBoundary

