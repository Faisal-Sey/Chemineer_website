import Header from "../../widgets/header/header";
import BannerInner from "../../components/bannerInner/banner";
import Footer from "../../widgets/footer/footer";


function AboutPage() {
  return ( 
    <>
      <header classNameName="is-transparent is-sticky is-shrink" id="header">
        <Header/>
        <BannerInner root="Home" path="Contact" pathName="Contact Us"/>
      </header>

      <div className="section section-x tc-grey-alt">
        <div className="container">
          <div className="row gutter-vr-30px align-items-center">
            <div className="col-lg-6">
              <div className="box-image">
                <img src="/images/image-n.jpg" alt=""/>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="text-block">
                <h5 className="heading-xs">We Believe</h5>
                <h2>Our Approach to Business Results </h2>
                <p>Our philosophy is rooted in the principles of financial portfolio management and drives business results through smarter marketing investments.</p>
                <p>Are you ready to start your next  project? We know that when the time comes, you need a partner that not only understands and cares about your needs, but has the in-house capabilities to efficiently complete your project.</p>
                <a href="florida-contact.html" className="btn">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section tc-light section-x section-counter">
        <div className="container">
          <div className="row align-items-center gutter-vr-30px justify-content-center">
            <div className="col-md-3 col-sm-6 col-8">
              <div className="tc-light counter">
                <div className="counter-icon color-light">
                  <em className="ti-dropbox"></em>
                </div>
                <div className="counter-content">
                  <h2 className="count" data-count="33">34</h2>
                  <p>Brands Helped</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-8">
              <div className="tc-light counter">
                <div className="counter-icon color-light">
                  <em className="ti-basketball"></em>
                </div>
                <div className="counter-content">
                  <h2 className="count" data-count="145">+145</h2>
                  <p>Ongoing Task</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-8">
              <div className="tc-light counter">
                <div className="counter-icon color-light">
                  <em className="ti-pencil-alt"></em>
                </div>
                <div className="counter-content">
                  <h2 className="count" data-count="437">+437</h2>
                  <p>Projects Done</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-8">
              <div className="tc-light counter">
                <div className="counter-icon color-light">
                  <em className="ti-user"></em>
                </div>
                <div className="counter-content">
                  <h2 className="count" data-count="375">+375</h2>
                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-image">
          <img src="/images/bg-i.jpg" alt=""/>
        </div>
        
      </div>
      
      
      
      <div className="section section-x team tc-grey-alt">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-head section-md">
                <h5 className="heading-xs no-line">Meet the team</h5>
                <h2>People of behind work</h2>
                <p className="lead">We’re always expanding our lively, hard-working group of creators.We help clients to create Digital amazing experience. </p>
              </div>
            </div>
          </div>
          <div className="row gutter-vr-30px">
            <div className="col-lg-3 col-sm-6">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-g.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Andrew rover</h5>
                  <p>CEO, Genox</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-c.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Marina Bedi</h5>
                  <p>Developer, Genox</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-i.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Ajax Holder</h5>
                  <p>Head of Research, Genox</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-j.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Maria Diana</h5>
                  <p>Product Developer, Genox</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <div className=" button-area button-area-sm">
                <a href="florida-team.html" className="btn">Meet All Team</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-x bg-secondary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-head section-sm">
                <h5 className="heading-xs no-line">Testimonial</h5>
                <h2>What Clients Say About Us</h2>
                <p className="lead">We live in the space where design and technology meet. This allows us to take our creativity to new levels and deliver amazing.</p>
              </div>
            </div>
          </div>

          <div className="tes tes-s3">
            <div className="row has-carousel" data-items="3" data-loop="true" data-auto="true" data-dots="true">
              <div className="tes-block">
                <div className="tes-content bg-light shadow-alt">
                  <p>I recently hired Genox to develop a new version of my most popular website and I’m extremely happy with their work. </p>
                </div>
                <div className="tes-author d-flex align-items-center">
                  <div className="author-image">
                    <img src="/images/author-image-a.jpg" alt="Author Image"/>
                  </div>
                  <div className="author-con">
                    <h6 className="author-name t-u">Mike Andrew</h6>
                    <p>CEO  - Philandropia</p>
                  </div>
                </div>
              </div>
            
              <div className="tes-block ">
                <div className="tes-content bg-light shadow-alt">
                  <p>I recently hired Genox to develop a new version of my most popular website and I’m extremely happy with their work. </p>
                </div>
                <div className="tes-author d-flex align-items-center">
                  <div className="author-image">
                    <img src="/images/author-image-b.jpg" alt="Author Image"/>
                  </div>
                  <div className="author-con">
                    <h6 className="author-name t-u">MARINA SHOVA</h6>
                    <p>CEO  - Art policy</p>
                  </div>
                </div>
              </div>
            
              <div className="tes-block">
                <div className="tes-content bg-light shadow-alt">
                  <p>These guys are legit. I’ll never hire another agency as long as I’m working. They are also extremely helpful and amazing.</p>
                </div>
                <div className="tes-author d-flex align-items-center">
                  <div className="author-image">
                    <img src="/images/author-image-c.jpg" alt="Author Image"/>
                  </div>
                  <div className="author-con">
                    <h6 className="author-name t-u">HYPER MACK</h6>
                    <p>CEO  - Hellozen Bulk</p>
                  </div>
                </div>
              </div>
            
              <div className="tes-block">
                <div className="tes-content bg-light shadow-alt">
                  <p>These guys are legit. I’ll never hire another agency as long as I’m working. They are also extremely helpful and amazing.</p>
                </div>
                <div className="tes-author d-flex align-items-center">
                  <div className="author-image">
                    <img src="/images/author-image-c.jpg" alt="Author Image"/>
                  </div>
                  <div className="author-con">
                    <h6 className="author-name t-u">HYPER MACK</h6>
                    <p>CEO  - Hellozen Bulk</p>
                  </div>
                </div>
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
          <img src="/images/bg-j.jpg" alt=""/>
        </div>
        
      </div>
      

      <Footer/>
    </>
  );
}

export default AboutPage;