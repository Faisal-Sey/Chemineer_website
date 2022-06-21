import Header from "../../widgets/header/header";
import BannerInner from "../../components/bannerInner/banner";
import Footer from "../../widgets/footer/footer";
import Link from "next/link";


function AboutPage() {
  return ( 
    <>
      <header classNameName="is-transparent is-sticky is-shrink" id="header">
        <Header/>
        <BannerInner root="Home" path="About" pathName="About Us"/>
      </header>

      <div className="section section-x tc-grey-alt">
        <div className="container">
          <div className="row gutter-vr-30px align-items-center">
            <div className="col-lg-6">
              <div className="box-image">
                <img src="/images/image-n.jpg" alt=""/>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="text-block">
                <h5 className="heading-xs">Header</h5>
                <h2>Description </h2>
                <p>Our philosophy is rooted in the principles of financial portfolio management and drives business results through smarter marketing investments.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida faucibus massa, commodo interdum eros elementum id. Phasellus bibendum vitae ipsum a efficitur. Sed viverra, nibh eget ultricies luctus, justo mauris sollicitudin odio, quis egestas metus turpis in est. Aliquam at cursus purus. Vivamus dapibus nisl vitae lobortis lacinia. Phasellus lacus turpis, aliquam non malesuada et, ullamcorper quis neque. Fusce lectus ante, ultrices a turpis et, vulputate aliquam orci. Phasellus risus turpis, lacinia nec sagittis eu, suscipit non purus. Vivamus consequat vitae ex vel laoreet.

                  Nulla non erat interdum, placerat ex eu, convallis nibh. Vivamus dapibus consectetur leo, ut ultrices tortor vehicula suscipit. Morbi justo metus, tincidunt sit amet mauris id, placerat feugiat ante. Sed dapibus rhoncus augue, vitae vestibulum mauris commodo sed. Quisque vel fringilla lorem. Nam ornare risus non diam sodales dictum. Quisque posuere leo ut ornare ornare. In tristique nisl mauris, in viverra lorem vulputate nec. Nunc imperdiet ex eget porta ornare. Sed egestas ipsum metus, nec vulputate sem luctus in. Morbi ac massa pretium, iaculis quam lacinia, blandit enim.
                </p>
                <Link href="/contact" passHref>
                  <a href="florida-contact.html" className="btn">Contact Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <Footer/>
    </>
  );
}

export default AboutPage;