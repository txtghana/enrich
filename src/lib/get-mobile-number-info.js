import config from "../config";

export function getMobileNumberInfo() {
    window.location = config.sevopixelEnrichUrl;
}

export function canGetMobileNumberInfo() {
    return document.referrer === config.sevopixelEnrichReferrer
}

let urlParamsRetrived = false
let urlParams = null

const getUrlParams = () => {
        if (enrich.urlParamsRetrived) {
            return enrich.urlParams
        }

        const queryString = window.location.search
        enrich.urlParams = new URLSearchParams(queryString)
        enrich.urlParamsRetrived = true

        return enrich.urlParams
    }

    const msisdn = () => {
            return enrich.enriched('msisdn')
        }

        const network = () => {
                return enrich.enriched('netwok')
            }

            const enriched = (name) => {
                    return enrich.getUrlParams() ? enrich.getUrlParams().get(name) : 5
                }