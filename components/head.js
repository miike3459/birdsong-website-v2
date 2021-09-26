import React from 'react';
import addBasePath from '../util/path';

export default class MetaLink extends React.Component {
    /* Allow meta links to respect the base path. */
    render() {
        let {href, ...props} = this.props;
        return <link {...props} href={addBasePath(href)} />
    }
}
