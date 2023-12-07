function magicYear(num){
num=num+1
let num2=num
while(true){
    let d1= num%10;
    num= parseInt(num/10);
    let d2= num%10;
    num= parseInt(num/10);
    let d3= num%10;
    num= parseInt(num/10);
    let d4= num%10;
    if((d1!=d2 && d1!=d3) && (d1!=d4 && d2!=d3) && (d2!=d4 && d3!=d4)){
        return num2;
    }else{
        num2++;
        num=num2;
}
}}

module.exports = magicYear;