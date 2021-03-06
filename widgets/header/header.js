import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';


export default function Header(){

		const [menu, setMenu] = useState(false);
		const [pageDrop, setPageDrop] = useState(false);
		const [accountDrop, setAccountDrop] = useState(false);

		const onClick = () => {
			menu ? setMenu(false) : setMenu(true)
		};

		const setDrops = (drop) => {
			if (menu) {
				if (drop === "page"){
					pageDrop ? setPageDrop(false) : setPageDrop(true);
				}else {
					accountDrop ? setAccountDrop(false) : setAccountDrop(true);
				}
			}
			
		}

    return (
        <div className="header-main">
					<div className="header-container container">
						<div className="header-wrap">
							{/* Logo */}
							<div className="header-logo logo">
								<a href="./" className="logo-link">
									<img 
										className="logo-dark" 
										src="/images/no-logo-bg.png" 
										srcSet="/images/no-logo-bg.png" 
										alt="logo"
										layout="fill"
									/>
									<img 
										className="logo-light" 
										src="/images/no-logo-bg.png" 
										srcSet="/images/no-logo-bg.png" 
										alt="logo"
									/>
								</a>
							</div>
							{/* Menu Toogle */}
							<div className="header-nav-toggle" onClick={onClick}>
								<a href="#" className="navbar-toggle" data-menu-toggle="header-menu">
									<div className="toggle-line">
										<span></span>
									</div>
								</a>
							</div>

							
							{/* Menu */}
							<div className={`header-navbar ${menu ? 'menu-shown' : ''}`}>
								<nav className="header-menu" id="header-menu">
									<ul className="menu">
										<Link href="/" passHref>
											<li className="menu-item">
												<a className="menu-link nav-link active menu-toggle" href="#">Home</a>
											</li>
										</Link>
										<li className={`menu-item has-sub ${pageDrop ? 'open-nav' : ''}`}>
											<a className="menu-link nav-link menu-toggle" onClick={() => setDrops("page")}>Pages</a>
											<ul className="menu-sub menu-drop" style={{display: pageDrop ? "block" : "none"}}>
												<Link href="/about" passHref>
													<li className="menu-item"><a className="menu-link nav-link" href="#">About Us</a></li>
													</Link>
													<Link href="/events" passHref>
														<li className="menu-item"><a className="menu-link nav-link" href="#">Events</a></li>
													</Link>
													<Link href="/executives" passHref>
														<li className="menu-item"><a className="menu-link nav-link" href="#">Executives</a></li>
													</Link>
													<Link href="/contact" passHref>
														<li className="menu-item"><a className="menu-link nav-link" href="#">Contact Us</a></li>
												</Link>
											</ul>
										</li>
										<li className={`menu-item has-sub ${accountDrop ? 'open-nav' : ''}`}>
											<a className="menu-link nav-link menu-toggle" onClick={() => setDrops("account")}>Account</a>
											<ul className="menu-sub menu-drop" style={{display: accountDrop ? "block" : "none"}}>
												<Link href="/login" passHref>
													<li className="menu-item"><a className="menu-link nav-link" href="#">Sign In</a></li>
												</Link>
												<Link href="/" passHref>
													<li className="menu-item"><a className="menu-link nav-link" href="#">Sign Out</a></li>
												</Link>
											</ul>
										</li>
										
									</ul>
									{/* <ul className="menu-btns">
										<li><a href="" className="btn search search-trigger"><i className="icon ti-search "></i></a></li>
										<li><a href="florida-contact.html" className="btn btn-sm">Start A project</a></li>
									</ul> */}
								</nav>
							</div>
							{/* header-navbar  */}

							{/* header-search */}
							{/* <div className="header-search">
								<form role="search" method="POST" className="search-form" action="#">
									<div className="search-group">
										<input 
											type="text" 
											className="input-search" 
											placeholder="Search ..."
											onChange=""
										/>
										<button className="search-submit" type="submit"><i className="icon ti-search"></i></button>
									</div>
								</form>
							</div> */}
							{/* header-search                                    */}
						</div>
					</div>
				</div>
    )
}