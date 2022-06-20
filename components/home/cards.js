
import Link from "next/link";

export default function HomeCards() {

  return (
    <div className="section section-x section-feature-overlap">
      <div className="container">
        <div className="row justify-content-center gutter-vr-30px">
          <div className="col-md-6 col-lg-4 text-center">
            <div className="feature feature-alt feature-s3 shadow-alt">
              <div className="feature-icon">
                <em className="ti-panel"></em>
              </div>
              <div className="feature-content">
                <h3>Courses</h3>
                <p>All course files</p>
                <Link href="/courses" passHref>
                  <button type="button" className="btn btn-arrow">Continue</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center">
            <div className="feature feature-alt feature-s3 shadow-alt">
              <div className="feature-icon">
                <em className="ti-write"></em>
              </div>
              <div className="feature-content">
                <h3>Card</h3>
                <p>Card Description</p>
                <a href="florida-service-single.html" className="btn btn-arrow">Continue</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center">
            <div className="feature feature-alt feature-s3 shadow-alt">
              <div className="feature-icon">
                <em className="ti-layers-alt"></em>
              </div>
              <div className="feature-content">
                <h3>Card</h3>
                <p>Card Description</p>
                <a href="florida-service-single.html" className="btn btn-arrow">Continue</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}