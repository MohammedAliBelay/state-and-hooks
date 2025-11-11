import { Component } from "react";

class EvenCounterDisplayer extends Component {
  render() {
    const { clicks } = this.props;
    const evenCount = clicks % 2 === 0 ? clicks : clicks - 1;

    return (
      <div>
        <h2>Even Clicks Counter: {evenCount} </h2>
      </div>
    );
  }
}

export default EvenCounterDisplayer;
