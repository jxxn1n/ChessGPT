// ==========================================
// ChessGPT v0.1
// script.js
// ==========================================

// ---------- TABLERO ----------

const board = document.getElementById("board");

const pieces = {

    r:"♜",
    n:"♞",
    b:"♝",
    q:"♛",
    k:"♚",
    p:"♟",

    R:"♖",
    N:"♘",
    B:"♗",
    Q:"♕",
    K:"♔",
    P:"♙"

};

const position = [

    "rnbqkbnr",
    "pppppppp",
    "........",
    "........",
    "........",
    "........",
    "PPPPPPPP",
    "RNBQKBNR"

];

// Crear tablero

function crearTablero(){

    board.innerHTML = "";

    for(let row = 0; row < 8; row++){

        for(let col = 0; col < 8; col++){

            const square = document.createElement("div");

            square.classList.add("square");

            if((row + col) % 2 === 0){

                square.classList.add("white");

            }else{

                square.classList.add("black");

            }

            const piece = position[row][col];

            if(piece !== "."){

                square.textContent = pieces[piece];

            }

            board.appendChild(square);

        }

    }

}

crearTablero();


// ==========================================
// CHAT
// ==========================================

const input = document.getElementById("user-input");
const button = document.getElementById("send-btn");
const messages = document.getElementById("chat-messages");

button.addEventListener("click", enviarMensaje);

input.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        enviarMensaje();

    }

});

function enviarMensaje(){

    const texto = input.value.trim();

    if(texto === "") return;

    agregarMensajeUsuario(texto);

    input.value = "";

    // Si todavía no existe la IA
    if(typeof responderIA !== "function"){

        agregarMensajeBot(
            "Mi cerebro todavía no está instalado."
        );

        return;

    }

    const respuesta = responderIA(texto);

    agregarMensajeBot(respuesta);

}

function agregarMensajeUsuario(texto){

    const div = document.createElement("div");

    div.className = "user";

    div.textContent = texto;

    messages.appendChild(div);

    bajarChat();

}

function agregarMensajeBot(texto){

    const div = document.createElement("div");

    div.className = "bot";

    div.textContent = texto;

    messages.appendChild(div);

    bajarChat();

}

function bajarChat(){

    messages.scrollTop = messages.scrollHeight;

}
