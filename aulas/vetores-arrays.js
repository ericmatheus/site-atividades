let num = [22,10,3];



num.sort();

console.log(num);
console.log(`TAMANHO VETOR:${num.length}`);
console.log("FORMATO FOR");
for(var cont = 0; cont < num.length; cont++){
    console.log(num[cont]);
}

console.log("FORMATO FOR IN");

for(var cont in num){
    console.log(num[cont]);
}

console.log(num.indexOf(3));

