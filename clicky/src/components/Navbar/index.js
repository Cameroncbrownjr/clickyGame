import React from "react";
import "./style.css";

class Counter extends React.Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            //   <div className="card text-center">
            //     <div className="card-header bg-primary text-white">
            //       Click Counter!
            //     </div>
            //     <div className="card-body">
            //       <p className="card-text">Click Count: {this.state.count}</p>
            //       <button className="btn btn-primary" onClick={this.handleIncrement}>
            //         Increment
            //       </button>{" "}
            //       <button className="btn btn-danger" onClick={this.handleDecrement}>
            //         Decrement
            //       </button>
            //     </div>
            //   </div>
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Cartoon Shuffle</span>
                <span class="navbar-brand mb-0 h1">Click an Image to Begin</span>
                <span class="navbar-brand mb-0 h1">score : {this.state.count} </span>
            </nav>
        );
    }
}

export default Counter;
