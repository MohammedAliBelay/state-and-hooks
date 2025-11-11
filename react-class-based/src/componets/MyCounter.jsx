import { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";
import style from "./MyCounter.module.css";

class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  allClicksCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className={style.containerStyle}>
        <h1>Counter(መቁጠሪያ )</h1>
        <button onClick={this.allClicksCounter} className={style.buttonStyle}>
          Click Here
        </button>
        <div className={style.countersWrapper}>
          <div className={style.cardStyle1}>
            <CounterDisplayer clicks={this.state.count} />
          </div>
          <div className={style.cardStyle2}>
            <EvenCounterDisplayer clicks={this.state.count} />
          </div>
        </div>
      </div>
    );
  }
}

export default MyCounter;
