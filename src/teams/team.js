import BannerInner from "../../components/bannerInner/banner";
import Footer from "../../widgets/footer/footer";
import Header from "../../widgets/header/header";


function TeamsPage() {
  return ( 
    <>
      <header className="is-transparent is-sticky is-shrink" id="header">
        <Header/>
        <BannerInner root="Home" path="Executives" pathName="Executives"/>
      </header>

      
      <div className="section section-x team tc-grey">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-head section-md mtm-10">
                <h2>Student Leaders</h2>
                <p className="lead">Some Description</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gutter-vr-30px">
            <div className="col-md-4 col-sm-6 col-10">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-p.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Name</h5>
                  <p>Position</p>
                  <p>Description</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-10">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-c.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Name</h5>
                  <p>Position</p>
                  <p>Description</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-10">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-g.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Name</h5>
                  <p>Position</p>
                  <p>Description</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-10">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-j.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Name</h5>
                  <p>Position</p>
                  <p>Description</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-10">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-q.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Name</h5>
                  <p>Position</p>
                  <p>Description</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-10">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-i.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Name</h5>
                  <p>Position</p>
                  <p>Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
	    </div>


      <Footer/>
    </>
  );
}

export default TeamsPage;