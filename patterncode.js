
    // 9 posiciones


let ArrayToTravel = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]
let y=0
let x=0
let startingPoint = [y,x]
let slopesUsed = []
let sequence = []
let visited= {}
const slopes = {
            1:{move: [y,x-1], type:1},// 1,
            2:{move:[y,x+1], type: 1},
            3:{move:[y+1,x], type: 2},
            4:{move:[y-1,x], type: 2},
            5:{move:[y+1,x-1], type: 3},
            6:{move:[y-1,x+1], type: 3}, 
            7:{move:[y+1,x+1], type: 4},
            8:{move:[y-1,x-1], type: 4},
            9:{move:[y+2,x-1], type: 5},
            10:{move:[y-2,x+1], type: 5},
            11:{move:[y+2,x+1], type: 6},
            12:{move:[y-2,x-1], type: 6},
            13:{move:[y+1,x-2], type: 7},
            14:{move:[y-1,x+2], type: 7},
            15:{move:[y+1,x+2], type: 8},
            16:{move:[y-1,x-2], type: 8},
            }

const posibleSlopes = {
    '00': [slopes[2],slopes[3],slopes[7],slopes[11],slopes[15]],
    '01': [slopes[1],slopes[2],slopes[3],slopes[5],slopes[7],slopes[9],slopes[11]],    
    '02': [slopes[1],slopes[3],slopes[5],slopes[9],slopes[13]],
    
    '10': [slopes[2],slopes[3],slopes[4],slopes[6],slopes[7],slopes[11],slopes[15]],
    '11': [slopes[1],slopes[2],slopes[3],slopes[4],slopes[5],slopes[6],slopes[7],slopes[8]],
    '12': [slopes[1],slopes,slopes[3],slopes[4],slopes[5],slopes[8],slopes[13],slopes[16]],
 
    '20': [slopes[2],slopes[4],slopes[6],slopes[10],slopes[12],slopes[14]],
    '21': [slopes[1],slopes[2],slopes[4],slopes[6],slopes[8],slopes[10],slopes[12]],
    '22': [slopes[1],slopes[4],slopes[6],slopes[8],slopes[10],slopes[12]],
}
let nuevo
while (!((Object.keys(visited).length == 9) && (slopesUsed.length == 8))){
    ArrayToTravel[y][x] =  1
    let mirar = ''+y+x
    let entradas = (Object.keys(posibleSlopes[mirar]).length)
    let entradaNueva = (Math.round((Math.random()*entradas)))
    nuevo = (posibleSlopes[''+y+x])[entradaNueva]
    console.log(nuevo)
    if (!slopesUsed.includes(nuevo.type)){
        slopesUsed.push(nuevo.type)
    }else{
            while (slopesUsed.includes(nuevo.type)){
                entradaNueva = (Math.round((Math.random()*entradas)))
                nuevo = (posibleSlopes[''+y+x])[entradaNueva]
            }
            slopesUsed.push(nuevo.type)
        }
    
 
    y = nuevo.move[0]
    x = nuevo.move[1]
    visited[''+x+y] = true
    console.log(ArrayToTravel)
}
    


// for (let x = 1; x<9;x++){
//     console.log(slopes([1,2],x))

// }