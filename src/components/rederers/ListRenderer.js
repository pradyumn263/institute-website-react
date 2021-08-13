import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const validListStyles = ['ordered', 'unordered'];
const supportedKeys = ['container_ordered', 'container_unordered', 'listItem'];

const ListRenderer = ({data}) => {
    if (!data) return '';

    let content = [], listType = 'unordered';
    if (typeof data === 'string') content.push(data);
    else if (typeof data === 'object') {
        if (data.items && Array.isArray(data.items))
            content = data.items.map((item, index) =>
                <li key={index}>{ReactHtmlParser(item)}</li>);
        if (data.style && validListStyles.includes(data.style)) listType = data.style;
    }

    if (content.length <= 0) return '';
    if (listType === 'ordered') return <ol className={"list list-ordered text-start"}>{content}</ol>;

    return <ul className={"list-marked list offset-top-10"}>{content}</ul>;
};

export default ListRenderer;