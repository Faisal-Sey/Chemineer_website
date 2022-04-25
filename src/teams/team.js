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
                <h2>People of behind work</h2>
                <p className="lead">We’re always expanding our lively, hard-working group of creators.We help clients to create Digital amazing experience.</p>
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
                  <h5 className="team-name">Andrew rover</h5>
                  <p>CEO, Genox</p>
                  <p>Andrew  is a CEO. he works with social good companies and entrepreneurs to help their digital presence through Squarespace.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-10">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-c.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Marina Bedi</h5>
                  <p>Developer, Genox</p>
                  <p>founder of Knapsack Creative, a web design agency. He and his team have built hundreds of client websites on Squarespace.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-10">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-g.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Ajax Holder</h5>
                  <p>Head of Research, Genox</p>
                  <p>Art director, web designer, and the founder of Creative, a web design company that brings women-run small businesses to life.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-10">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-j.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Maria Diana</h5>
                  <p>Product Developer, Genox</p>
                  <p>creative director of Genox, a creative agency based in Los Angeles, California. His team helps companies develop and tell stories.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-10">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-q.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Maria Diana</h5>
                  <p>Product Developer, Genox</p>
                  <p>founder of Knapsack Creative, a web design agency. He and his team have built hundreds of client websites on Squarespace.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-10">
              <div className="team-single text-center">
                <div className="team-image is-shadow">
                  <img src="/images/team-i.jpg" alt=""/>
                </div>
                <div className="team-content team-content-s2">
                  <h5 className="team-name">Maria Diana</h5>
                  <p>Product Developer, Genox</p>
                  <p>creative director of Genox, a creative agency based in Los Angeles, California. Her team helps companie and tell their brand stories.</p>
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