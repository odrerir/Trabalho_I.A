export interface Neighbor {
    vertex: Vertex;
    cost: number;
}

export class Vertex {
    name: string;
    heuristic: number;
    neighbors: Neighbor[];

    constructor(name: string, heuristic: number) {
        this.name = name;
        this.heuristic = heuristic;
        this.neighbors = [];
    }

    addNeighbor(neighbor: Vertex, cost: number) {
        this.neighbors.push({ vertex: neighbor, cost });
    }
}
