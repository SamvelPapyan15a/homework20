//4.Ունենք const web=['html','css','js','txt'] զանգված: Գրել ծրագի որ կստեղծի զանգվածի անունով պապկա: Զանգվածի անդամներից այդ պապկայում ստեղծել  ֆայլեր հերթական անդամի անունով և վերջավորությունն էլ նույնը լինի(օրինակ html.html) պարունակություն էլ այդ անդամը:

const fs = require('fs');
const web = ['html','css','js','txt']

fs.mkdir('./web',(err)=>{
    if(err){
        return err.message;
    }
});
web.forEach(value => {
   fs.writeFile(`./web/${value}.${value}`,'',err=>{
       if(err){
           return err.message;
       }
   })
});
