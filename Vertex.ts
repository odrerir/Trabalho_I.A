interface Vertex {
    x: number;
    y: number;
    neighbors: { vertex: Vertex, cost: number }[];
}

function euclideanDistance(v1: Vertex, v2: Vertex): number {
    return Math.sqrt(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2));
}

function aStarAlgorithm(G: Vertex[], start: Vertex, target: Vertex): boolean {
    const f: Map<Vertex, number> = new Map();
    const g: Map<Vertex, number> = new Map();
    const parent: Map<Vertex, Vertex | null> = new Map();
    let openSet: Set<Vertex> = new Set();
    let closedSet: Set<Vertex> = new Set();
    let found: boolean = false;

    g.set(start, 0);
    f.set(start, g.get(start)! + euclideanDistance(start, target));
    parent.set(start, null);
    openSet.add(start);

    while (openSet.size > 0 && !found) {
        let current: Vertex | undefined;
        let currentF = Infinity;

        // Find the vertex with the lowest f value
        openSet.forEach(vertex => {
            if (f.get(vertex)! < currentF) {
                currentF = f.get(vertex)!;
                current = vertex;
            }
        });

        if (current === target) {
            found = true;
            break;
        }

        openSet.delete(current!);
        closedSet.add(current!);

        for (let neighborData of current!.neighbors) {
            let neighbor = neighborData.vertex;
            let tentativeG = g.get(current!)! + neighborData.cost;
            let tentativeF = tentativeG + euclideanDistance(neighbor, target);

            if ((closedSet.has(neighbor) || openSet.has(neighbor)) && tentativeF >= (f.get(neighbor) || Infinity)) {
                continue;
            }

            parent.set(neighbor, current);
            g.set(neighbor, tentativeG);
            f.set(neighbor, tentativeF);

            if (closedSet.has(neighbor)) {
                closedSet.delete(neighbor);
            }

            if (!openSet.has(neighbor)) {
                openSet.add(neighbor);
            }
        }
    }

    return found;
}
