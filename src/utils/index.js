import 'whatwg-fetch'

export function toCamelCase(word) {
    word = word.replace(/[^a-z0-9]/ig, '-').trim()

    word = word.split('-')
        .filter(wordPart => wordPart.trim())
        .map((wordPart, index) => {
            if (index === 0) {
                return wordPart
            }

            return wordPart[0].toUpperCase() + wordPart.substr(1)
        })
        .join("")

    return word
}

export function postData(url, data) {
    window.fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: typeof data !== 'string' ? JSON.stringify(data) : data
    })
    .then(checkFetchStatus)
    .catch(catchFetchError)
}

export function checkFetchStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    }

    const error = new Error(response.statusText)
    error.response = response
    throw error
}

export function parseFetchJSON(response) {
    return response.json()
}

export function catchFetchError(error) {
    console.log('Sevopixel request failed', error)
}