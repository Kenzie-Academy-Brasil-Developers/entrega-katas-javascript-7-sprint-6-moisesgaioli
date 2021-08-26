function myIndexOf (array, elemento, index) {

    for (let i = index; i < array.length; i++) {
        if(elemento === array[i]) {
            return i;
        }
    }

    return -1;
}