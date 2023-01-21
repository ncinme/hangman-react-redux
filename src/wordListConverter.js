/*
Converts the dictionary.txt file to an array and write it to wordList.js file.
Reading/Writing file is node js methods, thus this script has to be run using 
$node wordListConverter.js or, 
$npm run wordListConverter (I have added it as a script in package.json)
*/
const { readFileSync, writeFile } = require('fs');

const contents = readFileSync('./src/word_list_10000.txt', 'utf-8');
const arr = `const wordList =  ["${contents.split(/\r?\n/).join('"," ')}"] \n export default wordList`;

console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

writeFile('./src/wordList.js', arr, function (err) {
    if (err) throw err;
    console.log('Saved!');
});