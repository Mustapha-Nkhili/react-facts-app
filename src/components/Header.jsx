import reactLogo from "../assets/react.svg";
export default function Header() {
  
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "light");
    } else {
      document.querySelector("body").setAttribute("data-theme", "dark");
    }
  };
  return (
    <nav className="nav">
      <img src={reactLogo} alt="this is the react logo" className="nav-logo" />
      <h3>ReactFacts</h3>
      <label htmlFor="themeToggle">
        <input
          type="checkbox"
          id="themeToggle"
          className="theme-toggle-btn"
          onChange={switchTheme}
        />
      </label>
    </nav>
  );
}
