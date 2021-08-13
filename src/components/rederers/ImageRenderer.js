import React from 'react';

const supportedKeys = ['img', 'figure', 'figcaption'];

const ImageOutput = ({data}) => {
    if (!data || !data.file || !data.file.url) return '';

    return (
        <React.Fragment>
            <div className="offset-top-35 offset-lg-top-60">
                <img className="img-responsive" width="400" height="250"
                     src={data.file.url} alt={data.caption || ''}/>
            </div>
            <div className="inset-xl-left-20">
                <p className="text-gray offset-top-20 inset-left-lg-30 fst-italic">{data.caption || ''}</p>
            </div>
        </React.Fragment>
    );
};

export default ImageOutput;