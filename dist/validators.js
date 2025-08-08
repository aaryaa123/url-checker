/**
 * Checks if a URL is in a valid http/https format.
 * Requires a protocol and at least one dot in hostname.
 */
export function isValidUrlFormat(url) {
    const urlPattern = /^(https?:\/\/)([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i;
    if (!urlPattern.test(url))
        return false;
    try {
        const parsedUrl = new URL(url);
        return (!!parsedUrl.hostname &&
            (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:"));
    }
    catch (_a) {
        return false;
    }
}
//# sourceMappingURL=validators.js.map