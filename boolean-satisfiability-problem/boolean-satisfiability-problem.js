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

module.exports = isSatisfiable;
