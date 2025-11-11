import { useState, useEffect } from "react";
import style from "./UseEffect.module.css";
function UseEffectForTitle() {
  // Declare a state variable for the count
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Evangadi: ${count}`;
  }, [count]);

  useEffect(() => {
    alert("Component is mounted");
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={style.containerStyle}>
      <button className={style.buttonStyle} onClick={handleClick}>
        Click Here
      </button>
      <h2> Count Displayer: {count} </h2>
    </div>
  );
}

export default UseEffectForTitle;
