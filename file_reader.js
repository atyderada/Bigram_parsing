'user strict'

const fs = require('fs'),
    es = require('event-stream');

class TextFileReader {
    constructor(filename) {
        this.reader = fs.createReadStream(filename, { encoding: 'utf8' })
        this.lineNumber = 0
        this.data = ''
    }

    read(callback) {
        this.reader
            .on('error', function(err) {
                console.log('Error while reading file.', err);
            })
            .pipe(es.split())
            .pipe(es.mapSync(line => {
                ++this.lineNumber
                this.data = this.data + `/${line}`
            }))
            .on('end', function() {
                callback(this.data)
            })
    }
}

module.exports = TextFileReader
