module.exports = function UniryOrdenar(A, B) {
    let C = [];
    let i = 0, j = 0, k = 0;
    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) {
            C[k] = A[i];
            i++;
        } else {
            C[k] = B[j];
            j++;
        }
        k++;
    }
    while (i < A.length) {
        C[k] = A[i];
        i++;
        k++;
    }
    while (j < B.length) {
        C[k] = B[j];
        j++;
        k++;
    }

    for (let i = 0; i < C.length - 1; i++) {
        for (let j = 0; j < C.length - i - 1; j++) {
            if (C[j] > C[j + 1]) {
                let temp = C[j];
                C[j] = C[j + 1];
                C[j + 1] = temp;
            }
        }
    }

    return C;
}
