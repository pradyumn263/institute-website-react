import React from "react";
import {Helmet} from "react-helmet";

const defaultSlideshowData = [
    {
        url: process.env.PUBLIC_URL + "/images/slideshow/image1.jpeg"
    },
    {
        url: process.env.PUBLIC_URL + "/images/slideshow/image2.jpeg"
    },
    {
        url: process.env.PUBLIC_URL + "/images/slideshow/image3.jpeg"
    },
    {
        url: process.env.PUBLIC_URL + "/images/slideshow/image4.jpeg"
    },
]

export const Slideshow = ({slideshowData = defaultSlideshowData}) => (
    <React.Fragment>
        <Helmet>
            <script src={process.env.PUBLIC_URL + "/js/core.min.js"}></script>
            <script src={process.env.PUBLIC_URL + "/js/script.js"}></script>
        </Helmet>
        <section className="section">
            {/* Swiper*/}
            <div
                className="swiper-container swiper-slider swiper-slider-2"
                data-autoplay="true"
                data-height="42.1875%"
                data-loop="true"
                data-dragable="false"
                data-min-height="480px"
                data-slide-effect="true"
            >
                <div className="swiper-wrapper">

                    {
                        slideshowData.map(item => {
                            return (
                                <div
                                    className="swiper-slide"
                                    data-slide-bg={item.url}
                                    style={{backgroundPosition: "80% center"}}
                                >
                                    {/*<div className="swiper-slide-caption">*/}
                                    {/*    <div className="container">*/}
                                    {/*        <div className="row justify-content-sm-center justify-content-xl-start">*/}
                                    {/*            <div className="col-lg-9 text-lg-start col-sm-10">*/}
                                    {/*                <div data-caption-animate="fadeInUp" data-caption-delay={100}>*/}
                                    {/*                    <h1 className="fw-bold">*/}
                                    {/*                        <a href="academics.html">*/}
                                    {/*                            Inspiration, Innovation and Discovery.*/}
                                    {/*                        </a>*/}
                                    {/*                    </h1>*/}
                                    {/*                </div>*/}
                                    {/*                <div*/}
                                    {/*                    className="offset-top-20 offset-xs-top-40 offset-xl-top-60 inset-xl-right-100"*/}
                                    {/*                    data-caption-animate="fadeInUp"*/}
                                    {/*                    data-caption-delay={150}*/}
                                    {/*                >*/}
                                    {/*                    <h5>*/}
                                    {/*                        Any successful career starts with good education. Together*/}
                                    {/*                        with us you will have deeper knowledge of the subjects*/}
                                    {/*                        that will be especially useful for you when climbing the*/}
                                    {/*                        career ladder.*/}
                                    {/*                    </h5>*/}
                                    {/*                </div>*/}
                                    {/*                <div*/}
                                    {/*                    className="offset-top-20 offset-xl-top-40"*/}
                                    {/*                    data-caption-animate="fadeInUp"*/}
                                    {/*                    data-caption-delay={400}*/}
                                    {/*                >*/}
                                    {/*                    <a*/}
                                    {/*                        className="btn button-primary"*/}
                                    {/*                        href="login-register.html"*/}
                                    {/*                    >*/}
                                    {/*                        Sign Up for Excursion*/}
                                    {/*                    </a>*/}
                                    {/*                    <div className="inset-sm-left-30 d-xl-inline-block">*/}
                                    {/*                        <a*/}
                                    {/*                            className="btn button-default d-none d-xl-inline-block"*/}
                                    {/*                            href="academics.html"*/}
                                    {/*                        >*/}
                                    {/*                            Learn More*/}
                                    {/*                        </a>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            )
                        })
                    }
                </div>
                {/* Swiper Pagination*/}
                <div className="swiper-pagination"/>
            </div>
        </section>
    </React.Fragment>
)

export default Slideshow
