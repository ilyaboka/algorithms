const travellingSalesmanProblem = require('./travelling-salesman-problem');

test.each`
distanceMatrix                        | expectedResult                      | testCaseNumber
${[[1]]}                              | ${{length: 0, path: [0]}}           | ${0}
${[[1, 2], [3, 4]]}                   | ${{length: 5, path: [0, 1, 0]}}     | ${1}
${[[1, 2, 4], [5, 6, 7], [8, 9, 10]]} | ${{length: 17, path: [0, 1, 2, 0]}} | ${2}
${[[1, 2, 2], [3, 4, 5], [6, 7, 8]]}  | ${{length: 12, path: [0, 2, 1, 0]}} | ${3}
`(
    'test for case $testCaseNumber',
    ({distanceMatrix, expectedResult}) => {
        expect(travellingSalesmanProblem(distanceMatrix))
            .toStrictEqual(expectedResult);
    },
);
