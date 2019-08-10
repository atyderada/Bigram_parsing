'user strict'

const fs = require('fs'),
    es = require('event-stream');

class TextFileReader {
    constructor(filename) {
        this.reader = fs.createReadStream(filename, { encoding: 'utf8' })
        this.batchSize = 100
        this.lineNumber = 0
        this.data = []
    }

    read(callback) {
        this.reader
            .pipe(es.split())
            .pipe(es.mapSync(line => {
                ++this.lineNumber
                this.data.push(line)

                if (this.lineNumber % this.batchSize === 0) {
                    callback(this.data)
                }
            }))
            .on('error', function(err) {
                console.log('Error while reading file.', err);
            })
            .on('end', function() {
                console.log('Read entire file.')
            })
    }

    continue () {
        this.data = []
        this.reader.resume()
    }
}

module.exports = TextFileReader
