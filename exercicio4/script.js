


function gerar(){
    var numero = Number(window.document.getElementById('numero').value);
    var divResultado = window.document.getElementById('areaResultado');
    
    var campo = window.document.getElementById('numero');
    if(numero == ''){
        alert("[ERRO] campo vazio");
    }else{
        
        divResultado.innerHTML = '';
        for(var cont = 1; cont <= 10; cont++){
            

            let item = window.document.createElement('option');
            item.text = `${numero}X${cont} = ${numero*cont}`;
            divResultado.appendChild(item); //adiciona um elemento filho(item) dentro de um elemento(divResultado)
        }
        campo.value = '';
        
    }
}
