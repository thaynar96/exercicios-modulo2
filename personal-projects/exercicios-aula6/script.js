const btn1= document.getElementById("um");
const btn2= document.getElementById("dois");
const btn3= document.getElementById("tres");


btn1.onclick=function(){
    alert("Pedido confirmado! Pizza á caminho.");
    document.getElementById("um").style.filter = "grayscale(90%)";
    document.getElementById("um").innerHTML='escolhida'
    btn2.remove();
    btn3.remove();
};

btn2.onclick = function(){
    alert("Pedido confirmado! Pizza á caminho.");
    document.getElementById("dois").style.filter = "grayscale(90%)";
    btn2.remove();
};

btn3.onclick = function(){
    alert("Pedido confirmado! Pizza á caminho.");
    document.getElementById("tres").style.filter = "grayscale(90%)";
    document.getElementById("tres").style.size.width = "100px";
    document.getElementById("tres").style.size.height = "100px";
    btn3.remove();

};

