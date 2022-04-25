


export default function FeaturedWorks() {
  return (
    <div className="section section-x bg-secondary section-project pb-0" id="portfolio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-xl-7 text-center">
            <div className="section-head">
              <h5 className="heading-xs">Fetured Work</h5>
              <h2>Our mission is to deliver remarkable experiences and superior results for our clients </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <ul className="project-filter project-md">
              <li className="active" data-filter="all">All</li>
              <li data-filter="1">UI/UX</li>
              <li data-filter="2">Branding</li>
              <li data-filter="3">Development</li>
              <li data-filter="4">Photography</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="project-area">
          <div className="row project project-v5 no-gutters" id="project1">
            <div className="col-sm-6 col-lg-3 filtr-item" data-category="1">
              <a href="florida-work-single.html">
                <div className="project-item">
                  <div className="project-image">
                    <img src="images/project-a.jpg" alt=""/>
                  </div>
                  <div className="project-over">
                    <div className="project-content">
                      <h4>Landing Page </h4>
                      <p>UI/UX Design</p>
                    </div>	
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3 filtr-item" data-category="1,2">
              <a href="florida-work-single.html">
                <div className="project-item">
                  <div className="project-image">
                    <img src="images/project-b.jpg" alt=""/>
                  </div>
                  <div className="project-over">
                    <div className="project-content">
                      <h4>Landing Page </h4>
                      <p>UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3 filtr-item" data-category="3,4">
              <a href="florida-work-single.html">
                <div className="project-item">
                  <div className="project-image">
                    <img src="images/project-c.jpg" alt=""/>
                  </div>
                  <div className="project-over">
                    <div className="project-content">
                      <h4>Landing Page </h4>
                      <p>UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3 filtr-item" data-category="1,2,3">
              <a href="florida-work-single.html">
                <div className="project-item">
                  <div className="project-image">
                    <img src="images/project-d.jpg" alt=""/>
                  </div>
                  <div className="project-over">
                    <div className="project-content">
                      <h4>Landing Page </h4>
                      <p>UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3 filtr-item" data-category="2">
              <a href="florida-work-single.html">
                <div className="project-item">
                  <div className="project-image">
                    <img src="images/project-e.jpg" alt=""/>
                  </div>
                  <div className="project-over">
                    <div className="project-content">
                      <h4>Landing Page </h4>
                      <p>UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3 filtr-item" data-category="3,4">
              <a href="florida-work-single.html">
                <div className="project-item">
                  <div className="project-image">
                    <img src="images/project-f.jpg" alt=""/>
                  </div>
                  <div className="project-over">
                    <div className="project-content">
                      <h4>Landing Page </h4>
                      <p>UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3 filtr-item" data-category="1.2">
              <a href="florida-work-single.html">
                <div className="project-item">
                  <div className="project-image">
                    <img src="images/project-g.jpg" alt=""/>
                  </div>
                  <div className="project-over">
                    <div className="project-content">
                      <h4>Landing Page </h4>
                      <p>UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3 filtr-item" data-category="2,4">
              <a href="florida-work-single.html">
                <div className="project-item">
                  <div className="project-image">
                    <img src="images/project-h.jpg" alt=""/>
                  </div>
                  <div className="project-over">
                    <div className="project-content">
                      <h4>Landing Page </h4>
                      <p>UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
      </div>
    </div>
  )
}