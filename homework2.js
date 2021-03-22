//2. Գրել ծրագիր որ նախորդ առաջադրանքի կողմից ստեղծված ֆայլ կանվանափոխի այդ պահի ամիս, օր, ժամ, րոպեով, վայրկյանով (Օրինակ 10_11_15_32_13.txt):
const fs = require('fs');
const os = require('os');
const date = new Date();
const newFileName = `./${date.getMonth()+1}_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.txt`;
fs.rename(`./${os.userInfo().username}.txt`,newFileName,(err)=>{
    if(err){
        return err.message;
    }
});