document.addEventListener("copy",(event) => {
    event.preventDefault()
    mensagem()
});

function mensagem(){
    alert('Conteudo bloqueado');
    return false;
}

document.oncontextmenu = mensagem;




