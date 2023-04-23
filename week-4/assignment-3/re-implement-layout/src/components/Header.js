import React from "react";
function Header() {
  const [showMenu, setShowMenu] = React.useState(false);

  function handleOpenMenu() {
    setShowMenu(true);
  }

  function handleCloseMenu() {
    setShowMenu(false);
  }

  return (
    <header>
      <h1>Website Title / Logo</h1>
      <nav className="navbar">
        <div className="hamburger" onClick={handleOpenMenu}></div>
        <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
          <span className="close-button" onClick={handleCloseMenu}>
            X
          </span>
          <li className="nav-item">
            <a href="https://reactjs.org" className="nav-link">
              item 1
            </a>
          </li>
          <li className="nav-item">
            <a href="https://reactjs.org" className="nav-link">
              item 2
            </a>
          </li>
          <li className="nav-item">
            <a href="https://reactjs.org" className="nav-link">
              item 3
            </a>
          </li>
          <li className="nav-item">
            <a href="https://reactjs.org" className="nav-link">
              item 4
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
