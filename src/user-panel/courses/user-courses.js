import BannerInner from "../../../components/bannerInner/banner";
import UserAccordion from "../../../components/userAccordion/accordion";
import Header from "../../../widgets/header/header";
import Footer from '../../../widgets/footer/footer'
import { COURSES_LIST } from "../../../assets/json/courses";
import { useRouter } from "next/router";



function Courses() {

	const router = useRouter();


  return ( 
    <>
      <Header/>
      <BannerInner root="Home" pathName="Current Courses" path="User / Courses / Current"/>

      <Footer/>
    </>
  );
}

export default Courses;



