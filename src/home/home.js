import Image from 'next/image'
import Header from '../../widgets/header/header'


export default function HomePage() {
  return (
		<header className="is-transparent is-sticky is-shrink" id="header">
      <Header/>
      {/* banner / slider */}
      <div className="banner banner-s4 has-slider">
        <div className="has-carousel" dataEffect="true" dataItems="1" dataLoop="true" dataDots="false" dataAuto="true" dataNavs="true">
          <div className="banner-block tc-light d-flex">
              <div className="container">
                  <div className="row">
                      <div className="col-md-10 col-xl-8">
                          <div className="banner-content">
                              <h1 className="banner-heading animate t-u" dataAnimate="fade-in-up" dataDelay="0.5" dataDuration="0.5">Crafting Digital Experience to help brands grow</h1>
                              <p className="lead lead-lg animate" dataAnimate="fade-in-up" dataDelay="0.12" dataDuration="0.5">The digital agency with a human approach</p>
                              <div className="banner-btn animate" dataAnimate="fade-in-up" dataDelay="0.20" dataDuration="0.9">
                                  <a href="florida-work.html" className="menu-link btn">Check Out Our Work</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* bg */}
              <div className="bg-image change-bg">
                  <Image src="images/banner-a.jpg" alt="banner"/>
              </div>
              {/* bg */}
          </div>
          <div className="banner-block tc-light d-flex">
            <div className="container">
              <div className="row">
                  <div className="col-md-8 offset-1 col-xl-8 offset-xl-0">
                      <div className="banner-content">
                          <h1 className="banner-heading animate t-u" dataAnimate="fade-in-up" dataDelay="0.5" dataDuration="0.5">Crafting Digital Experience to help brands grow</h1>
                          <p className="lead lead-lg animate" dataAnimate="fade-in-up" dataDelay="0.7" dataDuration="0.5">The digital agency with a human approach</p>
                          <div className="banner-btn animate" dataAnimate="fade-in-up" dataDelay="0.10" dataDuration="0.9">
                              <a href="florida-work.html" className="menu-link btn">Check Out Our Work</a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            {/* bg */}
            <div className="bg-image change-bg">
                <Image src="images/banner-d.jpg" alt="banner"/>
            </div>
            {/* end bg */}
          </div>
          <div className="banner-block tc-light d-flex">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-1 col-xl-8 offset-xl-0">
                        <div className="banner-content">
                            <h1 className="banner-heading animate t-u" dataAnimate="fade-in-up" dataDelay="0.5" dataDuration="0.5">Crafting Digital Experience to help brands grow</h1>
                            <p className="lead lead-lg animate" dataAnimate="fade-in-up" dataDelay="0.7" dataDuration="0.5">The digital agency with a human approach</p>
                            <div className="banner-btn animate" dataAnimate="fade-in-up" dataDelay="0.10" dataDuration="0.9">
                                <a href="florida-work.html" className="menu-link btn">Check Out Our Work</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bg */}
            <div className="bg-image change-bg">
              <Image src="images/banner-e.jpg" alt="banner"/>
            </div>
            {/* end bg */}
          </div>
          </div>
          <div className="tes-arrow">
            <a className="slick-prev slick-arrow" style=""><i className="icon ti ti-angle-left"></i></a>
            <a className="slick-next slick-arrow" style=""><i className="icon ti ti-angle-right"></i></a>
          </div>
      </div>
      {/* slider / banner */}
    </header>
  )
}