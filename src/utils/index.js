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