
function contar() {

    let numInicio = window.document.getElementById('txtInicio')
    let numFim = window.document.getElementById('txtFim')
    let numPasso = window.document.getElementById('txtPasso')

    let resultado = window.document.getElementById('resultado');

   

    if(numFim.value.length == 0 || numInicio.value.length == 0 || numPasso.value.length == 0 || numPasso.value == 0 || numFim.value > 111){
        alert('[ERRO] Campo Inválido')
    }else{
        let i = Number(numInicio.value);
        let f = Number(numFim.value);
        let p = Number(numPasso.value);

        if(i < f){
            //contagem progressiva
            for(var cont = i; cont <= f; cont = cont + p){
                resultado.innerHTML += ` ${cont} \u{1f449}`    
            }
        }else{
            //contagem regressiva
            for(var cont = i; cont >= f; cont -= p){
                resultado.innerHTML += ` ${cont} \u{1f449}`
            }
        }
        resultado.innerHTML += ` \u{1f3c1}`
        

    }
    
    

}


