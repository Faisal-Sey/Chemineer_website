import Footer from "../../widgets/footer/footer";
import Header from "../../widgets/header/header";
import BannerInner from "../../components/bannerInner/banner";
import { Button, Modal, Switch} from 'antd';
import { useRef, useState } from 'react';


function CoursesPage() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('');
  const refCurrent = useRef(0);
  const refSem1 = useRef(false);
  const refSem2 = useRef(false);
  const courseRef = useRef();
  const [fSwitch, setFswitch] = useState(false);
  const [lSwitch, setLswitch] = useState(false);

  const showModal = (year) => {
    setFswitch(false);
    setLswitch(false);
    refSem1.current = false;
    refSem2.current = false;
    refCurrent.current = year;
    setVisible(true);
    setModalText('');
  };

  const handleOk = () => {
    setModalText('The popup will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);

    courseRef.current.scrollIntoView()

  };


  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
    setFswitch(false);
    setLswitch(false);
  };

  const switchChange = (sem) => {
    if (sem === 1) {
      fSwitch 
        ? (setFswitch(false), refSem1.current=false)
        : (setFswitch(true), refSem1.current=true)
    }else {
      lSwitch 
        ? (setLswitch(false), refSem1.current=false)
        : (setLswitch(true), refSem2.current=true)
    }
  }

  return ( 
    <>
      <header className="is-transparent is-sticky is-shrink" id="header">
        <Header/>
        <BannerInner root="Home" path="Courses" pathName="Courses"/>
      </header>

      <div className="section section-x section-feature-overlap">
        <div className="container">
          <div className="row justify-content-center gutter-vr-30px">
            <div className="col-md-6 col-lg-4 text-center">
              <div className="feature feature-alt feature-s3 shadow-alt">
                <div className="feature-icon">
                  <em className="ti-panel"></em>
                </div>
                <div className="feature-content">
                  <h3>Level 100</h3>
                  <p>First year courses files</p>
                  <button type="button" className="btn btn-arrow" onClick={() => showModal(1)}>View</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
              <div className="feature feature-alt feature-s3 shadow-alt">
                <div className="feature-icon">
                  <em className="ti-write"></em>
                </div>
                <div className="feature-content">
                  <h3>Level 200</h3>
                  <p>Second year courses Files</p>
                  <button type="button" className="btn btn-arrow" onClick={() => showModal(2)}>View</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
              <div className="feature feature-alt feature-s3 shadow-alt">
                <div className="feature-icon">
                  <em className="ti-layers-alt"></em>
                </div>
                <div className="feature-content">
                  <h3>Level 300</h3>
                  <p>Third year courses files</p>
                  <button type="button" className="btn btn-arrow" onClick={() => showModal(3)}>View</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
              <div className="feature feature-alt feature-s3 shadow-alt">
                <div className="feature-icon">
                  <em className="ti-layers-alt"></em>
                </div>
                <div className="feature-content">
                  <h3>Level 400</h3>
                  <p>Fourth year courses files</p>
                  <button type="button" className="btn btn-arrow" onClick={() => showModal(4)}>View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Select Semester"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
          First Semester: 
          <Switch checked={fSwitch} style={{marginLeft: 20, marginRight: 30}} onChange={() => switchChange(1)}/>
          Second Semester: 
          <Switch checked={lSwitch} style={{marginLeft: 20, marginRight: 30}} onChange={() => switchChange(2)}/>     
        </div>
        <br/>
        <p><b>{modalText}</b></p>
      </Modal>

      <div ref={courseRef}>

      {/* Level 100 */}
      {/* First Semester */}
      <div className="section section-x bg-secondary section-news" style={{display: (refCurrent.current===1 & refSem1.current) ? "block" : "none"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-md-6 text-center">
              <div className="section-head section-sm">
                <h5 className="heading-xs">Level 100</h5>
                <h2>First Semester</h2>
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
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-c.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-d.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Semester */}
      <div className="section section-x bg-secondary section-news"  style={{display: (refCurrent.current===1 & refSem2.current) ? "block" : "none"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-md-6 text-center">
              <div className="section-head section-sm">
                <h5 className="heading-xs">Level 100</h5>
                <h2>First Semester</h2>
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
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-c.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-d.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Level 200 */}
      {/* First Semester */}
      <div className="section section-x bg-secondary section-news" style={{display: (refCurrent.current===2 & refSem1.current) ? "block" : "none"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-md-6 text-center">
              <div className="section-head section-sm">
                <h5 className="heading-xs">Level 200</h5>
                <h2>First Semester</h2>
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
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-c.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-d.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Semester */}
      <div className="section section-x bg-secondary section-news"  style={{display: (refCurrent.current===2 & refSem2.current) ? "block" : "none"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-md-6 text-center">
              <div className="section-head section-sm">
                <h5 className="heading-xs">Level 200</h5>
                <h2>First Semester</h2>
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
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-c.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-d.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Level 300 */}
      {/* First Semester */}
      <div className="section section-x bg-secondary section-news" style={{display: (refCurrent.current===3 & refSem1.current) ? "block" : "none"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-md-6 text-center">
              <div className="section-head section-sm">
                <h5 className="heading-xs">Level 300</h5>
                <h2>First Semester</h2>
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
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-c.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-d.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Semester */}
      <div className="section section-x bg-secondary section-news" style={{display: (refCurrent.current===3 & refSem2.current) ? "block" : "none"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-md-6 text-center">
              <div className="section-head section-sm">
                <h5 className="heading-xs">Level 300</h5>
                <h2>First Semester</h2>
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
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-c.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-d.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Level 400 */}
      {/* First Semester */}
      <div className="section section-x bg-secondary section-news" style={{display: (refCurrent.current===4 & refSem1.current) ? "block" : "none"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-md-6 text-center">
              <div className="section-head section-sm">
                <h5 className="heading-xs">Level 400</h5>
                <h2>First Semester</h2>
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
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-c.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-d.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Semester */}
      <div className="section section-x bg-secondary section-news" style={{display: (refCurrent.current===4 & refSem2.current) ? "block" : "none"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-md-6 text-center">
              <div className="section-head section-sm">
                <h5 className="heading-xs">Level 400</h5>
                <h2>First Semester</h2>
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
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-c.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-4 text-center">
              <div className="post post-alt">
                <div className="post-thumb">
                  <a href="florida-news-details.html"><img src="images/post-thumb-d.jpg" alt="post"/></a>
                </div>
                <div className="post-content">
                  <p className="post-tag">Course code</p>
                  <h4><a href="florida-news-details.html">Course Name</a></h4>
                  <a href="florida-news-details.html" className="btn btn-arrow">View Files</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>

    </>
  )
}

export default CoursesPage;