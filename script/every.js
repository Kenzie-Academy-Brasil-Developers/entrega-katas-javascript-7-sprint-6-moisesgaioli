function myEvery (array, callback) {

    for(let i = 0; array.length; i++) {
        if(callback(array[i], i, array)) {
            return true;
        }
    }

    return false;
}