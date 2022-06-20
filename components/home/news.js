

function News() {
  return ( 
    <div className="section section-x bg-secondary section-news">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-md-6 text-center">
            <div className="section-head section-sm">
              <h5 className="heading-xs">Team</h5>
              <h2>Student Leaders</h2>
            </div>
          </div>
        </div>
        <div className="row gutter-vr-30px justify-content-sm-center">
          <div className="col-sm-8 col-md-4 text-center">
            <div className="post post-alt">
              <div className="post-thumb">
                <a href="florida-news-details.html"><img src="images/post-thumb-b.jpg" alt="post"/></a>
              </div>
              <div className="post-content">
                <p className="post-tag">Position</p>
                <h4><a href="florida-news-details.html">Full Name</a></h4>
                <a href="florida-news-details.html" className="btn btn-arrow">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-md-4 text-center">
            <div className="post post-alt">
              <div className="post-thumb">
                <a href="florida-news-details.html"><img src="images/post-thumb-c.jpg" alt="post"/></a>
              </div>
              <div className="post-content">
                <p className="post-tag">Position</p>
                <h4><a href="florida-news-details.html">Full Name</a></h4>
                <a href="florida-news-details.html" className="btn btn-arrow">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-md-4 text-center">
            <div className="post post-alt">
              <div className="post-thumb">
                <a href="florida-news-details.html"><img src="images/post-thumb-d.jpg" alt="post"/></a>
              </div>
              <div className="post-content">
                <p className="post-tag">Position</p>
                <h4><a href="florida-news-details.html">Full Name</a></h4>
                <a href="florida-news-details.html" className="btn btn-arrow">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
              <div className="button-area button-area-sm">
                  <a href="florida-news.html" className="btn">View more</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;