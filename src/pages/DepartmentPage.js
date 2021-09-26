import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import EditorJSContentRenderer from "../components/EditorJSContentRenderer";

const aboutUsData = {
    "time": 1632652373943,
    "blocks": [
        {
            "id": "N6iqG_q9KW",
            "type": "header",
            "data": {
                "text": "About Us",
                "level": 2
            }
        },
        {
            "id": "ceL9wqu_NI",
            "type": "paragraph",
            "data": {
                "text": "The Department of Computer Science &amp; Engineering was established in the year 1991. The department offers high quality undergraduate, postgraduate and doctoral programs. The B. Tech (Computer Science and Engineering) program was started in the year 1983 with an intake of 20 students. The intake was subsequently increased to120 in 2008. M. Tech (Computer Science and Engineering) program was started in 1987 with an intake of 18 and subsequently increased to 20 in 2008. M. Tech (Information Security) was introduced in the year 2008 Under ISEAP sanctioned by Ministry of Communication and Information Technology (MCIT), DOE, GOI, New Delhi with intake of 20. Later, it was renamed as Computer Science and Information Security. The Master of Computer Applications (MCA) program was started in 1986 with an intake of 30 and increased to 46 from 2008. B.Tech, M.Tech (CSE) and M.Tech (CSIS) programs were accredited in 2014 by NBA as per Washington Accord.&nbsp;"
            }
        }
    ],
    "version": "2.22.2"
}
const visionAndMissionData = {
    "time": 1632652842090,
    "blocks": [
        {
            "id": "N6iqG_q9KW",
            "type": "header",
            "data": {
                "text": "Vision",
                "level": 2
            }
        },
        {
            "id": "ceL9wqu_NI",
            "type": "paragraph",
            "data": {
                "text": "Attaining global recognition in Computer Science &amp; Engineering education, research and training to meet the growing needs of the industry and society."
            }
        },
        {
            "id": "v5yA9DY6cv",
            "type": "header",
            "data": {
                "text": "Mission",
                "level": 2
            }
        },
        {
            "id": "Jnc2AT9gEH",
            "type": "list",
            "data": {
                "style": "unordered",
                "items": [
                    "Imparting quality education through well-designed curriculum in tune with the challenging software needs of the industry.",
                    "Providing state-of-art research facilities to generate knowledge and develop technologies in the thrust areas of Computer Science and Engineering.",
                    "Developing linkages with world class organizations to strengthen industry-academia relationships for mutual benefit."
                ]
            }
        }
    ],
    "version": "2.22.2"
}

