let num=require('readline-sync');
let age=num.question('Enter age of a person:')
if (age>=18){
    console.log('you are eligible for vote')
}else{
    console.log('you are not eligible for vote')
}