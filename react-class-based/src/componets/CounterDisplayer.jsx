import { Component } from "react";

class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h2>All Clicks counter: {this.props.clicks}</h2>
      </div>
    );
  }
}

export default CounterDisplayer;

