# Bigram Parsing

CLI program that reads in a text file and outputs a bigram histogram in an outpout text file.
It was built using node.js and mocha/chai for testing

## How to use:
- First clone or download the project
- cd into project folder
- Run npm install to get all the required packages
- Add the text file you wish to process to the text_files folder
- run 'node app' to start the application and follow the instructions
- The bigram histogram will be printed in a file called output.txt in the output folder

## Testing:
- Run 'npm test' to run all unit tests (includes bigram parsing and counting tests)

### Future improvements:
- Use chunking with stream reader to read data periodicaly and process at the same time
- Make bigram parsing more robust by supporting contractions and special characters from languages other than english
