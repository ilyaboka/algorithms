const travellingSalesmanProblem = require('./travelling-salesman-problem');

test(
    'solves for graph with only starting vertex '
    + 'and return empty path and length 0',
    () => {
        expect(travellingSalesmanProblem([[1]]))
            .toStrictEqual({length: 0, path: [0]});
    },
);

test('solves for graph with 2 vertices', () => {
    expect(travellingSalesmanProblem([[1, 2], [3, 4]]))
        .toStrictEqual({length: 5, path: [0, 1, 0]});
});

test(
    'solves for graph with 3 vertices and incrementing shortest path',
    () => {
        expect(travellingSalesmanProblem([[1, 2, 4], [5, 6, 7], [8, 9, 10]]))
            .toStrictEqual({length: 17, path: [0, 1, 2, 0]});
    },
);

test(
    'solves for graph with 3 vertices and decrementing shortest path',
    () => {
        expect(travellingSalesmanProblem([[1, 2, 2], [3, 4, 5], [6, 7, 8]]))
            .toStrictEqual({length: 12, path: [0, 2, 1, 0]});
    },
);
