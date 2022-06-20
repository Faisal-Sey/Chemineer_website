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

      <Footer/>
    </>
  );
}

export default CurrentCourses;



