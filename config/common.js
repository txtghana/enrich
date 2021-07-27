export default {
    enrichable: [
        'mobileNumberInfo',
        'pageUrl',
        'location',
        'userDeviceInfo',
        'userActiveTime',
        'fingerprint',
    ],
    sevopixelSavedDataKey: '__sevopixel',
    generalEnrichmentUrl: {
        enrich: 'http://pro.jobsdotgo.com/enrich?encoded=1',
        subscribe: 'http://pro.jobsdotgo.com/subscribe/{source_session_id}?encoded=1',
        unsubscribe: 'http://pro.jobsdotgo.com/unsubscribe/{source_session_id}?encoded=1',
    },
    timeout: {
        test: {
            enrich: 1000 * 60 * 2, // 2 minutes
            sevopixelEnrich: 1000 * 60 * 2, // 2 minutes
        },
        production: {
            enrich: 1000 * 60 * 60 * 24 * 7 * 30, // 30 days
            sevopixelEnrich: 1000 * 60 * 2, // 2 minutes
        }
    }
}