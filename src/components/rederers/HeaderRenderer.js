import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const HeaderRenderer = ({data}) => {
    if (!data) return '';
    let content = null;

    if (typeof data === 'string') content = data;
    else if (typeof data === 'object' && data.text && typeof data.text === 'string') content = data.text;

    if (!content) return '';
    if (typeof data === 'object' && data.level && typeof data.level === 'number') {
        switch (data.level) {
            case 1:
                return <h1>{ReactHtmlParser(content)}</h1>;
            case 2:
                return <h2>{ReactHtmlParser(content)}</h2>;
            case 3:
                return <h3>{ReactHtmlParser(content)}</h3>;
            case 4:
                return <h4>{ReactHtmlParser(content)}</h4>;
            case 5:
                return <h5>{ReactHtmlParser(content)}</h5>;
            case 6:
                return <h6>{ReactHtmlParser(content)}</h6>;
            default:
                return <h4>{ReactHtmlParser(content)}</h4>;
        }
    }
    return <h4>{ReactHtmlParser(content)}</h4>;
};

export default HeaderRenderer;