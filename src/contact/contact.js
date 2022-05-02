import Footer from "../../widgets/footer/footer";
import Header from "../../widgets/header/header";
import BannerInner from "../../components/bannerInner/banner";


function ContactPage() {
  return ( 
    <>
      <header className="is-transparent is-sticky is-shrink" id="header">
        <Header/>
        <BannerInner root="Home" path="Contact" pathName="Contact Us"/>
      </header>

      <div className="section section-x tc-grey-alt">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-left text-md-center">
                <div className="section-head section-md">
                  <h5 className="heading-xs">contact us</h5>
                  <h2>Let&apos;s Talk?</h2>
                  <p className="lead">Let’s make something awesome togheter</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row justify-content-between  gutter-vr-30px">
                  <div className="col-md-4 order-md-last">
                    <div className="text-box is-shadow contact-box">
                      <div className="contact-content contact-content-s3">
                        <h4>Phone:</h4>
                        <p>1800 456 7890</p>
                      </div>
                      <div className="contact-content contact-content-s3">
                        <h4>Email:</h4>
                        <p>info@genox.com</p>
                      </div>
                      <div className="contact-content contact-content-s3">
                        <h4>Address:</h4>
                        <address>52A, Tailstoi Town 5238 La city, IA 85796</address>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <form className="genox-form" action="form/contact.php" method="POST">
                      <div className="form-results"></div>
                      <div className="row">
                        <div className="form-field col-md-6">
                          <input name="cf_reference" type="text" placeholder="Your Reference" className="input bg-secondary required"/>
                        </div>
                        <div className="form-field col-md-6">
                          <input name="cf_email" type="email" placeholder="Your Email" className="input bg-secondary required"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-field col-md-12">
                          <textarea name="cf_msg" placeholder="Briefly tell us about your project. " className="input input-msg bg-secondary mb-20 required"></textarea>
                          <input type="text" className="d-none" name="form-anti-honeypot" value=""/>
                          <button type="submit" className="btn btn-md">Send </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="section p-0">
        <div id="gmap" className="g-map"></div>
      </div>

      <Footer/>
    </>

  );
}

export default ContactPage;