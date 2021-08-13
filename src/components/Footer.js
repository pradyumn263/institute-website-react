import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="section-xs page-footer">
            <div className="container">
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
                                        <h6 className="barnd-name text-ubold">National Institute of Technology,
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
    )
}

export default Footer;