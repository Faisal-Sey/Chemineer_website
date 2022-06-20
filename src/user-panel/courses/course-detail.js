import BannerInner from "../../../components/bannerInner/banner";
import Footer from "../../../widgets/footer/footer";
import Header from "../../../widgets/header/header";


function CourseDetail() {
  return ( 
    <>
      <Header/>
      <BannerInner root="Home" pathName="Course Detail" path="User / Course / Course Detail"/>
        
      <Footer/>
    </>
  );
}

export default CourseDetail;