import * as config from '../next.config';

const basePath = config.hasOwnProperty("basePath") ? config.basePath : "";

export default function addBasePath(href) {
    // No validation of slashes or anything done here. Most browsers will accept a double slash or dots in the path,
    // so it's really not needed. We don't want to remove any path relativity the user puts in.
    return basePath ? basePath + "/" + href : href;
}