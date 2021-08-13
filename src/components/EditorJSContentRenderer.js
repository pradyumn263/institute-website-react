import React from "react";
import Output from 'editorjs-react-renderer'
import Delimiter from "./rederers/Delimiter";

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
    }
}

const styles = {}

const classes = {
    header: "offset-top-20",
    list: {
        container: "list list-marked"
    }
}

const renderers = {
    delimiter: Delimiter
}

const EditorJSContentRenderer = ({data = sampleData}) => {
    return (
        <Output data={data} classNames={classes} config={config} renderers={renderers}></Output>
    )
}

export default EditorJSContentRenderer;