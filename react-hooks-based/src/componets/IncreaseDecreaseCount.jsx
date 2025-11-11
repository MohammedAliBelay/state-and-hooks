import { useState } from "react";
import style from "./IncreaseDecreaseCount.module.css";

function IncreaseDecreaseCount() {
  // Declare state variable with an initial value of 0
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className={style.containerStyle}>
      <h1 className={style.countbg}>
        Initial Click Counts (የመጀመሪያ ክሊክ ብዛት): {count}
      </h1>
      <div>
        <button className={style.buttonStyle} onClick={reset}>
          Reset Count
        </button>
        <button className={style.buttonStyle} onClick={increase}>
          Increase Count
        </button>
        <button className={style.buttonStyle} onClick={decrease}>
          Decrease Count
        </button>
      </div>
    </div>
  );
}

export default IncreaseDecreaseCount;
