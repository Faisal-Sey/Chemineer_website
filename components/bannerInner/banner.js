


function BannerInner({root, path, pathName}) {
  return (
    <div className="banner banner-inner banner-inner-s4 tc-light">
      <div className="banner-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 col-sm-9">
                <div className="banner-content">
                  <h1 className="banner-heading t-u">{pathName}</h1>
                  <ul className="banner-menu">
                    <li><a href="./">{root}</a></li>
                    <li><a>{path}</a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-image">
            <img src="/images/banner-sm-e.jpg" alt="banner"/>
          </div>
          
      </div>
    </div>
  );
}

export default BannerInner;
        