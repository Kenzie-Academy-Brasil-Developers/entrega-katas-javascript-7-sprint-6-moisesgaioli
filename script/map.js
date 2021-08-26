function myMap (array, callback) {

    let result = []
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            result.push(arr[i]);
        }
    }

    return result;
}