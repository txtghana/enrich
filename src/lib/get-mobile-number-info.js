import config from "config"
import getFingerprint from 'get-browser-fingerprint'

export function getMobileNumberInfo() {
    const sptScript = document.getElementById('sevopixel-sdk');

    if (!sptScript) {
        return true
    }

    const referrer = sptScript.dataset['ref']
    const callback = sptScript.dataset['callback']
    const sptKey = sptScript.dataset['key']
    if (sptKey) {
        const fingerprint = getFingerprint()
        window.location.href = config.sevopixelEnrichUrl + '?spt_key=' + sptKey + '&fingerprint=' + fingerprint
        }
        else if (referrer && callback) {
            let redirectTo = config.generalEnrichUrl + '?ref=' + referrer
            redirectTo += callback ? '&callback=' + callback : ''
            window.location.href = redirectTo
        }

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