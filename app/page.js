import Image from 'next/image'
import styles from './page.module.css'
import Header from "./components/Header.js"
import MainBanner from './components/MainBanner'

export default function Home() {
  return (
    <>
    <div className="pre-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-6">
                    <span>Hey! The Show is Starting in 15 Days.</span>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="text-button">
                        <a href="rent-venue.html">Contact Us Now! <i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <Header/>
    <MainBanner/>
    
    <div className="show-events-carousel">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="owl-show-events owl-carousel">
                        <div className="item">
                            <a href="event-details.html">
                              <img src="/images/show-events-01.jpg" alt=""/>
                              </a>
                        </div>
                        <div className="item">
                            <a href="event-details.html"><img src="/images/show-events-02.jpg" alt=""/></a> 
                        </div>
                        <div className="item">
                            <a href="event-details.html"><img src="/images/show-events-03.jpg" alt=""/></a> 
                        </div>
                        <div className="item">
                            <a href="event-details.html"><img src="/images/show-events-04.jpg" alt=""/></a> 
                        </div>
                        <div className="item">
                            <a href="event-details.html"><img src="/images/show-events-01.jpg" alt=""/></a> 
                        </div>
                        <div className="item">
                            <a href="event-details.html"><img src="/images/show-events-02.jpg" alt=""/></a> 
                        </div>
                        <div className="item">
                            <a href="event-details.html"><img src="/images/show-events-03.jpg" alt=""/></a> 
                        </div>
                        <div className="item">
                            <a href="event-details.html"><img src="/images/show-events-04.jpg" alt=""/></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="amazing-venues">
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="left-content">
                        <h4>Three Amazing Venues for events</h4>
                        <p>ArtXibition Event Template is brought to you by Tooplate website and it included total 7 HTML pages. 
                        These are <a href="index.html">Homepage</a>, <a href="about.html">About</a>, 
                        <a href="rent-venue.html">Rent a venue</a>, <a href="shows-events.html">shows &amp; events</a>, 
                        <a href="event-details.html">event details</a>, <a href="tickets.html">tickets</a>, and <a href="ticket-details.html">ticket details</a>. 
                        You can feel free to modify any page as you like. If you have any question, please visit our <a href="https://www.tooplate.com/contact" target="_blank">Contact page</a>.</p>
                        <br/>
                        <p>You can use this event template for your commercial or business website. You are not permitted to redistribute this template ZIP file on any template download website. If you need the latest HTML templates, you may visit <a href="https://www.toocss.com/" target="_blank">Too CSS</a> website that features a great collection of templates in different categories.</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="right-content">
                        <h5><i className="fa fa-map-marker"></i> Visit Us</h5>
                        <span>5 College St NW, <br/>Norcross, GA 30071<br/>United States</span>
                        <div className="text-button"><a href="show-events-details.html">Need Directions? <i className="fa fa-arrow-right"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="map-image">
        <img src="/images/map-image.jpg" alt="Maps of 3 Venues"/>
    </div>


    <div className="venue-tickets">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>Our Venues & Tickets</h2>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="venue-item">
                        <div className="thumb">
                            <img src="/images/venue-01.jpg" alt=""/>
                        </div>
                        <div className="down-content">
                            <div className="left-content">
                                <div className="main-white-button">
                                    <a href="ticket-details.html">Purchase Tickets</a>
                                </div>
                            </div>
                            <div className="right-content">
                                <h4>Radio City Musical Hall</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur vinzi iscing elit, sed doers kontra.</p>
                                <ul>
                                    <li><i className="fa fa-sitemap"></i>250</li>
                                    <li><i className="fa fa-user"></i>500</li>
                                </ul>
                                <div className="price">
                                    <span>1 ticket<br/>from <em>$45</em></span>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="venue-item">
                        <div className="thumb">
                            <img src="/images/venue-02.jpg" alt=""/>
                        </div>
                        <div className="down-content">
                            <div className="left-content">
                                <div className="main-white-button">
                                    <a href="ticket-details.html">Purchase Tickets</a>
                                </div>
                            </div>
                            <div className="right-content">
                                <h4>Madison Square Garden</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur vinzi iscing elit, sed doers kontra.</p>
                                <ul>
                                    <li><i className="fa fa-sitemap"></i>450</li>
                                    <li><i className="fa fa-user"></i>650</li>
                                </ul>
                                <div className="price">
                                    <span>1 ticket<br/>from <em>$55</em></span>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="venue-item">
                        <div className="thumb">
                            <img src="/images/venue-03.jpg" alt=""/>
                        </div>
                        <div className="down-content">
                            <div className="left-content">
                                <div className="main-white-button">
                                    <a href="ticket-details.html">Purchase Tickets</a>
                                </div>
                            </div>
                            <div className="right-content">
                                <h4>Royce Hall</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur vinzi iscing elit, sed doers kontra.</p>
                                <ul>
                                    <li><i className="fa fa-sitemap"></i>450</li>
                                    <li><i className="fa fa-user"></i>750</li>
                                </ul>
                                <div className="price">
                                    <span>1 ticket<br/>from <em>$65</em></span>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="coming-events">
        <div className="left-button">
            <div className="main-white-button">
                <a href="shows-events.html">Discover More</a>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="event-item">
                        <div className="thumb">
                            <a href="event-details.html"><img src="/images/event-01.jpg" alt=""/></a>
                        </div>
                        <div className="down-content">
                            <a href="event-details.html"><h4>Radio City Musical Hall</h4></a>
                            <ul>
                                <li><i className="fa fa-clock-o"></i> Tuesday: 15:30-19:30</li>
                                <li><i className="fa fa-map-marker"></i> Copacabana Beach, Rio de Janeiro</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="event-item">
                        <div className="thumb">
                            <a href="event-details.html"><img src="/images/event-02.jpg" alt=""/></a>
                        </div>
                        <div className="down-content">
                            <a href="event-details.html"><h4>Madison Square Garden</h4></a>
                            <ul>
                                <li><i className="fa fa-clock-o"></i> Wednesday: 08:00-14:00</li>
                                <li><i className="fa fa-map-marker"></i> Copacabana Beach, Rio de Janeiro</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="event-item">
                        <div className="thumb">
                            <a href="event-details.html"><img src="/images/event-03.jpg" alt=""/></a>
                        </div>
                        <div className="down-content">
                            <a href="event-details.html"><h4>Royce Hall</h4></a>
                            <ul>
                                <li><i className="fa fa-clock-o"></i> Thursday: 09:00-23:00</li>
                                <li><i className="fa fa-map-marker"></i> Copacabana Beach, Rio de Janeiro</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="subscribe">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <h4>Subscribe Our Newsletter:</h4>
                </div>
                <div className="col-lg-8">
                    <form id="subscribe" action="" method="get">
                        <div className="row">
                          <div className="col-lg-9">
                            <fieldset>
                              <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                            </fieldset>
                          </div>
                          <div className="col-lg-3">
                            <fieldset>
                              <button type="submit" id="form-submit" className="main-dark-button">Submit</button>
                            </fieldset>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="address">
                        <h4>Sunny Hill Festival Address</h4>
                        <span>5 College St NW, <br/>Norcross, GA 30071<br/>United States</span>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Info</a></li>
                            <li><a href="#">Venues</a></li>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Outreach</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="hours">
                        <h4>Open Hours</h4>
                        <ul>
                            <li>Mon to Fri: 10:00 AM to 8:00 PM</li>
                            <li>Sat - Sun: 11:00 AM to 4:00 PM</li>
                            <li>Holidays: Closed</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="under-footer">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <p>São Conrado, Rio de Janeiro</p>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <p className="copyright">Copyright 2021 FEKra Company 
                    
                    			<br/>Design: <a rel="nofollow" href="https://www.tooplate.com" target="_parent">Tooplate</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="sub-footer">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="logo"><span>FEK<em>ra</em></span></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="menu">
                                    <ul>
                                        <li><a href="index.html" className="active">accueil</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="rent-venue.html">Rent Venue</a></li>
                                        <li><a href="shows-events.html">Shows & Events</a></li> 
                                        <li><a href="tickets.html">Tickets</a></li> 
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="social-links">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
