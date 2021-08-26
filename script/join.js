function myJoin (array, separador) {

    let result = "";

    for (let i = 0; i < array.length; i++) {
        let string = array[i].toString();

        result += string + separador;
    }

    return result;
}
