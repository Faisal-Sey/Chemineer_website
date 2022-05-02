import BannerInner from "../../../components/bannerInner/banner";
import UserAccordion from "../../../components/userAccordion/accordion";
import Header from "../../../widgets/header/header";
import Footer from '../../../widgets/footer/footer'
import { courses } from "../../../assets/json/courses";
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
                <div className="col-xl-8 col-md-7 profile-info-sect bg-secondary">
                    <div className="page-title">
                        Unlocked Badges.
                    </div>
                    <div className="row">
                        {courses.map((course) =>
												(course.id === slug.yr && course[slug.sem]) ? 
													(course[slug.sem].map((program, index) => 
													<div key={index} className="row justify-content-center gutter-vr-30px mb-30">
														<div className="col-sm-8 col-md-4 text-center">
															<div className="post post-alt">
																<div className="post-thumb">
																	<a href=""><img src="/images/post-thumb-c.jpg" alt="post"/></a>
																</div>
																<div className="post-content">
																	<p className="post-tag">{program.code}</p>
																	<h4><a href="">{program.name}</a></h4>
																	<a href="" className="btn btn-arrow">Read more</a>
																	{/* <a href="" className="btn-space">|</a>
																	<a href="" className="btn btn-arrow">Sem 2</a> */}
																</div>
															</div>
														</div>
													</div>
													)) : <></>							
												)}
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



