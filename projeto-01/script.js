const btn = document.getElementById('humor');
const homem = document.getElementById('homem');
btn.onclick = function(){
    if(btn.value === "trocar"){
        homem.src = 'img/homem-feliz.png';
        btn.value = 'normal';  
        }
    else if(btn.value === "normal"){

        homem.src = 'img/homem-triste.png';
        btn.value = 'outro';
    }
    else{
        homem.src ='img/homem.png';
        btn.value = 'trocar';
    }
        
        }    
