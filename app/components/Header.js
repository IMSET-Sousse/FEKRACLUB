const Header = () => {
    return (
      <header className="header-area header-sticky">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <nav className="main-nav">
                          <a href="index.html" className="logo">FEK<em>ra</em></a>
                          <ul className="nav">
                              <li><a href="index.html" className="active">accueil</a></li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="rent-venue.html">Rent Venue</a></li>
                              <li><a href="shows-events.html">Shows & Events</a></li> 
                              <li><a href="tickets.html">Tickets</a></li> 
                          </ul>        
                          <a className='menu-trigger'>
                              <span>Menu</span>
                          </a>
                      </nav>
                  </div>
              </div>
          </div>
      </header>
    )
  }

export default Header