import Header from '../../widgets/header/header';
import BannerInner from '../../components/bannerInner/banner'
import Footer from '../../widgets/footer/footer'
import UserAccordion from '../../components/userAccordion/accordion';

function UserSettings() {
  return ( 
    <>
      <Header/>
      <BannerInner root="Home" pathName="User Settings" path="User / Settings"/>
      <section className="user-setting-section">
        <div className="container">
            <div className="row">
                <UserAccordion active="profileInfo"/>
                <div className="col-xl-8 col-md-7 profile-info-sect">
                    <div className="page-title">
                        Profile Info
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="profile-about-box">
                                <div className="top-bg"></div>
                                <div className="p-inner-content">
                                    <div className="profile-img">
                                        <img src="/images/profile-user.png" alt=""/>
                                        <div className="active-online"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="up-photo-card mb-30">
                                <div className="icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="content">
                                    <h4>
                                        Change Avatar
                                    </h4>
                                    <span>
                                        120x120p size minimum
                                    </span>
                                </div>
                            </div>
                            <div className="up-photo-card">
                                <div className="icon">
                                    <i className="fas fa-image"></i>
                                </div>
                                <div className="content">
                                    <h4>
                                        Change Cover
                                    </h4>
                                    <span>
                                        1200x300p size minimum
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-info-box mt-30">
                        <div className="header">
                            About your Profile
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label htmlFor="">Profile Name</label>
                                        <input type="text" placeholder="Profile Name" className="input bg-secondary" disabled/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label htmlFor="">Ref. No.</label>
                                        <input type="text" placeholder="Reference Number" className="input bg-secondary" disabled/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label htmlFor="">Level</label>
                                        <input type="text" placeholder="Level" className="input bg-secondary" disabled/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons  mt-30">
                        <button type="submit" className="custom-button">Save Changes</button>
                        <button className="custom-button2">Discard All</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default UserSettings;
  
