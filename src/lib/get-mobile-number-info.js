import config from "config"
import getFingerprint from 'get-browser-fingerprint'

export function getMobileNumberInfo() {
    const sptScript = document.getElementById('sevopixel-sdk');

    if (!sptScript) {
        return true
    }

    const sptKey = sptScript.dataset['key']
    const fingerprint = getFingerprint()

    window.location.href = config.sevopixelEnrichUrl+'?spt_key='+sptKey+'&fingerprint='+fingerprint

    return false
}

export function canGetMobileNumberInfo() {
    return enriched('rich') !== '1' && enriched('rich') !== '0'
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