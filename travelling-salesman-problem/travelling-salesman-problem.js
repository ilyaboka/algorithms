function calculateShortestPathRecursive({currentVertex, distance, visitedVertices,}) {
    if (visitedVertices.size === distance.length) {
        if (currentVertex === 0) {
            return {length: 0, path: []};
        }
        return {length: distance[currentVertex][0], path: [0]};
    }

    let shortestPathContinuation = {length: Infinity, path: null};
    for (let i = 0; i < distance.length; i++) {
        if (visitedVertices.has(i)) {
            continue;
        }

        visitedVertices.add(i);
        const result
            =
            calculateShortestPathRecursive({
                    currentVertex: i,
                    distance: distance,
                    visitedVertices: visitedVertices,
            });

        visitedVertices.delete(i);

        const pathContinuation = {
            length: distance[currentVertex][i] + result.length,
            path: [i].concat(result.path),
        };

        if (pathContinuation.length < shortestPathContinuation.length) {
            shortestPathContinuation = pathContinuation;
        }
    }

    return shortestPathContinuation;
}

function calculateShortestPath(distance) {
    const result
        =
        calculateShortestPathRecursive(
            {currentVertex: 0, distance: distance, visitedVertices: new Set([0]),},
        );
    return {length: result.length, path: [0].concat(result.path)};
}

module.exports = calculateShortestPath;
