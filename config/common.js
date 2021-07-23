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
    enrichTimeout: 1000 * 60 * 60 * 24 * 7, // 1 week
        sevopixelEnrichTimeout: 1000 * 60 * 2, // 2 minutes
}