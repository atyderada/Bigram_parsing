const parser = require('./parser.js')
const assert = require('assert')

it('correctly splits the words by punctuation and spaces', () => {
    assert.equal(parser.parse(`Let's try this out, now.`), [
        `Let's`, 'try', 'this', 'out', 'now'
    ])
})
