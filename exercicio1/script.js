carregar();


function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    

    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();

    msg.innerText =  `Agora são ${hora} horas e ${minuto} minutos.`;
    msg.innerText =  `Horário: ${hora}:${minuto} `;
   // msg.innerText =  `${hora}:${minuto} `;

   
    
    
    if(hora >= 4 && hora < 12){
        img.src = 'images/imagemanha1.jpg';
        document.body.style.backgroundColor = '#df9100'
        //bom dia
    }else if(hora >= 12 && hora < 18){
        img.src = 'images/imagetarde2.jpg';
        document.body.style.backgroundColor = '#f7531e'
        //boa tarde
    }else if(hora >= 18 && hora <= 23){
        img.src = 'images/imagenoite2.jpg';
        document.body.style.backgroundColor = '#031b4e'
        //boa noite
    }else{
        img.src = 'images/imagenoite1.jpg';
        document.body.style.backgroundColor = '#0b092b'
        //boa madrugada
    }
}