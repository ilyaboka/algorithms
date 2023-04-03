const booleanSatisfiabilityProblem
    = require('./boolean-satisfiability-problem');

test('given x return true', () => { booleanSatisfiabilityProblem((x) => x) });

test('given x and not x return false', () => {
    expect(booleanSatisfiabilityProblem((x) => x && !x)).toBe(false);
});
