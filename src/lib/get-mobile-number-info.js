import config from "config"

export function getMobileNumberInfo() {
    const sptScript = document.getElementById('sevopixel-sdk');

    if (!sptScript) {
        return true
    }

    const sptKey = sptScript.dataset['key']

    window.location.href = config.sevopixelEnrichUrl+'?spt_key='+sptKey

    return false
}

export function canGetMobileNumberInfo() {
    const canGet = enriched('rich') !== '1'

    return canGet
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