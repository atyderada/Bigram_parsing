const parser = require('./bigram_parser')
const TextFileReader = require('./file_reader')
const writer = require('./file_writer')
const readline = require('readline')

// Use readline to create command line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log(`
Welcome to the Bigram Parsing app!
Version: 1.0.0

Usage: Enter the name of the text file you wish to parse
(don't forget to include that file in the text_files folder inside the project folder)
`)

rl.question('Enter the name of the file: ', file_name => {
    if (file_name) {
        const file_path = `./text_files/${file_name}`
        let reader = new TextFileReader(file_path)
        reader.read(() => {
            const bigrams = parser.parse_bigrams(reader.data)
            const histogram = parser.build_bigram_histogram(bigrams)
            writer.write(histogram)
        })
    } else {
        console.log('Invalid text file name. Please restart the program.')
    }
    rl.close()
})