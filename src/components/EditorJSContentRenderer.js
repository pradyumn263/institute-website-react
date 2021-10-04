import React from "react";
import DelimiterRenderer from "./rederers/DelimiterRenderer";
import {Helmet} from "react-helmet";
import TableRenderer from "./rederers/TableRenderer";
import Output from 'editorjs-react-renderer'
import ListRenderer from "./rederers/ListRenderer";
import HeaderRenderer from "./rederers/HeaderRenderer";
import ImageRenderer from "./rederers/ImageRenderer";

const sampleData = {
    "time": 1628838707279,
    "blocks": [
        {
            "id": "YsoCVt3v2Y",
            "type": "header",
            "data": {
                "text": "About Us",
                "level": 1
            }
        },
        {
            "id": "He876sXyr6",
            "type": "paragraph",
            "data": {
                "text": "<b>National Institute of Technology, Warangal</b> (Deemed University) , formerly known as <b>Regional Engineering College</b>, was established in 1959."
            }
        },
        {
            "id": "YnCYmNcPtT",
            "type": "paragraph",
            "data": {
                "text": "<b>Pandit Jawaharlal Nehru</b> laid the foundation stone for this institute on October 10, 1959, the first in the chain of 30 NITs (formerly known as RECs) in the country."
            }
        },
        {
            "id": "aq3xsikRR6",
            "type": "paragraph",
            "data": {
                "text": "The Institute is well known for its dedicated faculty, staff and the state-of-the art infrastructure conducive to a healthy academic environment.The Institute is constantly striving to achieve higher levels of technical excellence.  Evolving a socially relevant and yet internationally acceptable curriculum, implementing innovative and effective teaching methodologies and focusing on the wholesome development of the students are our concerns.  Thanks to UNESCO and UK assistance in the past, many developmental activities were undertaken.The World Bank Assistance under Technical Education Quality Improvement Programme (TEQIP during 2004-09) had been a timely help in the overall development of the Institute."
            }
        },
        {
            "id": "aKj3h0rbkz",
            "type": "paragraph",
            "data": {
                "text": "The Institute currently has thirteen academic departments and a few advanced research centres in various disciplines of engineering, pure sciences and management, with nearly 100 laboratories organized in a unique pattern of functioning, Central Library with state of the art facilities, Auditorium, Student Activity Centre, Mega Computer Centre, Indoor Games Complex, big stadium, Seminar&nbsp;"
            }
        },
        {
            "id": "qfk8xteYoS",
            "type": "paragraph",
            "data": {
                "text": "Halls with required infrastructure, Dispensary with state of art of facilities, etc. Faculty of repute, brilliant student community,&nbsp;excellent technical and supporting staff and an effective administration have all contributed to the pre-eminent status of N.I.T., Warangal.The Institute offers eight undergraduate programmes (B.Tech.,) in engineering, Twenty nine post graduate programmes (M.Tech., M.Sc., MCA and MBA) in engineering, sciences and management and research programmes in engineering, sciences, humanities, physical education and management.The institute is well-known for its Research and Development, Industrial consultancy, Continuing education and Training programmes for teachers and industrial personnel."
            }
        },
        {
            "id": "so_C2K_G-F",
            "type": "delimiter",
            "data": {}
        },
        {
            "id": "P-gzatmCrC",
            "type": "paragraph",
            "data": {
                "text": "N.I.T., Warangal is a residential institute with nearly 3355 (UG : 2251 &amp; PG : 1104) students apart from nearly 269 Ph.D., (150 Full Time and 119 Part time) Scholars.  It has 16 residential blocks including one mega &amp; one ultra-mega hostel for boys, two hostels for girls and one hostel for foreign students.  It has five messes for boys, one mess exclusively for girls and"
            }
        },
        {
            "id": "XsiBZRhicf",
            "type": "list",
            "data": {
                "style": "ordered",
                "items": [
                    "This is NIT Warangal, and this is a test to see how lists work.&nbsp;",
                    "We are going to try to put this list automatically on our page. This should not be a very difficult issue to be honest. But lets see how it goes",
                    "This is the third element of the list and <mark class=\"cdx-marker\">this is highlighted</mark>"
                ]
            }
        },
        {
            "id": "vWaidMaVmn",
            "type": "table",
            "data": {
                "withHeadings": true,
                "content": [
                    [
                        "#",
                        "First Name&nbsp;",
                        "Last Name",
                        "User Name"
                    ],
                    [
                        "2014-15",
                        "1",
                        "III B. Tech",
                        "BT 304"
                    ],
                    [
                        "2014-15",
                        "2",
                        "III B. Tech",
                        "BT 305"
                    ],
                    [
                        "2019-20",
                        "6",
                        "III B. Tech",
                        "CS303"
                    ]
                ]
            }
        }
    ],
    "version": "2.22.2"
}

