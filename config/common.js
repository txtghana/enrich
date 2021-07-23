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
    generalEnrichmentUrl: 'http://pro.jobsdotgo.com/enrich',
    enrichTimeout: 1000 * 60 * 2,
}