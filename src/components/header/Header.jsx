import "./Header.css";
import logo from "/src/assets/default-monochrome.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />

      <div className="register-block">
        <div className="cart">cart</div>
        <p>SHOPPING CART</p>
        <p>REGISTER</p>
        <p>SIGN IN</p>
        <div className="search">
          <input type="text" placeholder="search" />
          <div className="search-icon">icon</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
