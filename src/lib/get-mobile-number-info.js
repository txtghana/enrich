import config from "config"
import getFingerprint from 'get-browser-fingerprint'
import {
    getUrl,
    getProviderData,
    saveProviderData,
    getSdk,
    isSevopixel,
    getDomainName
} from "../utils";

export function getMobileNumberInfo() {
    const sdk = getSdk();

    if (!sdk) {
        return true
    }

    const referrer = sdk.dataset['ref']
    const callback = sdk.dataset['callback']
    const sptKey = sdk.dataset['key']
    if (referrer || callback || sptKey) {
        saveProviderData(lastEnrichKey, Date.now())
    }

    if (sptKey) {
        const fingerprint = getFingerprint()
        window.location.href = config.sevopixelEnrichUrl + '?spt_key=' + sptKey + '&fingerprint=' + fingerprint
        }
        else if (referrer && callback) {
            let redirectTo = `${config.generalEnrichmentUrl}?ref=${referrer}`
            if (callback) {
                redirectTo += `&callback=${callback}`
            }

            window.location.href = redirectTo
        }

    return false
}

export function canGetMobileNumberInfo() {
    const isSevopixelApp = isSevopixel()
    const url = isSevopixelApp ? getUrl() : getDomainName()
    const lastEnrichKey = 'lastEnrich_' + url
    const lastEnrich = getProviderData(lastEnrichKey) || 0
    const elapsedTime = new Date() - lastEnrich
    const defaultElapsedTime = isSevopixelApp ? config.sevopixelEnrichTimeout : config.enrichTimeout

    return elapsedTime < defaultElapsedTime
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
