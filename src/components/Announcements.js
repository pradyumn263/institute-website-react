import React from "react";
import "../index.css"

const announcementsDataSample = {
    "heading": "Announcements and News",
    "data":
        [
            {
                "title": "75th Independence Day celebrations, 7:30AM 15th August",
                "startDate": "10th August, 2021",
                "endDate": "",
                "type": "file",
                "url": "https://www.google.com"
            },
            {
                "title":
                    "Final Year results have been announced",
                "startDate":
                    "4th August, 2021",
                "endDate":
                    "",
                "type":
                    "file",
                "url":
                    "https://www.google.com"
            },
            {
                "title":
                    "NIT Warangal now allows 6 months Internship through CCPD",
                "startDate":
                    "3rd August, 2021",
                "endDate":
                    "",
                "type":
                    "file",
                "url":
                    "https://www.google.com"
            },
            {
                "title":
                    "NIT Warangal now has a new Website",
                "startDate":
                    "30th July, 2021",
                "endDate":
                    "",
                "type":
                    "file",
                "url":
                    "https://www.google.com"
            },
            {
                "title":
                    "NIT Warangal now has a new Website",
                "startDate":
                    "30th July, 2021",
                "endDate":
                    "",
                "type":
                    "file",
                "url":
                    "https://www.google.com"
            },
            {
                "title":
                    "NIT Warangal now has a new Website",
                "startDate":
                    "30th July, 2021",
                "endDate":
                    "",
                "type":
                    "file",
                "url":
                    "https://www.google.com"
            }
        ]
}


const Announcements = ({announcementsData = announcementsDataSample}) => {
    return (
        <React.Fragment>
            <div className="col-lg-4 text-start col-sm-8">
                <aside className="inset-lg-left-30">
                    <div className="offset-top-60">

                        <h6 className="fw-bold">{announcementsData.heading}</h6>
                        <div className="text-subline"/>
                        <div className="text-start news-list">
                            {
                                announcementsData.data.map((announcement) => {
                                    return (
                                        <div className="offset-top-20">
                                            <article className="widget-post">
                                                <h6 className="fw-bold text-primary">
                                                    <a href={announcement.url}>
                                                        {announcement.title}
                                                    </a>
                                                </h6>
                                                <p className="text-dark">{announcement.startDate}</p>
                                            </article>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </aside>
            </div>
        </React.Fragment>
    )
}

export default Announcements;