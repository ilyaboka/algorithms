function backSubstitution(augmented_matrix) {
    const variableValues = new Map();

    for (let row = augmented_matrix.length - 1; row !== -1; row--) {
        let firstNonZeroCoefficientInRow = null;

        for (let column = 0; column < augmented_matrix[row].length; column++) {
            if (augmented_matrix[row][column]) {
                firstNonZeroCoefficientInRow = column;
                break;
            }
        }

        if (firstNonZeroCoefficientInRow === null) {
            continue;
        }

        if (firstNonZeroCoefficientInRow === augmented_matrix[row].length - 1) {
            return null;
        }

        for (
            let variableForSubstitution = firstNonZeroCoefficientInRow + 1;
            variableForSubstitution < augmented_matrix[row].length - 1;
            variableForSubstitution++
        ) {
            if (!variableValues.has(variableForSubstitution))
                continue;

            for (let column = variableForSubstitution + 1; column < augmented_matrix[row].length; column++) {
                augmented_matrix[row][column]
                    =
                    augmented_matrix[row][column]
                    ^
                    (
                        augmented_matrix[row][variableForSubstitution]
                        && variableValues.get(variableForSubstitution)[column]
                    );
            }

            augmented_matrix[row][variableForSubstitution] = 0;
        }

        variableValues.set(
            firstNonZeroCoefficientInRow,
            Array(firstNonZeroCoefficientInRow + 1)
                .fill(0)
                .concat(augmented_matrix[row].slice(firstNonZeroCoefficientInRow + 1)),
        );
    }

    return variableValues;
}

function toEchelonForm(augmented_matrix) {
    if (!augmented_matrix) {
        return;
    }

    for (let pivotRow = 0; pivotRow < augmented_matrix.length - 1; pivotRow++) {
        let rowForSwapping = pivotRow;
        for (let currentRow = pivotRow + 1; currentRow < augmented_matrix.length; currentRow++) {
            for (
                let currentColumn = pivotRow;
                currentColumn < augmented_matrix[currentRow].length;
                currentColumn++
            ) {
                if (augmented_matrix[currentRow][currentColumn] > augmented_matrix[rowForSwapping][currentColumn]) {
                    rowForSwapping = currentRow;
                    break;
                }
            }
        }

        [augmented_matrix[pivotRow], augmented_matrix[rowForSwapping]]
            = [augmented_matrix[rowForSwapping], augmented_matrix[pivotRow]];

        let pivotColumn = pivotRow;
        while (augmented_matrix[pivotRow][pivotColumn] === 0 && pivotColumn < augmented_matrix[pivotRow].length - 1)
            pivotColumn++;

        for (let row = pivotRow + 1; row < augmented_matrix.length; row++) {
            for (
                let currentColumn = augmented_matrix[row].length - 1;
                currentColumn >= pivotRow;
                currentColumn--
            ) {
                augmented_matrix[row][currentColumn]
                    =
                    augmented_matrix[row][currentColumn]
                    ^ (augmented_matrix[row][pivotColumn] && augmented_matrix[pivotRow][currentColumn]);
            }
        }
    }
}

function solveSystemOfLinearEquationsMod2(augmented_matrix) {
    toEchelonForm(augmented_matrix);
    return backSubstitution(augmented_matrix);
}

module.exports = solveSystemOfLinearEquationsMod2;
