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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida faucibus massa, commodo interdum eros elementum id. Phasellus bibendum vitae ipsum a efficitur. Sed viverra, nibh eget ultricies luctus, justo mauris sollicitudin odio, quis egestas metus turpis in est. Aliquam at cursus purus. Vivamus dapibus nisl vitae lobortis lacinia. Phasellus lacus turpis, aliquam non malesuada et, ullamcorper quis neque. Fusce lectus ante, ultrices a turpis et, vulputate aliquam orci. Phasellus risus turpis, lacinia nec sagittis eu, suscipit non purus. Vivamus consequat vitae ex vel laoreet.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-box bg-secondary box-pad h-full">
                  <p><strong>Time:</strong> 00:00</p>
                  <p><strong>Date:</strong> 00/00/0000</p>
                  <p><strong>Theme:</strong> Theme</p>
                  <p><strong>Venue:</strong> Venue </p>
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
                    <h2>Title</h2>
                    <p>Message</p>
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