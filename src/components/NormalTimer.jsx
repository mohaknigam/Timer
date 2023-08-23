import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/App.css";
import "../styles/DarkTheme.css";

const NormalTimer = () => {
  const [time, setTime] = useState(0);
  const [isPause, setIsPause] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    let timer;

    if (!isPause) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      console.log("return");
      clearInterval(timer);
    };
  }, [isPause]);

  const timerFun = (sec) => {
    const d = new Date(0);
    d.setSeconds(sec);

    return d.toISOString().substring(11, 19);
  };

  const handleStart = () => {
    setIsPause(false);
  };
  const handlePause = () => {
    isPause ? setIsPause(false) : setIsPause(true);
  };
  const handleReset = () => {
    setIsPause(true);
    setTime(0);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "App dark-theme" : "normal-timer-container"}>
      <div className="normal-card">
        <button className="btn" onClick={toggleTheme}>
          {isDark ? "Light Theme" : "Dark Theme"}
        </button>
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
        <h2 className="timer-heading">Your Timer</h2>
        <h3 className="watch">{timerFun(time)}</h3>
        <div className="btn-container">
          <button className="btn" onClick={handleStart}>
            Start
          </button>
          <button className="btn" onClick={handlePause}>
            {isPause && time !== 0 ? "Resume" : "Pause"}
          </button>
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default NormalTimer;
