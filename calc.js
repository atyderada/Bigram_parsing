const operations = require('./operations')
const readline = require('readline')

// Use readline to create command line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log(`
Calc.js

Welcome to the Node.js Calculator app!
Version: 1.0.0

Usage: The user will be prompted for two numbers,
then asked to select their operation of choice.
`)

rl.close()