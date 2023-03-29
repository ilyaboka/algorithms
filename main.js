function calculate_shortest_path_recursive(
    current_vertex,
    distance,
    visited_vertices,
) {
    if (visited_vertices.size === distance.length) {
        if (current_vertex === 0)
            return {length: 0, path: []};
        return {length: distance[current_vertex][0], path: [0]};
    }

    let shortest_path_continuation = {length: Infinity, path: null};
    for (let i = 0; i < distance.length; i++) {
        if (visited_vertices.has(i))
            continue;

        visited_vertices.add(i);
        const result
            =
            calculate_shortest_path_recursive(i, distance, visited_vertices);
        visited_vertices.delete(i);

        const path_continuation = {
            length: distance[current_vertex][i] + result.length,
            path: [i].concat(result.path),
        };

        if (path_continuation.length < shortest_path_continuation.length)
            shortest_path_continuation = path_continuation;
    }

    return shortest_path_continuation;
}

function calculate_shortest_path(distance) {
    const visited_vertex = new Set;
    visited_vertex.add(0);

    const result
        = calculate_shortest_path_recursive(0, distance, visited_vertex);
    return {length: result.length, path: [0].concat(result.path)};
}

function main() {
    const distance = [
        [0, 0, 0, 0],
        [0, 5, 6, 7],
        [0, 9, 10, 11],
        [0, 13, 14, 15],
    ];
    const shortest_path_data = calculate_shortest_path(distance);

    console.log(
        (
            `path: ${shortest_path_data.path}, `
            + `length: ${shortest_path_data.length}`
        ),
    );
}

main();
