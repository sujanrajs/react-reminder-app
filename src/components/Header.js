import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAddBtn, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "blue"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAddBtn}
        />
      )}
    </header>
  );
};

export default Header;
