import React from 'react';
import addBasePath from '../util/path';

export default class Image extends React.Component  {
    /* Create an image component that doesn't use loaders so it can be exported.. */
    render () {
        let {src, alt, ...props} = this.props;
        src = src?.src || src;  // image passed through import will return an object
        return <img {...props} src={addBasePath(src)} alt={alt}/>
    }
}