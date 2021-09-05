import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

const navbarSampleData = [
    {
        "title": "Home",
        "destination": "internal",
        "href": "/",
        "dropdown": [
            {
                "title": "About Us",
                "destination": "internal",
                "href": "/about-us"
            },
            {
                "title": "Board of Governors",
                "destination": "internal",
                "href": "/board-of-governors"
            },
            {
                "title": "Building and Works Committee",
                "destination": "internal",
                "href": "/building-and-works-committee"
            },
            {
                "title": "FAQs",
                "destination": "internal",
                "href": "/faqs"
            },
            {
                "title": "Finance Committee",
                "destination": "internal",
                "href": "/finance-committee"
            },
            {
                "title": "Gallery",
                "destination": "internal",
                "href": "/gallery"
            },
            {
                "title": "History",
                "destination": "internal",
                "href": "/history"
            },
            {
                "title": "Mission",
                "destination": "internal",
                "href": "/mission"
            },
            {
                "title": "Vision",
                "destination": "internal",
                "href": "/vision"
            },
            {
                "title": "Visiting NITW",
                "destination": "internal",
                "href": "/visiting-nitw"
            }
        ]
    },
    {
        "title": "Administration",
        "destination": "internal",
        "href": "/",
        "dropdown": [
            {
                "title": "Academic Administration",
                "destination": "internal",
                "href": "/academic-administration"
            },
            {
                "title": "Administrative Officers",
                "destination": "internal",
                "href": "/administrative-officers"
            },
            {
                "title": "Chairman",
                "destination": "internal",
                "href": "/chairman"
            },
            {
                "title": "Chief Vigilance Officer",
                "destination": "internal",
                "href": "/chief-vigilance-officer"
            },
            {
                "title": "Director",
                "destination": "internal",
                "href": "/director"
            },
            {
                "title": "Emergency Contact Numbers",
                "destination": "internal",
                "href": "/emergency-contact-numbers"
            },
            {
                "title": "Faculty Information System",
                "destination": "external",
                "href": "https://www.google.com"
            },
            {
                "title": "Institute Annual Report",
                "destination": "external",
                "href": "https://www.google.com"
            },
            {
                "title": "Memorandum of Association",
                "destination": "internal",
                "href": "/memorandum-of-association"
            },
            {
                "title": "Memorandum of Understanding",
                "destination": "internal",
                "href": "/memorandum-of-understanding"
            },
            {
                "title": "NIT Council",
                "destination": "internal",
                "href": "/nit-council"
            },
            {
                "title": "Organization Chart",
                "destination": "internal",
                "href": "/organization-chart"
            },
            {
                "title": "Right to Information",
                "destination": "internal",
                "href": "/rti"
            },
            {
                "title": "Statutory Policies",
                "destination": "internal",
                "href": "/statutory-policies"
            }
        ]
    },
    {
        "title": "Academics",
        "destination": "internal",
        "href": "/",
        "dropdown": [
            {
                "title": "Academic Services",
                "destination": "internal",
                "href": "/about-us"
            },
            {
                "title": "Announcements",
                "destination": "internal",
                "href": "/board-of-governors"
            },
            {
                "title": "Academic Calendar",
                "destination": "internal",
                "href": "/building-and-works-committee"
            },
            {
                "title": "Academic Programmes",
                "destination": "internal",
                "href": "/faqs"
            },
            {
                "title": "Academic Report",
                "destination": "internal",
                "href": "/finance-committee"
            },
            {
                "title": "Academic Team",
                "destination": "internal",
                "href": "/gallery"
            },
            {
                "title": "Admissions",
                "destination": "internal",
                "href": "/history"
            },
            {
                "title": "Examination Branch",
                "destination": "internal",
                "href": "/mission"
            },
            {
                "title": "Fee Structure",
                "destination": "internal",
                "href": "/vision"
            },
            {
                "title": "Forms",
                "destination": "internal",
                "href": "/visiting-nitw"
            },
            {
                "title": "Rules and Regulations",
                "destination": "internal",
                "href": "/history"
            },
            {
                "title": "Time Tables",
                "destination": "internal",
                "href": "/history"
            },
        ]
    },
    {
        "title": "Research",
        "destination": "internal",
        "href": "/",
        "dropdown": [
            {
                "title": "Areas of Research",
                "destination": "internal",
                "href": "/about-us"
            },
            {
                "title": "Deparment wise Research Funds",
                "destination": "internal",
                "href": "/board-of-governors"
            },
            {
                "title": "Departments in Research",
                "destination": "internal",
                "href": "/building-and-works-committee"
            },
            {
                "title": "Downloads",
                "destination": "internal",
                "href": "/faqs"
            },
            {
                "title": "Research Scholars",
                "destination": "internal",
                "href": "/finance-committee"
            },
            {
                "title": "research Advisory Committee members",
                "destination": "internal",
                "href": "/gallery"
            },
            {
                "title": "research and Consultancy Officials",
                "destination": "internal",
                "href": "/history"
            },
            {
                "title": "Research Centers",
                "destination": "internal",
                "href": "/mission"
            },
            {
                "title": "Research Presentations",
                "destination": "internal",
                "href": "/vision"
            },
            {
                "title": "Mechanical Engineering",
                "destination": "internal",
                "href": "/visiting-nitw"
            },
            {
                "title": "Research Projects",
                "destination": "internal",
                "href": "/history"
            },
            {
                "title": "Research Publications",
                "destination": "internal",
                "href": "/history"
            },
            {
                "title": "Total Research Funds",
                "destination": "internal",
                "href": "/vision"
            },
        ]
    },
    {
        "title": "Departments",
        "destination": "internal",
        "href": "/",
        "dropdown": [
            {
                "title": "Biotechnology",
                "destination": "internal",
                "href": "/about-us"
            },
            {
                "title": "Chemical Engineering",
                "destination": "internal",
                "href": "/board-of-governors"
            },
            {
                "title": "Chemistry",
                "destination": "internal",
                "href": "/building-and-works-committee"
            },
            {
                "title": "Civil Engineering",
                "destination": "internal",
                "href": "/faqs"
            },
            {
                "title": "Computer Science and Engineering",
                "destination": "internal",
                "href": "/finance-committee"
            },
            {
                "title": "electrical Engineering",
                "destination": "internal",
                "href": "/gallery"
            },
            {
                "title": "Electronics and Commmunication Engineering",
                "destination": "internal",
                "href": "/history"
            },
            {
                "title": "Humanities and Social Science",
                "destination": "internal",
                "href": "/mission"
            },
            {
                "title": "Mathematics",
                "destination": "internal",
                "href": "/vision"
            },
            {
                "title": "Mechanical Engineering",
                "destination": "internal",
                "href": "/visiting-nitw"
            },
            {
                "title": "Metallurgical and Materials Engineering",
                "destination": "internal",
                "href": "/history"
            },
            {
                "title": "Physical Education",
                "destination": "internal",
                "href": "/history"
            },
            {
                "title": "Physics",
                "destination": "internal",
                "href": "/vision"
            },
            {
                "title": "School of Management",
                "destination": "internal",
                "href": "/vision"
            },
        ]
    },
]

