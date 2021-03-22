//5.Գրել ծրագիր որ կկարդա Homework5 պապկայի ֆայլերը,  կստեղծի newDir պապկա և այնտեղ կտեղափոխի այն ֆայլերը իրենց պարունակություններով որոնք 1kB մեծ են :

const fs = require('fs');
fs.mkdir('./newDir',err => {
    if(err){
        return err.message;
    }
})
fs.readdir('./Homework5',(err,files)=>{
    if(err){
        return err.message;
    }
    files.forEach(value=>{
        fs.stat(`./Homework5/${value}`,(err1,stats) => {
           if(err1){
               return err.message;
           }
           if(stats.size >= 1024){
                fs.rename(`./Homework5/${value}`,`./newDir/${value}`,err2 => {
                    if(err2){
                        return err2.message;
                    }
                    console.log(`Moved file ${value} with size ${stats.size} bytes to newDir`);
                });
           }
        });
    });
});