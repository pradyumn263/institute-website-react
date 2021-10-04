import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import BreakingNews from "../components/BreakingNews";
import Announcements from "../components/Announcements";
import SecondaryNavbar from "../components/SecondaryNavbar";

const HomePage = () => {
    return (
        <React.Fragment>
            <Helmet>

            </Helmet>

            <div className="page">
                <Navbar></Navbar>
                <Slideshow></Slideshow>
                <BreakingNews></BreakingNews>
                <SecondaryNavbar></SecondaryNavbar>
                <div className="container">
                    <div className="row">
                        <Announcements></Announcements>
                        <Announcements></Announcements>
                        <Announcements></Announcements>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        </React.Fragment>
    )
}

export default HomePage;