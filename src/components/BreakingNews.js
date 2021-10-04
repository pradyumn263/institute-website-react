import React from 'react';
import Ticker from "react-ticker";

const BreakingNews = () => {
    return (
        <Ticker mode="smooth">
            {({index}) => (
                <>
                    <div className="container">
                        <div className="row">
                            <h6 className={"p-3"}>This is a test Breaking News Announcement</h6>
                        </div>
                    </div>
                </>
            )}
        </Ticker>
    );
}

export default BreakingNews;