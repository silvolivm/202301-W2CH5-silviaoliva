let filas = 80
let columnas = 80

function generarTablero () {
let tablero = []
for (let f = 0; f < filas; f++){
for (let c = 0; c < columnas; c++){

    }

}
}
generarTablero()

//crear un arrays

import { isFunctionExpression } from "typescript"

//dos bucles for que recoorrar tanto en el eje x como en el eje y

///matri igual al numero de celdas, crear un obj para crear tantos obj y otro buble para que nos cree otra lista de objetos
//bucle que va desde cero hasta la cantidad de columnas
let tablero;
let filas = 30;
let columnas = 30;

let obj = [[1,2,3],[2,3,4],[5,6,7]];
function createArrays (f,c){
const obj = new Array (c);
for ( y=0; y < c; y++){
obj[y] = new Array (f)
}
return obj;
}

///creamos el tblero
tablero = crearArrays2D (filas, columnas);

//objeto agente o turmita

function (x,y,estado){
this.x = x
this.y = y
this.estado = estado //vivo = 1 muerto = 2
this.estadoproximo = this.estado; //estado del siguiente ciclo
this.vecinos = [];

this addVecinos = function (){
const xVecino;
const yVecino;
for (i = -1; i<2; i++){
for(j= -1; j<2; j++){

        xVecino = this.x +j + columnas;
        yVecino = this.y + i + filas;

if (i!=0 ||j!=0){
this.vecinos.push(tablero [yVecino][xvecino]);

}
}
}

}

}

///funcion inicializar tablero

function inicializarTablero (obj){
let estado;
for (y=0; y=filas; y++){
for (x=0; x=columnas; x++){
estado = Math.floor(Math.random()\*2);
obj[x][y] = new Agente (x,y,estado)

    }

}
}

//estado de las celdas
//celda viva = 1 y celda muerta = 0
como se relaciona cada celda con sus vecinos ,
para cada celda ver cuantos vecinos vivos hay
con dos bluces for
gameState [(x-1), y-1]
gameState [(x), y-1]
gameState [(x+1), y-1]
gameState [(x+1), y]
gameState [(x-1), y]
gameState [(x-1), y-1]
gameState [(x), y+1]
gameState [(x+1), y+1]

let celula = 0
//regla una celuula muerta coon 3 vecinas vivas revive
if gameState[x,y] ===0 && gameState ===3;
gameState [x,y] = 1

/////un celula viva con menos 2 o mas de tres vecinas vivas, muere

if gameState [x, y] ===1 si celula < 2 o >3

gameState [x,y] = 0

limpiar pantalla

const fps= 30
function setInterval((......) => {

}, 1000/fps); () {

}

//causisticas
export const checkCase = (cell) => {

let livingCell = 1
let deadCell = 0

function ...... (){

for (let x = 0; x < columnas; x++){

}
}

/\*if (livingCell === 1){
<2 retun 0
==== 2 retur 1

> 3 retur 0
> if(livingCell === 3 );
> }
> return 1;\*/

if (cell ===1){
if (livingCell === 2 )
return 1;

if ( deadCell < 2 || deadCell > 3 )
return 0;
};
if (deadCell === 3) {
return 1;
}

};

//let rows = 30;
//let cold = 30;
//const playing = false;

let grid = new Array(rows);
let nextGrid
const initialGame = () => {
for (let i = 0 i < rows; i++){

}
}
