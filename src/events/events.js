
import Link from 'next/link'
import Header from "../../widgets/header/header";
import BannerInner from "../../components/bannerInner/banner";
import Footer from "../../widgets/footer/footer";


function EventsPage() {
  return ( 
    <>
      <header className="is-transparent is-sticky is-shrink" id="header">
        <Header/>
        <BannerInner root="Home" path="Events" pathName="Events"/>
      </header>

      <div className="section section-x section-project" id="project">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <div className="section-head section-sm mtm-10">
                <h2>Events</h2>
                <h4>All events</h4>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className="project-area">
            <div className="row project project-v5 no-gutters" id="project1">
              <div className="col-sm-4 col-md-3 filtr-item" data-category="1">
                <Link href="/events/1" passHref>
                  <div className="project-item">
                    <div className="project-image">
                      <img src="images/project-a.jpg" alt=""/>
                    </div>
                    <div className="project-over">
                      <div className="project-content">
                        <h4>Event Name </h4>
                        <p>Event Details</p>
                      </div>	
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-4 col-md-3 filtr-item" data-category="1,2">
                <Link href="/events/1" passHref>
                  <div className="project-item">
                    <div className="project-image">
                      <img src="images/project-b.jpg" alt=""/>
                    </div>
                    <div className="project-over">
                      <div className="project-content">
                        <h4>Event Name </h4>
                        <p>Event Details</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-4 col-md-3 filtr-item" data-category="3,4">
                <Link href="/events/1" passHref>
                  <div className="project-item">
                    <div className="project-image">
                      <img src="images/project-c.jpg" alt=""/>
                    </div>
                    <div className="project-over">
                      <div className="project-content">
                        <h4>Event Name </h4>
                        <p>Event Details</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-4 col-md-3 filtr-item" data-category="1,2,3">
                <Link href="/events/1" passHref>
                  <div className="project-item">
                    <div className="project-image">
                      <img src="images/project-d.jpg" alt=""/>
                    </div>
                    <div className="project-over">
                      <div className="project-content">
                        <h4>Event Name </h4>
                        <p>Event Details</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-4 col-md-3 filtr-item" data-category="2">
                <Link href="/events/1" passHref>
                  <div className="project-item">
                    <div className="project-image">
                      <img src="images/project-e.jpg" alt=""/>
                    </div>
                    <div className="project-over">
                      <div className="project-content">
                        <h4>Event Name </h4>
                        <p>Event Details</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-4 col-md-3 filtr-item" data-category="3,4">
                <Link href="/events/1" passHref>
                  <div className="project-item">
                    <div className="project-image">
                      <img src="images/project-f.jpg" alt=""/>
                    </div>
                    <div className="project-over">
                      <div className="project-content">
                        <h4>Event Name </h4>
                        <p>Event Details</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-4 col-md-3 filtr-item" data-category="1.2">
                <Link href="/events/1" passHref>
                  <div className="project-item">
                    <div className="project-image">
                      <img src="images/project-g.jpg" alt=""/>
                    </div>
                    <div className="project-over">
                      <div className="project-content">
                        <h4>Event Name </h4>
                        <p>Event Details</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-4 col-md-3 filtr-item" data-category="2,4">
                <Link href="/events/1" passHref>
                  <div className="project-item">
                    <div className="project-image">
                      <img src="images/project-h.jpg" alt=""/>
                    </div>
                    <div className="project-over">
                      <div className="project-content">
                        <h4>Event Name </h4>
                        <p>Event Details</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      
      <div className="section section-cta section-cta-alt tc-light section-x">
        <div className="container">
          <div className="row gutter-vr-30px align-items-center justify-content-between">
            <div className="col-lg-8 text-center text-lg-left">
              <div className="cta-text cta-text-s3">
                <h2><strong>How can we help you?</strong> Tell us what you are interested in.</h2>
              </div>
            </div>
            <div className="col-lg-3 text-lg-right text-center">
              <div className="cta-btn cta-btn-s3">
                <a href="florida-contact.html" className="btn btn-outline">Contact us</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-image overlay-blue bg-fixed">
          <img src="images/bg-j.jpg" alt=""/>
        </div>
        
      </div>
      
      <Footer/>
    </>
  );
}

export default EventsPage;