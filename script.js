
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

const position=[

"rnbqkbnr",
"pppppppp",
"........",
"........",
"........",
"........",
"PPPPPPPP",
"RNBQKBNR"

];

for(let row=0;row<8;row++){

for(let col=0;col<8;col++){

const square=document.createElement("div");

square.classList.add("square");

if((row+col)%2==0){

square.classList.add("white");

}else{

square.classList.add("black");

}

const piece=position[row][col];

if(piece!="."){

square.textContent=pieces[piece];

}

board.appendChild(square);

}

}
