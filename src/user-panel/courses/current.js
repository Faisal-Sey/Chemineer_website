import BannerInner from "../../../components/bannerInner/banner";
import UserAccordion from "../../../components/userAccordion/accordion";
import Header from "../../../widgets/header/header";
import Footer from '../../../widgets/footer/footer'
import { courses, COURSES_LIST } from "../../../assets/json/courses";
import { useRouter } from "next/router";



function CurrentCourses() {

	const router = useRouter();

	const slug = router.query

  return ( 
    <>
      <Header/>
      <BannerInner root="Home" pathName="Current Courses" path="User / Courses / Current"/>
      <section className="user-setting-section">
        <div className="container">
            <div className="row">
                <UserAccordion active="Level100"/>
                <div className="col-xl-8 col-md-7 profile-info-sect">
                    <div className="page-title">
                        Unlocked Badges.
                    </div>
                    <div className="row">
                        {courses.map((course) =>{
												if (course === slug.yr){
													<div key={course.id} className="col-md-4 mb-30">
															<div className="badge-box">
																	<div className="img">
																			<img src="/images/1.png" alt=""/>
																	</div>
																	<div className="content">
																			<h4>
																					{course.name}
																			</h4>
																	</div>
																	<div className="bottom-content">
																			<button onClick={() => moveToLinks(course.slug)} className="btn-primary">Go to<em className="ti-arrow-right"></em></button>
																	</div>
															</div>
													</div>
												}
												})}
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default CurrentCourses;



