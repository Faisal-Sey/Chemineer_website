/* eslint-disable @next/next/no-sync-scripts */
import { Carousel } from 'antd';
import Header from '../../widgets/header/header'
import Footer from '../../widgets/footer/footer'
import { BANNER_CONTENT } from '../../components/home/banners'
import HomeCards from '../../components/home/cards'
import SmallBanners from '../../components/home/smallerBanners'
import Quotes from '../../components/home/quotes'
import Teams from '../../components/home/team'
import News from '../../components/home/news'


export default function HomePage() {

	const innerContainerStyle = {
		position: "relative",
		top: "40%",
		left: "25%",
		right: "25%",
		bottom: 0
	}

	const headStyles = {
		color: "#fff",
		fontSize: 80,
		textTransform: "uppercase"
	}

	const subHeadStyles = {
		color: "#fff",
		fontSize: 40,
	}

	const contentStyle = {
		container: {
			height: "100vh",
			backgroundImage: "url('/images/bg1.jpg')"
		},
	};

	const contentStyle1 = {
		container: {
			height: "100vh",
			backgroundImage: "url('/images/bg2.jpg')",
		},
	};

	const contentStyle2 = {
		container: {
			height: "100vh",
			backgroundImage: "url('/images/bg1.jpg')",
		},
	};

  return (
    <>
      <header className="is-transparent is-sticky is-shrink" id="header">
      <Header/>
      {/* banner / slider */}
			{/* <Carousel autoplay>
				<div className="banner-block tc-light d-flex">
						<div className="container">
							<div className="row">
								<div className="col-md-10 col-xl-8">
									<div className="banner-content">
										<h1 className="banner-heading animate t-u">Banner Header</h1>
										<p className="lead lead-lg animate">Banner Description</p>
										<div className="banner-btn animate">
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* bg */}
						{/* <div className="bg-image change-bg" style={contentStyle}>
							<img src="images/banner-a.jpg" alt="banner"/>
						</div> */}
						{/* bg */}
				{/* </div>
				<div className="banner-block tc-light d-flex">
						<div className="container">
							<div className="row">
								<div className="col-md-10 col-xl-8">
									<div className="banner-content">
										<h1 className="banner-heading animate t-u">Banner Header</h1>
										<p className="lead lead-lg animate">Banner Description</p>
										<div className="banner-btn animate">
										</div>
									</div>
								</div>
							</div>
						</div> */}
						{/* bg */}
						{/* <div className="bg-image change-bg" style={contentStyle1}>
							<img src="images/banner-a.jpg" alt="banner"/>
						</div> */}
						{/* bg */}
				{/* </div>
				<div className="banner-block tc-light d-flex">
						<div className="container">
							<div className="row">
								<div className="col-md-10 col-xl-8">
									<div className="banner-content">
										<h1 className="banner-heading animate t-u">Banner Header</h1>
										<p className="lead lead-lg animate">Banner Description</p>
										<div className="banner-btn animate">
										</div>
									</div>
								</div>
							</div>
						</div> */}
						{/* bg */}
						{/* <div className="bg-image change-bg" style={contentStyle2}>
							<img src="images/banner-a.jpg" alt="banner"/>
						</div> */}
						{/* bg */}
				{/* </div>
				<div className="banner-block tc-light d-flex">
						<div className="container">
							<div className="row">
								<div className="col-md-10 col-xl-8">
									<div className="banner-content">
										<h1 className="banner-heading animate t-u">Banner Header</h1>
										<p className="lead lead-lg animate">Banner Description</p>
										<div className="banner-btn animate">
										</div>
									</div>
								</div>
							</div>
						</div> */}
						{/* bg */}
						{/* <div className="bg-image change-bg" contentStyle>
							<img src="images/banner-a.jpg" alt="banner"/>
						</div> */}
						{/* bg */}
				{/* </div> */}
				
			{/* </Carousel>  */}

			<Carousel autoplay>
				<div>
					<div style={contentStyle1.container}>
						<div style={innerContainerStyle}>
							<h1 style={headStyles}>Banner Header</h1>
							<p style={subHeadStyles}>Banner Description</p>
						</div>
					</div>
				</div>
				<div>
					<div style={contentStyle2.container}>
						<div style={innerContainerStyle}>
							<h1 style={headStyles}>Banner Header</h1>
							<p style={subHeadStyles}>Banner Description</p>
						</div>
					</div>
				</div>
				<div>
					<div style={contentStyle.container}>
						<div style={innerContainerStyle}>
							<h1 style={headStyles}>Banner Header</h1>
							<p style={subHeadStyles}>Banner Description</p>
						</div>
					</div>
				</div>
			</Carousel>


      {/* slider / banner */}
      </header>
			
			{/* Sections */}

			
			{/* cards section */}
			<HomeCards/>
		
			{/* smaller banners		 */}
			<SmallBanners/>
			
			{/* quotes */}
			{/* <Quotes/> */}
		
			{/* teams */}
			{/* <Teams/> */}

			<News/>

      <Footer />
    </>
  )
}