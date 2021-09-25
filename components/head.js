import React from 'react';
import * as config from '../next.config';

const basePath = config.hasOwnProperty("basePath") ? config.basePath : "";

export default class MetaLink extends React.Component {
    /* Component to render meta links with respect to the defined basePath.
    We have to do this by ourselves because apparently meta link elements don't respect the basePath. */
    render() {
        let {href, ...props} = this.props;
        href = basePath ? basePath + "/" + href : href;
        // No validation of slashes or anything done here. Most browsers will accept a double slash or dots in the path,
        // so it's really not needed. We don't want to remove any path relativity the user puts in.
        console.log(href);
        return <link {...props} href={href} />
    }
}
