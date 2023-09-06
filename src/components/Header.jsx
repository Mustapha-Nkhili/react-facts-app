import reactLogo from "../assets/react.svg";
export default function Header() {
  return (
    <nav className="nav">
      <img src={reactLogo} alt="this is the react logo" className="nav-logo" />
      <h3>ReactFacts</h3>
      <h4>React course - project 1</h4>
    </nav>
  );
}
