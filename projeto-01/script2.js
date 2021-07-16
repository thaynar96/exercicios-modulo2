var btn2 = document.getElementById('humor2');
var mulher = document.getElementById('mulher');

btn2.onclick = function(){
    if(btn2.value === "trocar"){
        mulher.src = 'img/mulher-feliz.png';
        btn2.value = 'normal';  
        }
    else if(btn2.value === "normal"){

        mulher.src = 'img/mulher-triste.png';
        btn2.value = 'outro';
    }
    else{
        mulher.src ='img/mulher.png';
        btn2.value = 'trocar';
    }
        }