import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ClientProxy } from '../../proxies';

const Navbar = ({ children }: any) => {
  const [averageAge, setAverageAge] = useState(null);
  const [isActiveNavMobile, setIsActiveNavMobile] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const result = await ClientProxy.getAverageAge();
        setAverageAge(result.averageAge);
      } catch (error) {
        console.error(error);
      }
    }

    fetch();
  }, [averageAge]);

  const isActiveNavMenu = () => {
    setIsActiveNavMobile(!isActiveNavMobile);
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28" />
          </div>

          <button
            className={isActiveNavMobile ? 'navbar-burger is-active' : 'navbar-burger'}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={isActiveNavMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div
          id="navbarBasicExample"
          className={isActiveNavMobile ? 'navbar-menu is-active' : 'navbar-menu'}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/create/client" className="button is-primary">
                  <strong>Crear cliente</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container is-fluid">
        <div className="columns is-multiline">
          <div className="column is-12">
            <article className="message is-primary">
              <div className="message-body">El promedio de las edades es: {averageAge} años</div>
            </article>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Navbar;
