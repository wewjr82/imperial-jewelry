import "./Nav.css";

function Nav() {
  return (
    <nav className="menu-container">
      {/* burger menu */}
      <input type="checkbox" aria-label="Toggle menu" />
      <span></span>
      <span></span>
      <span></span>

      {/* menu items */}
      <div className="menu">
        <ul>
          <li>
            <a href="#">JEWELRY</a>
          </li>
          <li>
            <a href="#">GEMSTONES</a>
          </li>
          <li>
            <a href="#">DESIGN YOUR OWN</a>
          </li>
          <li>
            <a href="#">OUR STORY</a>
          </li>
          <li>
            <a href="#">GIFTS</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
        <ul></ul>
      </div>
    </nav>
  );
}

export default Nav;