const directorProfilePageData = {
    "time": 1628862418972,
    "blocks": [
        {
            "id": "ul7YT5EUlO",
            "type": "header",
            "data": {
                "text": "Director's Profile",
                "level": 1
            }
        },
        {
            "id": "oQPJAUJxVF",
            "type": "header",
            "data": {
                "text": "Prof. N.V. Ramana Rao, Director, NIT Warangal",
                "level": 2
            }
        },
        {
            "id": "2W-HTwyV9C",
            "type": "image",
            "data": {
                "file": {
                    "url": "https://nitw.ac.in/media/uploads/2017/10/23/Director.jpg",
                    "width": 405,
                    "height": 525
                },
                "caption": "",
                "withBorder": false,
                "stretched": true,
                "withBackground": false
            }
        },
        {
            "id": "3i3xEigPyg",
            "type": "paragraph",
            "data": {
                "text": "Prof. N.V. Ramana Rao earlier worked as <b>Rector &amp;  Professor of Civil Engineering</b>    at   JNTU Hyderabad before joining as the Director, NIT, Warangal.  He did his <b>BE</b> in Civil Engineering from (<b>Osmania</b>), <b>M.Tech from (IIT  Delhi)</b>,   <b>Ph.D.</b>  and <b>Post Doctorate </b>from <b>U.K.</b> in   Civil    and Structural  Engineering from <b>University of Wales, Swansea</b>, <b>UK</b>.  He has held several  Administrative posts as <b>Registrar, JNT University Hyderabad</b>, Kukatpally, Hyderabad from 30.04.2012 to 21.07.2015, as <b>Principal, JNTUH College of Engineering Hyderabad, Kukatpally</b>, Hyderabad from 30.04.2008 to  24.11.2011, as <b>Director, Bureau of Industrial Consultancy Services, JNT University</b>, Hyderabad from 05.09.2003 to 05.05.2006, as <b>Co-ordinator, Entrepreneurship Development Cell, JNT University,</b> Hyderabad from 01.08.2002 to 31.01.2004."
            }
        },
        {
            "id": "64QiSsCBBo",
            "type": "paragraph",
            "data": {
                "text": "He has <b>Edited</b> three books and published <b>157</b> papers in International journals/International Conferences/ National Journals/ National Conferences.  He has <b>Organized</b> 12 Conferences/workshops,   Delivered 15 invited lectures. He has Guided more than 6<b>0 M.Tech’s, 12 Ph.D’s</b> and guiding at present several Ph.Ds."
            }
        },
        {
            "id": "T9GdLHHBlM",
            "type": "paragraph",
            "data": {
                "text": "He has won&nbsp;<b>Several Awards/ Prizes/Certificates</b>. To name&nbsp; a few ,&nbsp;<b>Outstanding Concrete Engineer Award for the year 2012 </b>by A.P.&nbsp;Chapter of the Indian Concrete Institute.,&nbsp;Sir Arthur Cotton Memorial Prize&nbsp;by the Institute of Engineers (India) for the best paper in the IEI Journal, December, 2012),&nbsp;Sir Arthur Cotton Memorial Prize&nbsp;by the Institute of Engineers (India) in 2015,&nbsp;State Best Teacher Award for the year 2011&nbsp;by the Government of Andhra Pradesh.,&nbsp;Best Designer&nbsp;Award for year the 2004&nbsp;by Indian Concrete Institute,&nbsp; A.P., Hyderabad. He has been Awarded the&nbsp;1998 Commonwealth Fellowship&nbsp;to pursue Post Doctoral research at the University of Wales, Swansea. U.K.,&nbsp;Young Engineer Award for the year 1995&nbsp;by Government of Andhra Pradesh and Institution of Engineers, India, A.P. State Center. He &nbsp;has been awarded the 1989&nbsp;Commonwealth Scholarship&nbsp;to pursue PhD in Structural engineering at the&nbsp;University of Wales, Swansea, UK."
            }
        },
        {
            "id": "zCvEaM2xy2",
            "type": "paragraph",
            "data": {
                "text": "He has been Nominated as an<b>&nbsp;Expert Committee member constituted by the UGC for grant of Autonomous status</b>&nbsp;to various Technical Institutions He has been a Subject Committee&nbsp;Member of Telangana State Public Service Commission.&nbsp;He is a <b>Member of Telangana State Pollution Control Board</b>, Expert Committee Member of&nbsp;Telangana State Power Generation Corporation. He has been the&nbsp;<b>Convener of&nbsp; EAMCETs</b>,&nbsp; for more than 6 years of both combined AP&nbsp; and separate Telangana States."
            }
        },
        {
            "id": "WP7zU5Ma9k",
            "type": "paragraph",
            "data": {
                "text": "He has been a <b>Member&nbsp;of Academic Senate, JNT University, Hyderabad</b>,&nbsp;Past Chairman of the Indian Concrete Institute– AP Hyderabad Center,&nbsp;<b>Past Secretary of the Indian Concrete Institute– AP Hyderabad Center,&nbsp;Executive member of the Indian Institute of Bridge Engineers</b>. He has held Membership of&nbsp;Several Important State level Government Committees.&nbsp;He has been a&nbsp;Member of Several AICTE Inspection Committees, Board of Studies&nbsp;Chairman&nbsp;in Civil Engineering, JNTUH,&nbsp; External&nbsp;Expert Member&nbsp; of ISRO Departmental Promotion Committee (DPC. He has been a member of Several High Power Committees constituted by Govt of AP &amp; Telangana. He has been a member of the committee to frame affiliation guidelines for affiliated Engineering Colleges by Govt of Telangana.&nbsp; On the invitation from the&nbsp;President of Mauritius&nbsp;he has been a part of High level discussion on the need to engage the worlds of Art, Nature and Science in Mauritius."
            }
        },
        {
            "id": "lGs1mceOHB",
            "type": "paragraph",
            "data": {
                "text": "Prof. N.V. Ramana Rao&nbsp;took over as Director, NIT Warangal on 23.10.2017."
            }
        },
        {
            "id": "gCmpNvMbvY",
            "type": "header",
            "data": {
                "text": "Prof. N. V. Ramana Rao",
                "level": 5
            }
        },
        {
            "id": "tWZrHYN5dU",
            "type": "paragraph",
            "data": {
                "text": "Director"
            }
        },
        {
            "id": "A4h7ipOfrf",
            "type": "paragraph",
            "data": {
                "text": "National Institute of Technology, Warangal"
            }
        },
        {
            "id": "o3fWSZu-8C",
            "type": "paragraph",
            "data": {
                "text": "Warangal, Telangana"
            }
        },
        {
            "id": "WC_AGlY29o",
            "type": "paragraph",
            "data": {
                "text": "India"
            }
        },
        {
            "id": "0-A25psoIn",
            "type": "paragraph",
            "data": {
                "text": "<a href=\"mailto:director.nitw.ac.in\">director.nitw.ac.in</a>"
            }
        },
        {
            "id": "ouPnonHa8B",
            "type": "header",
            "data": {
                "text": "Office Details",
                "level": 4
            }
        },
        {
            "id": "N-YWh6ptjd",
            "type": "header",
            "data": {
                "text": "PA to Director",
                "level": 5
            }
        },
        {
            "id": "U9P3S-6M2X",
            "type": "paragraph",
            "data": {
                "text": "Phone Number: 246001"
            }
        },
        {
            "id": "k9MeWu9rWT",
            "type": "paragraph",
            "data": {
                "text": "<a href=\"mailto:pa2dir@nitw.ac.in\">pa2dir@nitw.ac.in</a>"
            }
        }
    ],
    "version": "2.22.2"
}

