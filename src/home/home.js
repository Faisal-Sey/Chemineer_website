
import Header from '../../widgets/header/header'
import Footer from '../../widgets/footer/footer'
import { BANNER_CONTENT } from '../../components/home/banners'
import HomeCards from '../../components/home/cards'
import SmallBanners from '../../components/home/smallerBanners'
import Quotes from '../../components/home/quotes'
import Teams from '../../components/home/team'
import News from '../../components/home/news'


export default function HomePage() {
  return (
    <>
      <header className="is-transparent is-sticky is-shrink" id="header">
      <Header/>
      {/* banner / slider */}
      <div className="banner banner-s4 has-slider">
        <div className="has-carousel" data-effect="true" data-items="1" data-loop="true" data-dots="false" data-auto="true" data-navs="true">
					{BANNER_CONTENT.map((banner) => 
						<div key={banner.id} className="banner-block tc-light d-flex">
							<div className="container">
								<div className="row">
									<div className="col-md-10 col-xl-8">
										<div className="banner-content">
											<h1 className="banner-heading animate t-u" data-animate="fade-in-up" data-delay="0.5" data-duration="0.5">{banner.headerText}</h1>
											<p className="lead lead-lg animate" data-animate="fade-in-up" data-delay="0.12" data-duration="0.5">{banner.text}</p>
											<div className="banner-btn animate" data-animate="fade-in-up" data-delay="0.20" data-duration="0.9">
													<a href={`${banner.link}`} className="menu-link btn">{banner.linkText}</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* bg */}
							<div className="bg-image change-bg">
								<img src={`${banner.img}`} alt="banner"/>
							</div>
							{/* bg */}
						</div>
					)}			
        </div>
        <div className="tes-arrow">
          <a className="slick-prev slick-arrow"><i className="icon ti ti-angle-left"></i></a>
          <a className="slick-next slick-arrow"><i className="icon ti ti-angle-right"></i></a>
        </div>
      </div>
      {/* slider / banner */}
      </header>
			
			{/* Sections */}

			
			{/* cards section */}
			<HomeCards/>
		
			{/* smaller banners		 */}
			<SmallBanners/>
			
			{/* quotes */}
			<Quotes/>
		
			{/* teams */}
			<Teams/>

			<News/>

      <Footer />
    </>
  )
}