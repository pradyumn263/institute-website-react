import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
        <footer className="page-footer mt-5 bg-madison">
            <div className="hr bg-gray-light"/>
            <div className="container-fluid section-xs block-after-divider bg-madison">
                <div className="row row-50 justify-content-xl-between justify-content-sm-center">

                    <div className="col-sm-4 col-lg-4 col-xl-2 text-xl-start">
                    <h6 className="d-flex justify-content-center fw-bold text-white">Academics</h6>
                    <div className="text-subline" />
                    <div className="offset-top-30">
                    <ul className="list-marked list offset-top-10 text-white">
                        <li><a href="" className="text-white">Admissions</a></li>
                        <li><a href="" className="text-white">Faculty Login</a></li> 
                        <li><a href="" className="text-white">Academic Services</a></li>
                        <li><a href="" className="text-white">TEQIP-III</a></li>
                        </ul>
                    </div>
                    </div>

                    <div className="col-sm-4 col-lg-4 col-xl-2 text-xl-start">
                    <h6 className="d-flex justify-content-center fw-bold text-white">Programs</h6>
                    <div className="text-subline" />
                    <div className="offset-top-30">
                    <ul className="list-marked list text-white">
                        <li><a href="" className="text-white">Heritage</a></li>
                        <li><a href="" className="text-white">Euphrates</a></li> 
                        <li><a href="" className="text-white">Placements</a></li>
                        <li><a href="" className="text-white">NMEICT</a></li>
                        </ul>
                    </div>
                    </div>

                    <div className="col-sm-4 col-lg-4 col-xl-3 text-xl-start">
                    <h6 className="d-flex justify-content-center fw-bold text-white">Quick Links</h6>
                    <div className="text-subline" />
                    <div className="offset-top-30">
                    <ul className="list-marked list text-white">
                        <li><a href="" className="text-white">Handbook on Sexual Harassment of Women at Workplace</a></li>
                        <li><a href="" className="text-white">Faculty Information System</a></li> 
                        <li><a href="" className="text-white">Institute Newsletter</a></li>
                        <li><a href="" className="text-white">COVID-19 News</a></li>
                        <li><a href="" className="text-white">Intranet @NITW RO</a></li>
                        <li><a href="" className="text-white">Contact Us</a></li>
                        <li><a href="" className="text-white">RTI Act</a></li>
                        <li><a href="" className="text-white">Telecom Directory& E-Mail ID Registration Forms</a></li>
                        </ul>
                    </div>
                    </div>

                    <div className="col-sm-12 col-lg-12 col-xl-4 text-xl-start justify-content-center d-flex">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15179.588466037536!2d79.5308386!3d17.983523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1b2c37fcb8fefce!2sNational%20Institute%20of%20Technology%2C%20Warangal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1632005137818!5m2!1sen!2sin" 
                    width={680}
                    height={350} 
                    style={{border: 0}} 
                    allowFullScreen loading="lazy" />
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container pb-5">
                <div className="row row-20 justify-content-sm-center align-items-md-center text-lg-start">
                    <div className="col-sm-10 col-lg-6">
                        {/*Footer brand*/}
                        <Link className="d-inline-block" to="/">
                            <div
                                className="unit align-items-sm-center unit-md flex-column flex-lg-row unit-spacing-xxs">
                                <div className="unit-left">
                                    <img
                                        className="img-responsive d-inline-block"
                                        src={process.env.PUBLIC_URL + "/images/logo-170x172.png"}
                                        width={70}
                                        height={70}
                                        alt={"nitw footer logo"}
                                    />
                                </div>
                                <div className="unit-body text-xxl-start">
                                    <div>
                                        <h6 className="text-light barnd-name text-ubold">National Institute of Technology,
                                            Warangal</h6>
                                    </div>
                                    <div className="offset-top-0">
                                        <p className="brand-slogan text-gray fst-italic font-accent">
                                            Telangana, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-10 col-lg-6 text-lg-end">
                        <p className="text-dark rights">
                            <span>©&nbsp;</span>
                            <span className="copyright-year"/>
                            <span>.&nbsp;</span>
                            <span>All Rights Reserved</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer;