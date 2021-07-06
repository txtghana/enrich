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

    sessionStorage.setItem('sevopixel_declined_location', !position)
    sessionStorage.setItem('sevopixel_latitude', latitude)
    sessionStorage.setItem('sevopixel_longitude', longitude)
}

function error() {
    sessionStorage.setItem('sevopixel_declined_location', false)
    sessionStorage.setItem('sevopixel_latitude', null)
    sessionStorage.setItem('sevopixel_longitude', null)
}