const Navbar = ({navbarData = navbarSampleData}) => {

    return (
        <React.Fragment>
            <Helmet>
                <script src={process.env.PUBLIC_URL + "/js/core.min.js"}></script>
                <script src={process.env.PUBLIC_URL + "/js/script.js"}></script>
            </Helmet>
            <header className={"page-head"}>
                <div className="rd-navbar-wrap">
                    <nav
                        className="rd-navbar rd-navbar-default"
                        data-md-device-layout="rd-navbar-static"
                        data-lg-device-layout="rd-navbar-static"
                        data-xl-device-layout="rd-navbar-static"
                        data-stick-up-offset="210"
                        data-xl-stick-up-offset="85"
                        data-lg-auto-height="true"
                        data-auto-height="false"
                        data-md-layout="rd-navbar-static"
                        data-lg-layout="rd-navbar-static"
                        data-lg-stick-up="true"
                    >
                        <div className="rd-navbar-inner">
                            {/* Navbar Panel Top*/}
                            <div className="rd-navbar-panel">
                                <div>
                                    {/* Navbar Sidebar Toggle*/}
                                    <button
                                        className="rd-navbar-toggle"
                                        data-rd-navbar-toggle=".rd-navbar, .rd-navbar-nav-wrap"
                                    >
                                        <span/>
                                    </button>
                                    {/* Mobile Page Title */}
                                    <h4 className="panel-title d-lg-none">NIT Warangal</h4>

                                    {/* Navbar Right Side Toggle*/}
                                    <button
                                        className="rd-navbar-top-panel-toggle d-lg-none"
                                        data-rd-navbar-toggle=".rd-navbar-top-panel"
                                    >
                                        <span/>
                                    </button>
                                    <div className="rd-navbar-top-panel">
                                        <div className="rd-navbar-top-panel-left-part">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <div className="unit flex-row align-items-center unit-spacing-xs">
                                                        <div className="unit-left">
                                                            <span className="icon mdi mdi-phone text-middle"/>
                                                        </div>
                                                        <div className="unit-body">
                                                            <a href="tel:9121096946">9121096946</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="unit flex-row align-items-center unit-spacing-xs">
                                                        <div className="unit-left">
                                                            <span className="icon mdi mdi-map-marker text-middle"/>
                                                        </div>
                                                        <div className="unit-body">
                                                            <a href="#">NH 163, NITW Campus, Telangana 506004 India</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="unit flex-row align-items-center unit-spacing-xs">
                                                        <div className="unit-left">
                                                            <span className="icon mdi mdi-email-open text-middle"/>
                                                        </div>
                                                        <div className="unit-body">
                                                            <a href="mailto:#">example-email@nitw.ac.in</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Navbar Starts Here*/}
                            <div className="rd-navbar-menu-wrap clearfix">

                                {/* Navbar Brand Logo*/}
                                <div className="rd-navbar-brand">
                                    <Link className="d-inline-block" to="/">
                                        <div
                                            className="unit align-items-sm-center unit-xl flex-column flex-xxl-row unit-spacing-custom">
                                            <div className="unit-left">
                                                <img width={170} height={172}
                                                     src={process.env.PUBLIC_URL + "/images/logo-170x172.png"}
                                                     alt={"nitw brand logo"}/>
                                            </div>
                                            <div className="unit-body text-xxl-start">
                                                <div className="rd-navbar-brand-title">National Institute of Technology,
                                                    Warangal
                                                </div>
                                                <div className="rd-navbar-brand-slogan">Telangana, India</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="rd-navbar-nav-wrap">
                                    <div className="rd-navbar-mobile-scroll">
                                        <div className="rd-navbar-mobile-header-wrap">

                                            {/*Navbar Brand Mobile*/}
                                            <div className="rd-navbar-mobile-brand">
                                                <Link to="/">
                                                    <img
                                                        width={136}
                                                        height={138}
                                                        src={process.env.PUBLIC_URL + "/images/logo-170x172.png"}
                                                        alt={"nitw logo mobile"}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                        {/* RD Navbar Nav*/}
                                        <ul className="rd-navbar-nav">
                                            {
                                                navbarData.map((navItem) => {

                                                    return (
                                                        <li>
                                                            {
                                                                navItem.destination === "internal" &&
                                                                <Link to={navItem.href}>
                                                                    {navItem.title}
                                                                </Link>
                                                            }
                                                            {
                                                                navItem.destination === "external" &&
                                                                <a href={navItem.href}>
                                                                    {navItem.title}
                                                                </a>
                                                            }
                                                            {
                                                                navItem.dropdown.length > 0 &&
                                                                <ul className={"rd-navbar-dropdown"}>
                                                                    {
                                                                        navItem.dropdown.map((dropdownItem) => {
                                                                            return (
                                                                                <li>
                                                                                    <a href={dropdownItem.href}>
                                                                                        {dropdownItem.title}
                                                                                    </a>
                                                                                </li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            }
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}


export default Navbar