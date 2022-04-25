import Header from "../../widgets/header/header";
import BannerInner from "../../components/bannerInner/banner";
import Footer from "../../widgets/footer/footer";


function SingleEvent() {
  return ( 
    <>
      <header className="is-transparent is-sticky is-shrink" id="header">
        <Header/>
        <BannerInner root="Home" path="Events" pathName="Events"/>
      </header>
      <div className="section section-x fw-3">
          <div className="container">
            <div className="row gutter-vr-30px">
              <div className="col-md-8">
                <div className="text-box h-full">
                  <h3>Description</h3>
                  <p>With a growing community of millions messaging and sharing photos and videos, Landing page needed to ensure its apps were as high-quality, reliable and smoothly synced as could be.The company brought us on board to accelerate development of both its iOS and Android mobile.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-box bg-secondary box-pad h-full">
                  <p><strong>Time:</strong> Art Media LTD</p>
                  <p><strong>Date:</strong> $200</p>
                  <p><strong>Theme:</strong> UI/UX, Landing Page</p>
                  <p><strong>Venue:</strong> September 19, 2019 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sectin p-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="image-box">
                  <img src="/images/image-full-a.jpg" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section section-x">
          <div className="container">
            <div className="content ">
              <div className="row gutter-vr-30px">
                <div className="col-xl-6 order-lg-last">
                  <div className="image-block">
                    <img src="/images/image-k.jpg" alt=""/>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="text-block project-box-pad  bg-primary tc-light h-full">
                    <h2>Landing Page Deisgn</h2>
                    <p>This communication platform makes it easy to share updates from any classNameroom around the world, empowering teachers, parents and students to connect and learn. Having reached more than 180 countries, it&apos;s clearly working.To maintain growth however, the company had to ensure its app was best-in-className with a growing community.</p>
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

export default SingleEvent;