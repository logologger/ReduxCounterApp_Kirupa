import React , { Component } from 'react';


class Counter extends Component {
    render() {
        return (
            <div className="container">
                <button className = "buttons" onClick = {this.props.decreaseCount}>
                 -
                </button>
                
                
                { this.props.countValue}

                <button className = "buttons" onClick = {this.props.increaseCount}>
                 +
                </button>
                
            
            </div>
        )
    }
}

export default Counter;