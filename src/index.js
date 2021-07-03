const enrich = {
    urlParamsRetrived: false,
    urlParams: null,

    getUrlParams: () => {
        if (enrich.urlParamsRetrived) {
            return enrich.urlParams
        }

        const queryString = window.location.search
        enrich.urlParams = new URLSearchParams(queryString)
        enrich.urlParamsRetrived = true

        return enrich.urlParams
    },

    msisdn: () => {
        return enrich.enriched('msisdn')
    },

    network: () => {
        return enrich.enriched('netwok')
    },

    enriched: (name) => {
        return enrich.getUrlParams() ? enrich.getUrlParams().get(name) : 5
    },
}

module.exports = { enrich }