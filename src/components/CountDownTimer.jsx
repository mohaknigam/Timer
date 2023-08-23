import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import InputField from "./InputField";

const CountDownTimer = () => {
  const [time, setTime] = useState(0);

  const [isPause, setIsPause] = useState(true);
  const [pausebtn, setPausebtn] = useState(true);

  useEffect(() => {
    let timer;
    if (!isPause && time === 0) {
      timer = setTimeout(() => {
        alert("Great! Time Complete");
        setIsPause(true);
      }, 100); // Delayed alert by 100 milliseconds
    }

    if (!isPause && time !== 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPause, time]);

  const timerFun = (sec) => {
    const d = new Date(0);
    d.setSeconds(sec);

    return d.toISOString().slice(11, 19);
  };

  const handleStart = () => {
    setIsPause(false);
  };
  const handlePause = () => {
    setPausebtn(!pausebtn);
    pausebtn === true ? setIsPause(true) : setIsPause(false);
  };
  const handleReset = () => {
    setIsPause(true);
    setTime(0);
    setPausebtn(true);
  };

  return (
    <div className="normal-timer-container">
      <div className="normal-card">
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
        <h2 className="timer-heading">Your Timer</h2>
        <InputField
          title={"Seconds"}
          setTime={setTime}
          setIsPause={setIsPause}
        />
        <h3 className="watch">{timerFun(time)}</h3>
        <div className="btn-container">
          <button className="btn" onClick={handleStart}>
            Start
          </button>
          <button className="btn" onClick={handlePause}>
            {pausebtn ? "Pause" : "Resume"}
          </button>
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
