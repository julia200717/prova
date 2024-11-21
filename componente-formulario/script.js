
function cadastrar() {
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const passaword = document.getElementById("passaword");

    const nomee = nomee.value;
    const email2 = email.value;
    const passaword2 = passaword2.value; 

    if(nomee === ""){
        nome.classList.add("erro")
        return
    }else{
    nome.classList.remove("erro")  
}
    if(email2 === ""){
        nome.classList.add("erro")
        return
    }
}