import Footer from '../footer/footer';

function Page404() : JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--page-not-found">
        <div className="page__page-not-found-container container">
          <section className="page-not-found">
            <h1 className="visually-hidden">Page not found</h1>
            <div className="page-not-found__wrapper">
              <b className="page-not-found__status">404</b>
              <p className="page-not-found__text">Oops! Page not found.</p>
              <a className="page-not-found__link">Go back home</a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page404;
