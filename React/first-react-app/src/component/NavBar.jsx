import "./NavBar.css";
const NarBar = (props) => {
  return (
    <nav className="nav-container">
      <h1>My react app</h1>
      <ul className={props.class}>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NarBar;
