import BannerInner from "../../../components/bannerInner/banner";
import Footer from "../../../widgets/footer/footer";
import Header from "../../../widgets/header/header";


function CourseDetail() {
  return ( 
    <>
      <Header/>
      <BannerInner root="Home" pathName="Course Detail" path="User / Course / Course Detail"/>
      <div className="section blog section-x">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="post post-full post-details post-v3">
              <div className="post-thumb">
                <img src="images/post-thumb-md-a.jpg" alt=""/>
              </div>
              <div className="post-entry d-block align-items-start bdr bdr-b">
                <div className="post-content m-0">
                  <div className="post-meta d-flex align-items-center">
                    <div className="post-author d-flex align-items-center mb-0 mr-20">
                      <div className="author-thumb">
                        <img src="images/author-image-c.jpg" alt=""/>
                      </div>
                      <div className="author-name">
                        <p className="post-tag">BY Liam Adams</p>
                      </div>
                    </div>
                    <div className="post-tag">
                      <p className="post-tag">DECEMBER 12, 2018</p>
                    </div>
                  </div>
                  <h3>The Untapped Gold Mine of Digital that Virtually no one knows about</h3>
                  <div className="content">
                    <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                    <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                    <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                    <p className="block-text">I highly recommend this company for all and any of your design needs. i am very happy with the new redesigned and restructured website they built for my moving company. </p>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wgs comments">
              <h3 className="wgs-heading">Comments</h3>
              <div className="row">
                <div className="col-12">
                  <ul className="comments-list">
                    <li className="comments-row">
                      <div className="media">
                        <img src="images/user-thumb-a.jpg" alt=""/>
                        <div className="media-body">
                          <div className="comment-content">
                              <p className="media-name"><strong> Mark Anthony</strong>  <span className="post-date">- 21 March </span> </p>
                            <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo.On the other hand we denounce with righteous indignation and dislike men.</p>
                            <a href="">Reply</a>
                          </div>
                        </div>
                      </div>
                      <ul className="comments-list">
                        <li className="comments-row">
                          <div className="media">
                            <img src="images/user-thumb-b.jpg" alt=""/>
                            <div className="media-body">
                              <div className="comment-content">
                                <p className="media-name"><strong>Roger Helder</strong>   <span className="post-date">- 21 March </span> </p>
                                <p>We denounce with righteous indignation and dislike men who are so beguiled.</p>
                                <a href="">Reply</a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="comments-row">
                      <div className="media">
                        <img src="images/user-thumb-a.jpg" alt=""/>
                        <div className="comment-content media-body">
                          <p className="media-name"><strong> Mark Anthony</strong>  <span className="post-date">- 21 March </span> </p>
                          <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo.On the other hand we denounce with righteous indignation and dislike.</p>
                          <a href="">Reply</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="comments-form comments-form-visible">
                    <div className="text-block form-text">
                      <h3 className="wgs-heading mb-10">Leave a Reply</h3>
                      <p><em>Your email address will not be published. Required fields are marked <span className="tc-primary">*</span></em></p>
                    </div>
                    <form action="#" method="POST">
                      <div className="row">
                        <div className="form-field col-md-6">
                          <input type="text" placeholder="Your Name" className="input" aria-required="true"/>
                        </div>
                        <div className="form-field col-md-6">
                          <input type="email" placeholder="Your Email" className="input"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-field col-md-12">
                            <input type="text" placeholder="Your Website" className="input" aria-required="true"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-field col-md-12">
                          <textarea placeholder="Add Comment" className="input input-msg" aria-required="true"></textarea>
                          <button type="submit" className="btn btn-md">Post Comment</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pl-lg-4">
            <div className="sidebar">
              <div className="wgs wgs-sidebar wgs-search">
                <div className="wgs-content">
                  <div className="form-group">
                    <input type="text" className="form-input"  placeholder="Search..."/>
                    <button className="search-btn"><i className="ti ti-search" aria-hidden="true"></i></button>
                  </div>
                </div>
              </div>
              <div className="wgs wgs-sidebar wgs-sidebar-s2 wgs-recents">
                <h3 className="wgs-heading">Latest Post</h3>
                <div className="wgs-content">
                  <ul className="post-recent">
                    <li>
                      <h5><a href="#">Bringing Great design Ideas To Completion</a></h5>
                      <p className="post-tag">DECEMBER 12, 2018</p>
                    </li>
                    <li>
                      <h5><a href="#">Live life Smart And Focus On The Positive</a></h5>
                      <p className="post-tag">DECEMBER 10, 2018</p>
                    </li>
                    <li>
                      <h5><a href="#">Taking Seamless Performance Indicatores Offline</a></h5>
                      <p className="post-tag">DECEMBER 12, 2018</p>
                    </li>
                    <li>
                      <h5><a href="#">User Generted Content In Real-Time Will Have..</a></h5>
                      <p className="post-tag">DECEMBER 12, 2018</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="wgs wgs-sidebar wgs-sidebar-s2 wgs-category wgs-category-s2 bdr bdr-b">
                <h3 className="wgs-heading">Post Categories</h3>
                <div className="wgs-content">
                  <ul className="wgs-menu">
                    <li><a href="#">Creative  <span>(07)</span></a></li>
                    <li><a href="#">Fresh <span>(05)</span></a></li>
                    <li><a href="#">Innovative <span>(20)</span></a></li>
                    <li><a href="#">Inspiring <span>(06)</span></a></li>
                    <li><a href="#">New Trends <span>(06)</span></a></li>
                  </ul>
                </div>
              </div>
              <div className="wgs wgs-sidebar wgs-sidebar-s2 wgs-tags wgs-tags-s2">
                <h3 className="wgs-heading">Post Tags</h3>
                <div className="wgs-content">
                  <ul className="tag-list">
                    <li><a href="">Advanced</a></li>
                    <li><a href="">Analysis</a></li>
                    <li><a href="">Creative</a></li>
                    <li><a href="">Art</a></li>
                    <li><a href="">Design</a></li>
                    <li><a href="">Product</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="section bg-secondary section-l">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-head section-sm">
                <h3>You May Also Like These Articles</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gutter-vr-30px">
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href=""><img src="/images/post-thumb-c.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">DECEMBER 12, 2018</p>
                  <h4><a href="">Cosy Bright Office In Yellow And Grey Colors</a></h4>
                  <a href="" className="btn btn-arrow">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href=""><img src="/images/post-thumb-i.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">DECEMBER 12, 2018</p>
                  <h4><a href="">Cosy Bright Office In Yellow And Grey Colors</a></h4>
                  <a href="" className="btn btn-arrow">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href=""><img src="/images/post-thumb-d.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">DECEMBER 12, 2018</p>
                  <h4><a href="">Cosy Bright Office In Yellow And Grey Colors</a></h4>
                  <a href="" className="btn btn-arrow">Read More</a>
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

export default CourseDetail;