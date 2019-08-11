const parse = (str) => {
    // all words but contractions and _
    // let words = str.match(/\b(\w+)\b/g)

    // all words but _
    // let words = str.match(/\b(\w+)'?(\w+)?\b/g)

    // all words but contractions
    // let words = str.match(/[^_\W]+/g)

    // all words (excludes special characters from other languages)
    let words = str.match(/([^_\W]+)'?[^_\W]/g)
    // taking care of casing
    words = words.map(word => word.toLowerCase())
    console.log(str)
    return words
}

const build_bigram_histogram = (word_list) => {
    const bigram_histogram = {}
    if (word_list.length === 1) {
        return bigrams
    }
    for (let i = 0; i < word_list.length - 1; i++) {
        let f_word = word_list[i]
        let s_word = word_list[i+1]
        let bigram = f_word + '.' + s_word
        if (bigram_histogram[bigram]) {
            bigram_histogram[bigram] = +bigram_histogram[bigram] + 1
        } else {
            bigram_histogram[bigram] =  + 1
        }
    }
    return bigram_histogram
}

let string_list = parse("This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation  and-spaces ")
console.log(build_bigram_histogram(string_list))
string_list = parse(`Let's try this out, now.`)
console.log(build_bigram_histogram(string_list))
string_list = parse(`The quick brown fox and the quick blue hare.`)
console.log(build_bigram_histogram(string_list))

module.exports = { parse }