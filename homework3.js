//3.Գրել ծրագիր, որը կկարդա homework3.txt ֆայլի պարունակությունը, տեքստից կհեռացնի  ստորակետները  և կգրի replace.txt ֆայլում, որից հետո ջնջել homework3.txt ֆայլը:

const fs = require('fs');
const { Transform } = require('stream');

const readStream = fs.createReadStream('./homework3.txt');
const writeStream = fs.createWriteStream('./replace.txt');

const deleteCommas = new Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().replace(/,/g,""));
        callback();
    }
});

readStream.pipe(deleteCommas).pipe(writeStream);
fs.unlink('./homework3.txt',()=>{
    console.log('deleted');
});