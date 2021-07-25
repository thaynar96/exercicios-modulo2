function validar() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const comment = document.getElementById('comment').value;
    

    if (name != '' && password != '' && comment != '') {
        alert("enviado com sucesso");
        
    } else {
        alert("escreva em todos os campos");
    }
}