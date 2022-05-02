import BannerInner from "../../../components/bannerInner/banner";
import UserAccordion from "../../../components/userAccordion/accordion";
import Header from "../../../widgets/header/header";
import Footer from '../../../widgets/footer/footer'
import { COURSES_LIST } from "../../../assets/json/courses";
import { useRouter } from "next/router";



function Courses() {

	const router = useRouter();

	const moveToLinks = (year) => {
		router.push({
			pathname: "/user/courses/[yr]",
			query: {
				yr: year
			}
		})
	}

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
                        {COURSES_LIST.map((card) =>
                        <div key={card.id} className="col-md-6 mb-30">
                            <div className="badge-box">
                                <div className="img">
                                    <img src="/images/1.png" alt=""/>
                                </div>
                                <div className="content">
                                    <h4>
                                        {card.name}
                                    </h4>
                                </div>
                                <div className="bottom-content">
                                    <button onClick={() => moveToLinks(card.slug)} className="btn-primary">Go to<em className="ti-arrow-right"></em></button>
                                </div>
                            </div>
                        </div>
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

export default Courses;



