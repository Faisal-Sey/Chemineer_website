import Image from "next/image"


export default function Header(){
    return (
        <div className="header-main">
					<div className="header-container container">
						<div className="header-wrap">
							{/* Logo */}
							<div className="header-logo logo">
								<a href="./" className="logo-link">
									<Image 
										className="logo-dark" 
										src="images/logo.png" 
										srcset="images/logo2x.png 2x" 
										alt="logo"
									/>
									<Image 
										className="logo-light" 
										src="images/logo-white.png" 
										srcset="images/logo-white2x.png 2x" 
										alt="logo"
									/>
								</a>
							</div>
							{/* Menu Toogle */}
							<div className="header-nav-toggle">
								<a href="#" className="navbar-toggle" data-menu-toggle="header-menu">
									<div className="toggle-line">
										<span></span>
									</div>
								</a>
							</div>
							
							{/* Menu */}
							<div className="header-navbar">
								<nav className="header-menu" id="header-menu">
									<ul className="menu">
										<li className="menu-item  has-sub">
											<a className="menu-link nav-link active menu-toggle" href="./">Home</a>
											<ul className="menu-sub menu-drop">
												<li className="menu-item"><a className="menu-link nav-link" href="index.html">Dallas - Digital light</a></li>
												<li className="menu-item"><a className="menu-link nav-link" href="index-dallas-dark.html">Dallas - Digital Dark</a></li>
												<li className="menu-item"><a className="menu-link nav-link" href="index-dallas-dark-video.html">Dallas - Digital Video <span className="badge badge-version">v1.3</span></a></li>
												<li className="menu-item"><a className="menu-link nav-link" href="index-texas.html">Texas - Digital</a></li>
												<li className="menu-item"><a className="menu-link nav-link" href="index-texas-video.html">Texas - Digital Video <span className="badge badge-version">v1.3</span></a></li>
												<li className="menu-item"><a className="menu-link nav-link" href="index-florida.html">Florida - Digital</a></li>
												<li className="menu-item"><a className="menu-link nav-link" href="index-jackson.html">Jackson - Digital</a></li>
												<li className="menu-item"><a className="menu-link nav-link" href="index-alaska.html">Alaska OP - Light <span className="badge badge-version">v1.2</span></a></li>
												<li className="menu-item"><a className="menu-link nav-link" href="index-alaska-dark.html">Alaska OP - Dark <span className="badge badge-version">v1.2</span></a></li>
												<li className="menu-item"><a className="menu-link nav-link" href="index-helena.html">Helena - Creative <span className="badge badge-version">v1.3</span></a></li>
												<li className="menu-item"><a className="menu-link nav-link" href="index-montana.html">Montana - Creative <span className="badge badge-success">NEW</span></a></li>
											</ul>
										</li>
										<li className="menu-item has-sub">
											<a className="menu-link nav-link menu-toggle" href="">Pages</a>
											<ul className="menu-sub menu-drop">
												<li className="menu-item has-sub">
													<a className="menu-link nav-link menu-toggle" href="index.html">Dallas - light</a>
													<ul className="menu-sub menu-drop">
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-about.html">About</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-services.html">Service</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-service-single.html">Service Single</a></li>
														<li className="menu-item has-sub"><a className="menu-link nav-link menu-toggle" href="#">Other Pages</a>
															<ul className="menu-sub menu-drop">
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-career.html">Career / Job</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-career-single.html">Career Single</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-news.html">News / Blog</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-news-details.html">News Details</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-login.html">Sign In</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-signup.html">Sign Up</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-404.html">Error 404</a></li>
															</ul>
														</li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-team.html">Team</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-work.html">Work</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-work-single.html">Work Single</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-pricing.html">Pricing</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-contact.html">Contact</a></li>
													</ul>
												</li>
												<li className="menu-item has-sub">
													<a className="menu-link nav-link menu-toggle" href="index-dallas-dark.html">Dallas - Dark <span className="badge badge-version">v1.2</span></a>
													<ul className="menu-sub menu-drop">
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-about.html">About</a></li>												
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-services.html">Service</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-service-single.html">Service Single</a></li>
														<li className="menu-item has-sub"><a className="menu-link nav-link menu-toggle" href="#">Other Pages</a>
															<ul className="menu-sub menu-drop">
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-career.html">Career / Job</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-career-single.html">Career Single</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-news.html">News / Blog</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-news-details.html">News Details</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-login.html">Sign In</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-signup.html">Sign Up</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-404.html">Error 404</a></li>
															</ul>
														</li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-team.html">Team</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-work.html">Work</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-work-single.html">Work Single</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-pricing.html">Pricing</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="dallas-dark-contact.html">Contact</a></li>
													</ul>
												</li>
												<li className="menu-item has-sub">
													<a className="menu-link nav-link menu-toggle" href="index-texas.html">Texas - Digital</a>
													<ul className="menu-sub menu-drop">
														<li className="menu-item"><a className="menu-link nav-link" href="texas-about.html">About</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="texas-services.html">Service</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="texas-service-single.html">Service Single</a></li>
														<li className="menu-item has-sub"><a className="menu-link nav-link menu-toggle" href="#">Other Pages</a>
															<ul className="menu-sub menu-drop">
																<li className="menu-item"><a className="menu-link nav-link" href="texas-career.html">Career / Job</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="texas-career-single.html">Career Single</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="texas-news.html">News / Blog</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="texas-news-details.html">News Details</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="texas-login.html">Sign In</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="texas-signup.html">Sign Up</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="texas-404.html">Error 404</a></li>
															</ul>
														</li>
														<li className="menu-item"><a className="menu-link nav-link" href="texas-team.html">Team</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="texas-work.html">Texas Work</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="texas-work-single.html">Work Single</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="texas-pricing.html">Pricing <span className="badge badge-success">new</span></a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="texas-contact.html">Contact</a></li>
													</ul>
												</li>
												<li className="menu-item has-sub">
													<a className="menu-link nav-link menu-toggle" href="index-florida.html">Florida - Digital</a>
													<ul className="menu-sub menu-drop">
														<li className="menu-item"><a className="menu-link nav-link" href="florida-about.html">About</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="florida-services.html">Service</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="florida-service-single.html">Service Single</a></li>
														<li className="menu-item has-sub"><a className="menu-link nav-link menu-toggle" href="#">Other Pages</a>
															<ul className="menu-sub menu-drop">
																<li className="menu-item"><a className="menu-link nav-link" href="florida-career.html">Career / Job</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="florida-career-single.html">Career Single</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="florida-news.html">News / Blog</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="florida-news-details.html">News Details</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="florida-login.html">Sign In</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="florida-signup.html">Sign Up</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="florida-404.html">Error 404</a></li>
															</ul>
														</li>
														<li className="menu-item"><a className="menu-link nav-link" href="florida-team.html">Team</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="florida-work.html">Work</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="florida-work-single.html">Work Single</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="florida-pricing.html">Pricing <span className="badge badge-success">new</span></a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="florida-contact.html">Contact</a></li>
													</ul>
												</li>
												<li className="menu-item has-sub">
													<a className="menu-link nav-link menu-toggle" href="index-jackson.html">Jackson - Digital <span className="badge badge-success">NEW</span></a>
													<ul className="menu-sub menu-drop">
														<li className="menu-item"><a className="menu-link nav-link" href="jackson-about.html">About</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="jackson-services.html">Service</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="jackson-service-single.html">Service Single</a></li>
														<li className="menu-item has-sub"><a className="menu-link nav-link menu-toggle" href="#">Other Pages</a>
															<ul className="menu-sub menu-drop">
																<li className="menu-item"><a className="menu-link nav-link" href="jackson-career.html">Career / Job</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="jackson-career-single.html">Career Single</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="jackson-news.html">News / Blog</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="jackson-news-details.html">News Details</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="jackson-login.html">Sign In</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="jackson-signup.html">Sign Up</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="jackson-404.html">Error 404</a></li>
															</ul>
														</li>
														<li className="menu-item"><a className="menu-link nav-link" href="jackson-team.html">Team</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="jackson-work.html">Work</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="jackson-work-single.html">Work Single</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="jackson-pricing.html">Pricing</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="jackson-contact.html">Contact</a></li>
													</ul>
												</li>
												<li className="menu-item has-sub">
													<a className="menu-link nav-link menu-toggle" href="index-helena.html">Helena - Creative <span className="badge badge-version">v1.3</span></a>
													<ul className="menu-sub menu-drop">
														<li className="menu-item"><a className="menu-link nav-link" href="helena-about.html">About</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="helena-services.html">Service</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="helena-service-single.html">Service Single</a></li>
														<li className="menu-item has-sub"><a className="menu-link nav-link menu-toggle" href="#">Other Pages</a>
															<ul className="menu-sub menu-drop">
																<li className="menu-item"><a className="menu-link nav-link" href="helena-career.html">Career / Job</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="helena-career-single.html">Career Single</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="helena-news.html">News / Blog</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="helena-news-details.html">News Details</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="helena-login.html">Sign In</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="helena-signup.html">Sign Up</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="helena-404.html">Error 404</a></li>
															</ul>
														</li>
														<li className="menu-item"><a className="menu-link nav-link" href="helena-work.html">Work</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="helena-work-single.html">Work Single</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="helena-pricing.html">Pricing</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="helena-contact.html">Contact</a></li>
													</ul>
												</li>
												<li className="menu-item has-sub">
													<a className="menu-link nav-link menu-toggle" href="index-montana.html">Montana - Creative <span className="badge badge-success">NEW</span></a>
													<ul className="menu-sub menu-drop">
														<li className="menu-item"><a className="menu-link nav-link" href="montana-about.html">About</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="montana-services.html">Service</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="montana-work.html">Work</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="montana-work-single.html">work Single</a></li>
														<li className="menu-item"><a className="menu-link nav-link" href="montana-contact.html">Contact</a></li>
														<li className="menu-item has-sub"><a className="menu-link nav-link menu-toggle" href="#">Other Pages</a>
															<ul className="menu-sub menu-drop">
																<li className="menu-item"><a className="menu-link nav-link" href="montana-login.html">Sign In</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="montana-signup.html">Sign Up</a></li>
																<li className="menu-item"><a className="menu-link nav-link" href="montana-404.html">Error 404</a></li>
															</ul>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="menu-item"><a className="menu-link nav-link" href="florida-work.html">Works</a></li>
										<li className="menu-item"><a className="menu-link nav-link" href="florida-news.html">Blog</a></li>
										<li className="menu-item has-sub">
											<a className="menu-link nav-link menu-toggle" href="#">Blocks</a>
											<div className="menu-sub menu-drop menu-mega menu-mega-2clmn">
												<div className="menu-mega-innr">
													<ul className="menu-mega-list">
														<li className="menu-item"><a href="blocks-header.html">Page Banner</a></li>
														<li className="menu-item"><a href="blocks-footer.html">Page Footer</a></li>
														<li className="menu-item"><a href="blocks-featured.html">Featured</a></li>
														<li className="menu-item"><a href="blocks-counter.html">Counter</a></li>
														<li className="menu-item"><a href="blocks-clients-logo.html">Clients Logos</a></li>
														<li className="menu-item"><a href="blocks-news.html">Blogs</a></li>
														<li className="menu-item"><a href="blocks-precess-step.html">Precoess Step</a></li>
														<li className="menu-item"><a href="blocks-pricing.html">Pricing</a></li>
													</ul>
													<ul className="menu-mega-list">
														<li className="menu-item"><a href="blocks-call-action.html">Call Action</a></li>
														<li className="menu-item"><a href="blocks-team.html">Team</a></li>
														<li className="menu-item"><a href="blocks-testimonials.html">Testimonials</a></li>
														<li className="menu-item"><a href="blocks-portfolio.html">Portfolio</a></li>
														<li className="menu-item"><a href="blocks-textbox.html">Textbox</a></li>
														<li className="menu-item"><a href="blocks-images.html">Image Blocks</a></li>
														<li className="menu-item"><a href="blocks-box-overlay.html">Box Overlay</a></li>
														<li className="menu-item"><a href="blocks-faqs.html">FAQs</a></li>
													</ul>
												</div>
											</div>
										</li>
									</ul>
									<ul className="menu-btns">
										<li><a href="" className="btn search search-trigger"><i className="icon ti-search "></i></a></li>
										<li><a href="florida-contact.html" className="btn btn-sm">Start A project</a></li>
									</ul>
								</nav>
							</div>
							{/* header-navbar  */}

							{/* header-search */}
							<div className="header-search">
								<form role="search" method="POST" className="search-form" action="#">
									<div className="search-group">
										<input 
											type="text" 
											className="input-search" 
											placeholder="Search ..."
										/>
										<button className="search-submit" type="submit"><i className="icon ti-search"></i></button>
									</div>
								</form>
							</div>
							{/* header-search                                    */}
						</div>
					</div>
				</div>
    )
}