const config = {
    header: {
        disableDefaultStyle: true,
    },
    image: {
        disableDefaultStyle: true,
    },
    paragraph: {
        disableDefaultStyle: true,
    },
    list: {
        disableDefaultStyle: true
    },
    table: {
        disableDefaultStyle: true
    }
}

const styles = {}

const classes = {
    header: "",
    list: {
        container: "list list-marked"
    },
    table: {
        table: "table table-custom table-fixed bordered-table"
    }
}

const renderers = {
    header: HeaderRenderer,
    delimiter: DelimiterRenderer,
    table: TableRenderer,
    list: ListRenderer,
    image: ImageRenderer
}

const EditorJSContentRenderer = ({data = directorProfilePageData}) => {
    return (
        <React.Fragment>
            <Helmet>
                <script src={process.env.PUBLIC_URL + "/js/core.min.js"}></script>
                <script src={process.env.PUBLIC_URL + "/js/script.js"}></script>
            </Helmet>
            {/*<section className={"section text-md-start section-xl bg-default"}>*/}
            {/*    <div className="container">*/}
            {/*        <div*/}
            {/*            className="row">*/}
            {/*            <div className="col-sm-10 col-xl-8 inset-xl-right-10 order-xl-1">*/}
            <div className="font-change-applicable">
                <Output data={data} classNames={classes} config={config} renderers={renderers}></Output>
            </div>
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </React.Fragment>
    )
}

export default EditorJSContentRenderer;