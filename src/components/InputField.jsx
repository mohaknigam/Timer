import { useState } from "react";

const InputField = ({ title, setTime, setIsPause }) => {
  const [text, setText] = useState("");
  const handleClick = () => {
    setTime(text);
    setText("");
    // setIsPause(true);
  };
  return (
    <div className="input-container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-box"
        placeholder={title}
      />
      <button className="input-btn" onClick={handleClick}>
        Set {title}
      </button>
    </div>
  );
};

export default InputField;
