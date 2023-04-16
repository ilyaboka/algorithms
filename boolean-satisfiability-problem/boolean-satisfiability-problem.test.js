const booleanSatisfiabilityProblem
    = require('./boolean-satisfiability-problem');

test.each`
booleanFunction   | expectedResult | functionDescription
${(x) => x}       | ${true}        | ${'x'}
${(x) => x && !x} | ${false}       | ${'x and not x'}
`(
    'given $functionDescription, returns $expectedResult',
    ({booleanFunction, expectedResult}) => {
        expect(booleanSatisfiabilityProblem(booleanFunction)).toBe(expectedResult);
    },
);
