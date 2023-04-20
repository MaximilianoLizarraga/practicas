
function contarLetras(string) {
    let mapa = new Map()
    

    for (let i in string) {
        if (mapa.has(string[i])) {
            let temp = mapa.get(string[i]) + 1
            mapa.set(string[i], temp)
        }else{
            mapa.set(string[i], 1)
        }
    }
    
    // for (let i = 0; i < string.length; i++){
    //     if (string[i] == string) {
    //             let temp = mapa.get(string[i]) + 1
    //             mapa.set(string[i], temp)
    //         }
    //         else {
    //         }
    //     }
    // }
    return mapa
}

// "hola, soy maxiamiliano"

// "hola, soy maximiliano"

console.log(contarLetras("hola, somos maximiliano 😎😍😋, el trolo de carlos y el numero ú 1 Red XxXxXxX"))




