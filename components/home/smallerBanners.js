


export default function SmallBanners() {
  return (
    <div className="section section-x pt-0">
      <div className="container">
        <div className="row gutter-vr-30px">
          <div className="col-md-6 order-md-last">
            <div className="bg-img">
              <div className="bg-image">
                <img src="images/image-c.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-block fw-3 tc-light bg-primary block-pad-xl">
              <h5 className="heading-xs">Date</h5>
              <h2>Event Header</h2>
              <p>Event Description</p>
              <a href="florida-team.html" className="btn btn-outline">Read More</a>
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="row gutter-vr-30px">
          <div className="col-md-6">
            <div className="bg-img">
              <div className="bg-image">
                <img src="images/image-d.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-block fw-3 bg-secondary block-pad-xl">
              <h5 className="heading-xs no-line tc-alt">Date</h5>
              <h2>Event Header</h2>
              <p className="tc-grey">Description</p>
              <a href="florida-about.html" className="btn">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}