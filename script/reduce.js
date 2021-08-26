function myReduce (array, callback, valorInicial) {

    if (valorInicial === undefined) {
        valorInicial = 0;
    }
    
    let acc = valorInicial;

    for (let i = 0; i < array.length; i++) {
        acc = callback(acc, array[i], i, array)
    }
}