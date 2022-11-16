var idade = 70;
console.log(`IDADE: ${idade}`)
 if(idade < 16){
    console.log("Nao vota");
 }else if(idade >= 16 && idade <= 17){
    console.log("Voto optativo");
 }else if(idade >= 70){
    console.log("Voto optativo");
 }else if(idade >= 18 && idade < 70){
    console.log("Voto Obrigatorio");
 }

 var horario = new Date();
 var hora = horario.getHours();
 var min = horario.getMinutes();
 var segundos = horario.getSeconds();


 console.log(`${hora}  ${min}  ${segundos}`);
