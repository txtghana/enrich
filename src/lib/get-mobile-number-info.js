import config from "../config";

export function getMobileNumberInfo() {
    window.location = config.sevopixelEnrichUrl;
}

export function canGetMobileNumberInfo() {
    // return document.referrer !== config.sevopixelEnrichReferrer
    return enriched('rich') == 1
}

let urlParamsRetrieved = false
let urlParams = null

const getUrlParams = () => {
    if (urlParamsRetrieved) {
        return urlParams
    }

    const queryString = window.location.search
    urlParams = new URLSearchParams(queryString)
    urlParamsRetrieved = true

    return urlParams
}

const msisdn = () => {
    return enriched('msisdn')
}

const network = () => {
    return enriched('netwok')
}

const enriched = (name) => {
    return getUrlParams() ? getUrlParams().get(name) : null
}