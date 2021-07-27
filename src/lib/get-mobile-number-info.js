import config from "config"
import getFingerprint from 'get-browser-fingerprint'
import {
    getLastEnrichKey,
    getProviderData,
    saveProviderData,
    getSdk,
    isSevopixel,
} from "../utils";

export function getMobileNumberInfo() {
    const sdk = getSdk();

    if (!sdk) {
        return true
    }

    const referrer = sdk.dataset['ref']
    const callback = sdk.dataset['callback']
    const appId = sdk.dataset['id']
    const requestType = sdk.dataset['type'] || 'enrich'
    const sptKey = sdk.dataset['key']
    const lastEnrichKey = getLastEnrichKey()

    if (referrer || callback || sptKey) {
        saveProviderData(lastEnrichKey, Date.now())
    }

    if (sptKey) {
        const fingerprint = getFingerprint()
        window.location.href = config.sevopixelEnrichUrl + '?spt_key=' + sptKey + '&fingerprint=' + fingerprint
    } else if (appId) {
        let redirectTo = config.generalEnrichmentUrl[requestType]
        let searchParams = []

        if (requestType === 'enrich') {
            searchParams.push('app_session_id=' + appId)
            if (referrer) {
                searchParams.push('ref=' + encodeURIComponent(referrer))
            }
        } else {
            redirectTo = redirectTo.replace('{source_session_id}', appId)

            if (referrer) {
                searchParams.push('redirect_to_url=' + encodeURIComponent(referrer))
                }
        }

        if (callback) {
            searchParams.push('callback=' + encodeURIComponent(callback))
        }

        const searchString = searchParams.join('&')
        window.location.href = redirectTo + '&' + searchString
        }

    return false
}

export function canGetMobileNumberInfo() {
    const lastEnrichKey = getLastEnrichKey()
    const lastEnrich = getProviderData(lastEnrichKey) || 0
    const elapsedTime = new Date() - lastEnrich
    const env = sdk.dataset['test'] === 'true' ? 'test' : 'production'
    const defaultElapsedTime = isSevopixel() ? config.timeout[env].sevopixelEnrich : config.timeout[env].enrich

    return elapsedTime > defaultElapsedTime
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