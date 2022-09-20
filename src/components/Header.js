import Button from "./Button";

const Header = ({ title, onAddBtn, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "blue"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAddBtn}
      />
    </header>
  );
};

export default Header;
