import Footer from "../../widgets/footer/footer";
import Header from "../../widgets/header/header";


function Login() {
  return (
    <>
      <header className="is-transparent is-sticky is-shrink" id="header">
        <Header/>
        <div className="banner banner-s2 banner-s2-inner">
          <div className="banner-block">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="ath-body bg-light">
                    <h5 className="ath-heading title">Sign In <small className="tc-default">with your Reference Number</small></h5>
                    <form className="genox-form" action="./">
                      <div className="form-results"></div>
                      <div className="row">
                        <div className="form-field col-md-12">
                          <input type="text" placeholder="Your Reference Number" className="input bdr-b required"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-field col-md-12">
                          <button type="submit" className="btn">Sign In</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-image">
              <img src="/images/banner-sm-c.jpg" alt="banner"/>
            </div>
          </div>
        </div>
      </header>
      <Footer/>
    </>
  );
}

export default Login;