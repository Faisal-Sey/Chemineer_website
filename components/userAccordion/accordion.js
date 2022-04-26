import { useState, useEffect } from "react";


function UserAccordion({active}) {
  
  const [tabs, setTabs] = useState({
    profileInfo: false,
    currentCourses: false,
    Level100: false,
    Level200: false,
    Level300: false,
    Level400: false,
    TimeTable: false,
    AcademicCalendar: false,
  })

  useEffect(() => {
    let load = false

    if (!(load)){
      setTabs({
        ...tabs, 
        [active]: true
      })
    }
  
    return () => {
      load = true
    }
  }, [setTabs, active, tabs])
  
  
  return ( 
    <div className="col-xl-4 col-md-5">
      <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
                <button className="" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <div className="icon">
                      <i className="fas fa-user"></i>
                  </div> 
                  <span>My Profile</span>
                  <div className="t-icon">
                      <i className="fas fa-plus"></i>
                      <i className="fas fa-minus"></i>
                  </div>
                </button>
            </div>
        
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                <ul className="links">
                    <li>
                        <a  className={tabs.profileInfo ? "active": ""} href="user-setting.html">Profile Info</a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
                <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <div className="icon">
                      <i className="fas fa-cogs"></i>
                  </div> 
                  <span>
                      Courses
                  </span>
                  <div className="t-icon">
                      <i className="fas fa-plus"></i>
                      <i className="fas fa-minus"></i>
                  </div>
                </button>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                  <ul className="links">
                      <li>
                          <a href="user-account-info.html">Current Courses</a>
                      </li>
                      <li>
                          <a href="user-account-info.html">Level 100</a>
                      </li>
                      <li>
                          <a href="user-account-info.html">Level 200</a>
                      </li>
                      <li>
                          <a href="user-account-info.html">Level 300</a>
                      </li>
                      <li>
                          <a href="user-account-info.html">Level 400</a>
                      </li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
                <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <div className="icon">
                      <i className="far fa-credit-card"></i>
                  </div> 
                  <span>
                      Utilities
                  </span>
                  <div className="t-icon">
                      <i className="fas fa-plus"></i>
                      <i className="fas fa-minus"></i>
                  </div>
                </button>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
                  <ul className="links">
                      <li>
                          <a href="user-billing.html">Time Table</a>
                      </li>
                      <li>
                          <a href="user-plan.html">Academic Calendar</a>
                      </li>
                      <li>
                          <a href="user-purchase.html">Skills</a>
                      </li>
                  </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default UserAccordion;