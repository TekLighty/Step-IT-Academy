var arr = [67, 89, 2, 530, 43];
var bigestNum = Number.MIN_VALUE;
for(var i of arr){
    console.log(i)
    if(bigestNum < i){
        bigestNum = i;
    }
}
console.log("bigest Number: " + bigestNum);