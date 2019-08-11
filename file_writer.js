'user strict'

const fs = require('fs');

const write = (object) => {
    fs.writeFile('./output/output.txt', JSON.stringify(object), (err) => {
        if (err) {
            console.error(err)
            return
        }
        console.log('Bigram histogram has been writen to output.txt')
    })
}

module.exports = { write }
 