var reg = window.document.getElementById('registro');
var div = window.document.getElementById('div3');
var relatorio = window.document.getElementById('div2-2');
var campo = window.document.getElementById('numeroEntrada');

var valores = [];

relatorio.innerHTML = `<p id='titulo'>RESULTADO</p> <br>`;
function adicionar(){
    
    relatorio.innerHTML = '';
    
    var numero = window.document.getElementById('numeroEntrada');
    
    relatorio.innerHTML = `<p id='titulo'>RESULTADO</p> <br>`;

    if(isNumber(numero.value)  && !inList(numero.value, valores)){
        numero = Number(numero.value); //Converte de String para Number e insere na variavel numero
        valores.push(numero);
        
        

        let item = window.document.createElement('option');
        item.text = `Num Added: ${numero} `

        reg.appendChild(item);  

        div.innerHTML = `Tipo ${typeof(numero)}`
        div.innerText = numero;
        
       
        
    }else{
        alert('ERRO');
    }
    campo.value = '';
    campo.focus();
}

function finalizar(){
    
    if(valores.length == 0){
        alert('ERRO: Sem valores na lista');
    }else{
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for(let cont in valores){
            soma += valores[cont];
            if(valores[cont] > maior){
                maior = valores[cont];
            }
            if(valores[cont] < menor){
                menor = valores[cont];
            }
        }

        media = (soma/valores.length);

        
        relatorio.innerHTML += `<p>QTD Nº: ${valores.length}</p>`;
        relatorio.innerHTML += `<p>MAIOR VALOR: ${maior}</p>`;
        relatorio.innerHTML += `<p>MENOR VALOR: ${menor}</p>`;
        relatorio.innerHTML += `<p>SOMA: ${soma}</p>`;
        relatorio.innerHTML += `<p>MEDIA: ${media}</p>`;
        
    }  
}

function isNumber(n){
    if(Number(n) >= 0 && Number(n) <= 20){
        return true;
    }else{
        return false;
    }
}

function inList(n,lista){
    if(lista.indexOf(Number(n)) == -1){
        return false;
    }else{
        return true;
    }
}
