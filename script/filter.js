function myFinter (array, callback) {

    let result = [];

    for(let i = 0; i < array.length; i++) {

        if(callback(array[i, i, array])) {
            result.push(array[i]);
        }
    }

    return result;
}