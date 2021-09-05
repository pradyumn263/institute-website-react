import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

import EditorJSContentRenderer from "./components/EditorJSContentRenderer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Slideshow from "./components/Slideshow";
import BreakingNews from "./components/BreakingNews";

function App() {
    useEffect(() => {
        window.onpopstate = e => {
            window.location.reload();
        }
    })
    return (
        <React.Fragment>
            <Helmet>
                <script src={process.env.PUBLIC_URL + "/js/core.min.js"}></script>
                <script src={process.env.PUBLIC_URL + "/js/script.js"}></script>
            </Helmet>
            <Loading></Loading>

            <div className="page">
                <Navbar></Navbar>
                <Slideshow></Slideshow>
                <BreakingNews></BreakingNews>
                <EditorJSContentRenderer></EditorJSContentRenderer>
                <Footer></Footer>
            </div>
        </React.Fragment>
    );
}

export default App;