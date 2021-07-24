import 'whatwg-fetch'
import config from "config"

export function isSevopixel() {
    const sdk = getSdk();

    return sdk && sdk.dataset['key']
}

export function getSdk(key) {
    const script = document.getElementById('sevopixel-sdk')

    if (script) {
        return script.dataset[key]
    }

    return script
}

export function saveProviderData(key, value) {
    const savedData = JSON.parse(sessionStorage.getItem(config.sevopixelSavedDataKey) || '{}')
    savedData[key] = value
    sessionStorage.setItem(config.sevopixelSavedDataKey, JSON.stringify(savedData))
}

export function getProviderData(key) {
    const savedData = JSON.parse(sessionStorage.getItem(config.sevopixelSavedDataKey) || '{}')
    return savedData[key]
}

export function getUrl() {
    return `${location.protocol}//${location.host}${location.pathname}`
}

export function getDomainName() {
    return (new URL(window.location.href)).hostname
}

export function getFullUrl() {
    return location.href
}

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

export function toPascalCase(word) {
    word = toCamelCase(word)

    return word[0].toUpperCase() + word.substr(1)
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

export function getUserKey() {
    return
}