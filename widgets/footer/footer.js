


export default function Footer(){
  return (
    <footer className="section footer">
			<div className="container">
				<div className="row gutter-vr-40px">
					<div className="col-lg-3 col-sm-6">
						<div className="wgs">
							<div className="wgs-content">
								<div className="wgs-logo">
									<a href="#">
										<img src="images/no-logo.png" srcSet="images/no-logo.png" alt="logo"/>
									</a>
								</div>
								<p>&copy; 2022. All rights reserved.<br/> Designed & Developed by <a href="https://portfolio-faisal-sey.vercel.app/">Faisal Issaka</a></p>	
							</div>
						</div>
            {/* .wgs */}
					</div>
          {/* .col */}
					<div className="col-lg-3 col-sm-6">
						<div className="wgs">
							<div className="wgs-content">
								<h3 className="wgs-title t-u">Department</h3>
								<ul className="wgs-menu">
									<li><a href="florida-about.html">About Us</a></li>
									<li><a href="florida-work.html">Events</a></li>
									<li><a href="florida-team.html">Team</a></li>
									<li><a href="florida-contact.html">Contact</a></li>
								</ul>
							</div>
						</div>
            {/* .wgs */}
					</div>
          {/* .col */}
					{/* <div className="col-lg-3 col-sm-6">
						<div className="wgs">
							<div className="wgs-content">
								<h3 className="wgs-title t-u">Services</h3>
								<ul className="wgs-menu">
									<li><a href="florida-service-single.html">Digital Media</a></li>
									<li><a href="florida-service-single.html">Creative Design</a></li>
									<li><a href="florida-service-single.html">Development</a></li>
									<li><a href="florida-service-single.html">Branding Stretegy</a></li>
								</ul>
							</div>
						</div> */}
            {/* .wgs */}
					{/* </div> */}
          {/* .col */}
					<div className="col-lg-3 col-sm-6">
						<div className="wgs">
							<div className="wgs-content">
								<h3 className="wgs-title t-u">Contact Us</h3>
								<form className="genox-form" action="form/subscribe.php" method="POST">
									<div className="form-results"></div>
									<div className="field-group btn-inline">
										<input type="email" name="s_email" className="input required" placeholder="Your  Email" onChange=''/>
										<input type="text" className="d-none" name="form-anti-honeypot" value="" onChange=''/>
										<button type="submit"  className="far fa-paper-plane button"></button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}