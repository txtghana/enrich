export function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(storeLocation, error)
    } else {
        storeLocation(null)
    }
}

export function canGetLocation() {
    return true;
}

function storeLocation(position) {
    const latitude = !position || position.coords.latitude
    const longitude = !position || position.coords.longitude

    saveProviderData('declined_location', !position)
    saveProviderData('latitude', latitude)
    saveProviderData('longitude', longitude)
}

function error() {
    saveProviderData('declined_location', false)
    saveProviderData('latitude', null)
    saveProviderData('longitude', null)
}