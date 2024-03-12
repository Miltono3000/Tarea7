module.exports = function UniryOrdenar(array1, array2){
    let array3 = array1.concat(array2);
    array3.sort((a, b) => a-b);

    return array3;
}

