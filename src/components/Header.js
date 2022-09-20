import Button from "./Button";

const Header = ({ title, onAddBtn }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="blue" text="Add" onClick={onAddBtn} />
    </header>
  );
};

export default Header;
