const parse_bigrams = (str) => {
    const bigrams = []
    if (str && str !== null) {
        let words = str.toLowerCase().match(/[^_\W]+/g)
        if (words && words.length > 1) {
            for (let i = 0; i < words.length - 1; i++) {
                bigrams.push(words[i] + ' ' + words[i + 1])
            }
        }
    }
    return bigrams
}

const validate_bigram = (bigram) => {
    if (bigram.split(' ').length > 2) return false
    return (/\b[\w]+ [\w]+\b/).test(bigram)
}

const build_bigram_histogram = (bigrams) => {
    const bigram_histogram = {}
    for (let i = 0; i < bigrams.length; i++) {
        let bigram = bigrams[i]
        if (validate_bigram(bigram)) {
            if (bigram_histogram[bigram]) {
                bigram_histogram[bigram] = +bigram_histogram[bigram] + 1
            } else {
                bigram_histogram[bigram] = 1
            }
        }
    }
    return bigram_histogram
}

module.exports = { parse_bigrams, build_bigram_histogram }