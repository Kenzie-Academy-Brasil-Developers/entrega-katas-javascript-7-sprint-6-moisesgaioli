function myIncludes (array, elemento, index) {

    for (let i = index; i < array.length; i++) {

        if (elemento === array[i]) {
            return true;
        }
    }

    return false;

}