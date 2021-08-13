import React from "react";

const Loading = () => {
    return (
        <React.Fragment>
            <div className="ie-panel"><a href="http://windows.microsoft.com/en-US/internet-explorer/"><img
                src={process.env.PUBLIC_URL + "/images/ie8-panel/warning_bar_0000_us.jpg"} height="42" width="820"
                alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."/></a>
            </div>
            <div className="preloader">
                <div className="preloader-body">
                    <div className="cssload-container">
                        <div className="cssload-speeding-wheel"></div>
                    </div>
                    <p>Loading...</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Loading;