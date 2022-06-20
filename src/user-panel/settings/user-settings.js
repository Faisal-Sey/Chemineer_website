import Header from '../../../widgets/header/header';
import BannerInner from '../../../components/bannerInner/banner'
import Footer from '../../../widgets/footer/footer'
import UserAccordion from '../../../components/userAccordion/accordion';

function UserSettings() {
  return ( 
    <>
      <Header/>
      <BannerInner root="Home" pathName="User Settings" path="User / Settings"/>

      <Footer/>
    </>
  );
}

export default UserSettings;
  
