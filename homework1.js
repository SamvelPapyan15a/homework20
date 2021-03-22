//1. Գրել ծրագիր որը կստեղծի ֆայլ Ձեր համակարգչի user անունով և այդ ֆայլում գրել համակարգչի userinfo-ն:

const os = require('os');
const fs = require('fs');

fs.writeFile(`${os.userInfo().username}.txt`, JSON.stringify(os.userInfo()),(err)=>{
   if(err){
       return err.message;
   }
});