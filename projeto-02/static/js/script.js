let firstname= document.querySelector('#name');
let email=document.querySelector('#email');
let comment=document.querySelector('#comment');
nomeOk = false;
commentOk=false;
btn = document.querySelector('#btn');
btn.disabled = true;

firstname.addEventListener('keydown',() => {
    if(firstname.value.length < 2){
        console.log(firstname.value.length)
        firstname.style.borderColor = "red";
        nomeOk=false;
    }
    else{
        firstname.style.borderColor = 'green';
        nomeOk = true;
    }

    if(nomeOk && commentOk){
        btn.disabled=false;
    }
    else{
        btn.disabled=true;
    }
})

comment.addEventListener('keydown',() =>{
    if (comment.value.length ==0 || comment.value.length>50){
        commentOk=false;
    }
    else{
        commentOk=true;
    }
    
    if(nomeOk && commentOk){
        btn.disabled=false;
    }
    else{
        btn.disabled=true;
    }
})

