//next module is asychronous having a callback function that return an error and result
const{readFile,writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=> {
    if(err){
        console.log('Error readfile',err)
        return;
    }const first = result
readFile('./content/second.txt','utf8', (err,result)=> {
    if(err){
        console.log('Error readFile second',err)
        return;
    }const second = result;
    writeFile
    ('./content/newfile_result2',`Hello this is another createing file: ${first} and ${second}`,(err,result)=> {
        if(err){
            console.log(err)
            return;
        }
        console.log('done with the task')
   
    })

})

})
console.log('new starting task')