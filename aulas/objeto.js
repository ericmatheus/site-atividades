let amigo = {
    nome: 'Jose',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log("Engordou!!!")
        this.peso += p;
    }
};
amigo.engordar(20);


let tipo = typeof(amigo);
console.log(tipo);
console.log(amigo.nome);
console.log(amigo.peso);