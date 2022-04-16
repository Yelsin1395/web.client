const Navbar = ({ children }: any) => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-primary">
                  <strong>Crear cliente</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container is-fluid">
        <div className="columns is-multiline">{children}</div>
      </div>
    </>
  );
};

export default Navbar;
