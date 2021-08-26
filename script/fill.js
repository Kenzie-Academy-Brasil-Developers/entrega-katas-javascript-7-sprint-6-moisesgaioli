function myFill (array, valor, inicio, fim) {

    if (inicio === undefined && fim === undefined) {
        for(let i = 0; i < array.length; i++) {
            array[i] = valor;
        }
    }

    if (inicio < 0) {
        inicio = array.length + inicio;
    }
    
    if(fim < 0) {   
        fim = array.length + fim;
    }

    if (inicio === undefined && fim === undefined) {
        for(let i = 0; i < array.length; i++) {
            array[i] = valor;
        }
    }

    if (fim === undefined) {
        for(let i = inicio; i < array.length; i++) {
            array[i] = valor;
        }
    }

    for (let i = inicio; i < fim; i++) {
        array[i] = valor;
    }

    

    return array
    

}




