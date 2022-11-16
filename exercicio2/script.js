

function verificar() {

    var data = new Date();
    var anoAtual = data.getFullYear();
    var anoNascimento = window.document.getElementById('textoAno');
    var resultado = window.document.getElementById('resultado2')


    if (anoNascimento.value.length == 0 || anoNascimento.value > anoAtual) {
        alert('ERRO = Dados informado possivelmente incorreto!');
    } else {

        var opcaoSex = document.getElementsByName('radioSex');
        var idade = (anoAtual - anoNascimento.value);
        var img = window.document.getElementById('imagem');

        /*
        essa eh uma forma de criar um elemento diretamente do JavaScript
        var img = document.createElement('img');

        Essa eh uma forma de atualizar o valor de um atributo de um elemento
        img.setAttribute('id', 'foto');
        */

        if (opcaoSex[0].checked) {
            var genero = 'Homem';
            if (idade < 4) {
                img.src = 'images/imagemBebeMasc.jpg';
                //BEBE
            } else if (idade < 12) {
                img.src = 'images/imagemCriancaMasc.jpg';
                //crianca
            } else if (idade < 21) {
                img.src = 'images/imagemAdolescenteMasc.jpg';
                //adolescente
            } else if (idade < 50) {
                img.src = 'images/imagemAdultoMasc.jpg';
                //adulto
            }else{
                img.src = 'images/imagemIdosoMasc.jpg';
                //idoso
            }

        } else {
            var genero = 'Mulher';
            if (idade < 4) {
                img.src = 'images/imagemBebeFem.jpg';
                //BEBE
            } else if (idade < 11) {
                img.src = 'images/imagemCriancaFem.jpg';
                //crianca
            } else if (idade < 21) {
                img.src = 'images/imagemAdolescenteFem.jpg';
                //adolescente
            } else if (idade < 50) {
                img.src = 'images/imagemAdultoFem.jpg';
                //adulto
            }else{
                img.src = 'images/imagemIdosoFem.jpg';
                //idoso
            }
        }

        //resultado.innerHTML = `Idade calculada: ${idade} anos Sexo: ${opcaoSex}`;

        resultado.innerHTML = `RESULTADO: ${genero} com ${idade} anos`

    }








}