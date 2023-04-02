function booleanFunction(x1, x2, x3, x4) {
    return x1 && (x2 || x3) && x4;
}

function isSatisfiable(booleanFunction) {
    for (
        let valuesAsBits = 0;
        valuesAsBits < 1 << booleanFunction.length;
        valuesAsBits++
    ) {
        if (
            booleanFunction(
                ...
                Array(booleanFunction.length)
                    .fill(0)
                    .map((_, index) => ((1 << index) & valuesAsBits))
            )
        )
            return true;
    }

    return false;
}

function booleanSatisfiabilityProblem() {
    console.log(isSatisfiable(booleanFunction) ? 'Satisfiable' : 'Not satisfiable');
}

booleanSatisfiabilityProblem();
