const parser = require('./bigram_parser')
const chai = require('chai')

it('Correctly parses no bigrams from an empty string', () => {
    chai.expect(parser.parse_bigrams(''))
        .to.have.members([])
})

it('Correctly parses no bigrams from string with a single word', () => {
    chai.expect(parser.parse_bigrams('Word'))
        .to.have.members([])
})

it('Correctly parses bigrams from string with different casing', () => {
    chai.expect(parser.parse_bigrams('The quick brown fox and the Quick blue hare.'))
        .to.have.members(['the quick', 'quick brown', 'brown fox', 'fox and', 'and the', 'the quick', 'quick blue', 'blue hare'])
})

it('Correctly parses bigrams from string with punctuation', () => {
    chai.expect(parser.parse_bigrams('This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation.'))
        .to.have.members(['this is', 'is an', 'an example', 'example of', 'of a', 'a string', 'string with', 'with punctuation'])
})

it('Correctly returns an empty histogram from a list without any bigrams', () => {
    chai.expect(parser.build_bigram_histogram([]))
        .to.eql({})
})

it('Correctly returns an empty histogram from a list with invalid diagrams', () => {
    chai.expect(parser.build_bigram_histogram(['That ', 'car', ' state', 'yellow cat city']))
        .to.eql({})
})

it('Correctly counts the bigrams where a biagram is present more than once', () => {
    chai.expect(parser.build_bigram_histogram(['the quick', 'quick brown', 'brown fox', 'fox and', 'and the', 'the quick', 'quick blue', 'blue hare']))
        .to.eql({
            'the quick': 2,
            'quick brown': 1,
            'brown fox' : 1,
            'fox and': 1,
            'and the' : 1,
            'quick blue' : 1,
            'blue hare': 1
    })
})

it('Correctly counts the bigrams where none of them repeat', () => {
    chai.expect(parser.build_bigram_histogram(['this is', 'is an', 'an example', 'example of', 'of a', 'a string', 'string with', 'with punctuation']))
        .to.eql({
            "this is": 1,
            "is an": 1,
            "an example": 1,
            "example of": 1,
            "of a": 1,
            "a string": 1,
            "string with": 1,
            "with punctuation": 1
    })
})