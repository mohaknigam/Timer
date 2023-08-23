import { Link } from "react-router-dom";

const MenuCard = () => {
  return (
    <div className="menu-card">
      <h2 className="card-heading">Choose the type of Timer</h2>
      <Link to="./normal">
        <button className="menu-btn">Normal Timer</button>
      </Link>
      <Link to="./countdown">
        <button className="menu-btn">Countdown Timer</button>
      </Link>
    </div>
  );
};

export default MenuCard;
