//next module is asychronous
const{readFileSync,writeFileSync} = require('fs')
//first readtwo files read files system use readfile
//we can create new files using writefilesync
//utf8 is a kind of string that allow to not having a buffer the buffer is a binary numbers 

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second);

writeFileSync(
    './content/newfile_result',
    `Here is the result: ${first} and ${second}`,'utf8')