const DepartmentPage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <script src={process.env.PUBLIC_URL + "/js/core.min.js"}></script>
                <script src={process.env.PUBLIC_URL + "/js/script.js"}></script>
            </Helmet>
            <div className="page text-center">
                <Navbar></Navbar>
                <PageHeader></PageHeader>
                <section className="section section-xl bg-default">
                    <div className="container">
                        <div
                            className="tabs-custom tabs-vertical tabs-line tabs-line-1"
                            id="tabs-7"
                        >
                            {/*Nav tabs*/}
                            <ul className="nav nav-tabs">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" href="#tabs-7-1" data-toggle="tab">
                                        About Us
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" href="#tabs-7-2" data-toggle="tab">
                                        Vision &amp; Mission
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" href="#tabs-7-3" data-toggle="tab">
                                        Contacts
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" href="#tabs-7-4" data-toggle="tab">
                                        Departments &amp; Programs
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" href="#tabs-7-5" data-toggle="tab">
                                        Summer Session
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" href="#tabs-7-6" data-toggle="tab">
                                        Non-Degree Offerings
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" href="#tabs-7-7" data-toggle="tab">
                                        Online Learning
                                    </a>
                                </li>
                            </ul>
                            {/*Tab panes*/}
                            <div className="tab-content inset-lg-left-60">
                                <div className="tab-pane fade" id="tabs-7-1">
                                    <EditorJSContentRenderer data={aboutUsData}/>

                                    <div className="offset-top-30">
                                        <img
                                            className="img-responsive d-inline-block"
                                            src="images/academics-01-770x480.jpg"
                                            width={770}
                                            height={480}
                                            alt
                                        />
                                    </div>
                                    <div className="offset-top-30">
                                        <h6 className="fw-bold">Programs of Study</h6>
                                        <div className="text-subline"/>
                                        <div className="row row-10 offset-top-20">
                                            <div className="col-md-6 col-lg-4">
                                                <ul className="list list-unstyled list-marked">
                                                    <li>African American Studies</li>
                                                    <li>African Studies</li>
                                                    <li>American Studies</li>
                                                    <li>Anthropology</li>
                                                    <li>Applied Mathematics</li>
                                                    <li>Architecture</li>
                                                    <li>Art</li>
                                                    <li>Astronomy</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <ul className="list list-unstyled list-marked">
                                                    <li>Biomedical Engineering</li>
                                                    <li>Chemical Engineering</li>
                                                    <li>Chemistry</li>
                                                    <li>Computer Science</li>
                                                    <li>East Asian Languages</li>
                                                    <li>Ecology and Biology</li>
                                                    <li>Economics</li>
                                                    <li>Mathematics</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <ul className="list list-unstyled list-marked">
                                                    <li>Physics</li>
                                                    <li>Political Science</li>
                                                    <li>Portuguese</li>
                                                    <li>Psychology</li>
                                                    <li>Religious Studies</li>
                                                    <li>Sociology</li>
                                                    <li>Spanish</li>
                                                    <li>Statistics</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tabs-7-2">
                                    <EditorJSContentRenderer data={visionAndMissionData}/>
                                </div>
                                <div className="tab-pane fade" id="tabs-7-3">

                                    <div>
                                        <h6 className="fw-bold">Socials</h6>
                                        <div className="hr bg-gray-light offset-top-10"/>
                                        <ul className="list-inline list-inline-xs list-inline-madison">
                                            <li>
                                                <a
                                                    className="icon novi-icon icon-xxs fa fa-facebook icon-circle icon-gray-light-filled"
                                                    href="#"
                                                />
                                            </li>
                                            <li>
                                                <a
                                                    className="icon novi-icon icon-xxs fa fa-twitter icon-circle icon-gray-light-filled"
                                                    href="#"
                                                />
                                            </li>
                                            <li>
                                                <a
                                                    className="icon novi-icon icon-xxs fa fa-google icon-circle icon-gray-light-filled"
                                                    href="#"
                                                />
                                            </li>
                                            <li>
                                                <a
                                                    className="icon novi-icon icon-xxs fa fa-instagram icon-circle icon-gray-light-filled"
                                                    href="#"
                                                />
                                            </li>
                                        </ul>
                                        <div className="offset-top-30 offset-md-top-60">
                                            <h6 className="fw-bold">Phones</h6>
                                            <div>
                                                <div className="hr bg-gray-light offset-top-10"/>
                                            </div>
                                            <div className="offset-top-15">
                                                <ul className="list list-unstyled">
                                                    <li>
                                                        <span
                                                            className="icon icon-xs text-madison mdi mdi-phone text-middle"/>
                                                        <a
                                                            className="text-middle inset-left-10 text-dark"
                                                            href="tel:1-800-1234-567"
                                                        >
                                                            1-800-1234-567
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span
                                                            className="icon icon-xs text-madison mdi mdi-phone text-middle"/>
                                                        <a
                                                            className="text-middle inset-left-10 text-dark"
                                                            href="tel:1-800-6547-321"
                                                        >
                                                            1-800-6547-321
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="offset-top-30 offset-md-top-60">
                                            <h6 className="fw-bold">E-mail</h6>
                                            <div>
                                                <div className="hr bg-gray-light offset-top-10"/>
                                            </div>
                                            <div className="offset-top-15">
                                                <ul className="list list-unstyled">
                                                    <li>
                                                        <span
                                                            className="icon icon-xs text-madison mdi mdi-email-outline text-middle"/>
                                                        <a
                                                            className="text-primary text-middle inset-left-10"
                                                            href="mailto:info@demolink.org"
                                                        >
                                                            info@demolink.org
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="offset-top-30 offset-md-top-60">
                                            <h6 className="fw-bold">Address</h6>
                                            <div>
                                                <div className="hr bg-gray-light offset-top-10"/>
                                            </div>
                                            <div className="offset-top-15">
                                                <div className="unit flex-row unit-spacing-xs">
                                                    <div className="unit-left">
                                                            <span
                                                                className="icon icon-xs mdi mdi-map-marker text-madison"/>
                                                    </div>
                                                    <div className="unit-body">
                                                        <p>
                                                            <a className="text-dark" href="#">
                                                                2130 Fulton Street San Diego, CA 94117-1080 USA
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="offset-top-30 offset-md-top-65">
                                            <h6 className="fw-bold">Opening Hours</h6>
                                            <div>
                                                <div className="hr bg-gray-light offset-top-10"/>
                                            </div>
                                            <div className="offset-top-15">
                                                <div className="unit flex-row unit-spacing-xs">
                                                    <div className="unit-left">
                                                        <span
                                                            className="icon icon-xs mdi mdi-calendar-clock text-madison"/>
                                                    </div>
                                                    <div className="unit-body">
                                                        <div>
                                                            <p>Mon-Fri: 8:00am-8:00pm</p>
                                                        </div>
                                                        <div>
                                                            <p>Sat: 8:00am-3:00pm</p>
                                                        </div>
                                                        <div>
                                                            <p>Sun: Closed</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="tabs-7-4">
                                    <h2 className="fw-bold">Global Education</h2>
                                    <div className="hr divider bg-madison divider-md-0"/>
                                    <div className="offset-lg-top-60">
                                        <p>
                                            The Eric and Nicole Fisher Center for International and Area
                                            Studies at JCU is the University's focal point for encouraging
                                            and coordinating teaching and research on global affairs,
                                            regions, and cultures around the world. From science and
                                            engineering to arts and humanities, explore the many different
                                            ways in which faculty, students, and scholars at Jonathan
                                            Carroll undertake study, research and discussion about
                                            international and global issues.
                                        </p>
                                    </div>
                                    <div className="offset-top-30">
                                        <img
                                            className="img-responsive d-inline-block"
                                            src="images/academics-04-770x480.jpg"
                                            width={770}
                                            height={480}
                                            alt
                                        />
                                    </div>
                                    <div className="offset-top-30">
                                        <h6 className="fw-bold">Centers &amp; Initiatives</h6>
                                        <div className="text-subline"/>
                                        <div className="offset-top-20">
                                            <p>
                                                Discover academic and research centers and initiatives
                                                concentrating specifically on international topics including
                                                area studies, languages, law, science, arts and humanities and
                                                more.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="offset-top-30">
                                        <h6 className="fw-bold">Faculty Research &amp; Activities</h6>
                                        <div className="text-subline"/>
                                        <div className="offset-top-20">
                                            <p>
                                                Access the database of the Jonathan Carroll University
                                                faculty's worldwide research interests and projects. Spanning
                                                academic disciplines, JCU faculty members are involved in
                                                joint research centers and projects from Chile and Brazil to
                                                China and Japan.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="offset-top-30">
                                        <h6 className="fw-bold">Library Collections</h6>
                                        <div className="text-subline"/>
                                        <div className="offset-top-20">
                                            <p>
                                                Search the international collections of the Jonathan Carroll
                                                University Library, one of the world's leading research
                                                libraries which includes around 10.2 million volumes and
                                                information in all media, ranging from ancient papyruses to
                                                early printed books to electronic databases.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tabs-7-5">
                                    <h2 className="fw-bold">Summer Session</h2>
                                    <div className="hr divider bg-madison divider-md-0"/>
                                    <div className="offset-lg-top-60">
                                        <img
                                            className="img-responsive d-inline-block"
                                            src="images/academics-05-770x480.jpg"
                                            width={770}
                                            height={480}
                                            alt
                                        />
                                    </div>
                                    <div className="offset-top-30">
                                        <p>
                                            JCU Summer Session offers courses during the summer for JCU
                                            students, qualified undergraduate students from other colleges
                                            and universities, students about to enter their last year in
                                            high school, and adult learners. Additional programs offered
                                            through JCU Summer Session include: Study Abroad, English
                                            Language Institute, Online Courses, Writers' Conference, Drama
                                            and Film, and Foreign Language Courses.
                                        </p>
                                    </div>
                                    <div className="offset-top-30">
                                        <a className="btn button-primary" href="#">
                                            Choose a Program
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tabs-7-6">
                                    <h2 className="fw-bold">Non-Degree Offerings</h2>
                                    <div className="hr divider bg-madison divider-md-0"/>
                                    <div className="offset-lg-top-60">
                                        <p>
                                            You don't have to be a Jonathan Carroll University student to
                                            have access to a JCU education.
                                        </p>
                                        <p>
                                            From online courses to on-campus experiences, there are a range
                                            of learning opportunities available for non-degree seekers.
                                        </p>
                                    </div>
                                    <div className="offset-top-30">
                                        <img
                                            className="img-responsive d-inline-block"
                                            src="images/academics-06-770x480.jpg"
                                            width={770}
                                            height={480}
                                            alt
                                        />
                                    </div>
                                    <div className="offset-top-30">
                                        <h6 className="fw-bold">Jonathan Carroll College</h6>
                                        <div className="text-subline"/>
                                        <div className="offset-top-20">
                                            <p>
                                                Visit a class or take courses for credit without matriculating
                                                as a Jonathan Carroll University undergraduate.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="offset-top-30">
                                        <h6 className="fw-bold">Graduate &amp; Professional Schools</h6>
                                        <div className="text-subline"/>
                                        <div className="offset-top-20">
                                            <p>
                                                The schools of JCU offer non-degree programs ranging from
                                                research opportunities to continuing education.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tabs-7-7">
                                    <h2 className="fw-bold">Online Learning</h2>
                                    <div className="hr divider bg-madison divider-md-0"/>
                                    <div className="offset-lg-top-60">
                                        <p>
                                            We explore online learning for a wide and global audience: from
                                            lifelong learners seeking to improve knowledge skills, to
                                            undergraduate and graduate students looking to supplement their
                                            current classes or take a class online for college credit, a
                                            certificate or a degree.
                                        </p>
                                    </div>
                                    <div className="offset-top-30">
                                        <img
                                            className="img-responsive d-inline-block"
                                            src="images/academics-07-770x480.jpg"
                                            width={770}
                                            height={480}
                                            alt
                                        />
                                    </div>
                                    <div className="offset-top-30">
                                        <h6 className="fw-bold">Programs List</h6>
                                        <div className="text-subline"/>
                                        <div className="offset-top-20">
                                            <ul className="list list-unstyled list-marked">
                                                <li>Introduction to Psychology</li>
                                                <li>Mental Lives of Babies and Animals</li>
                                                <li>Causes and Consequences of Corruption</li>
                                                <li>Capital Punishment: Race, Poverty, &amp; Disadvantage</li>
                                                <li>Moral Foundations of Politics</li>
                                                <li>Introduction to Classical Music</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </React.Fragment>
    )
}

export default DepartmentPage