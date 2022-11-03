function bloqueiarcopia(Event) {
    var Event = Event ? Event : window.event;
    var tecla = (Event.keyCode) ? Event.keyCode : Event.which;
    
    if (tecla == 17) {
        mensagem();
    }
}

function mensagem(){
    alert('Conteudo bloqueado');
    return false;
}

document.onkeydown = bloqueiarcopia;
document.oncontextmenu = mensagem;




