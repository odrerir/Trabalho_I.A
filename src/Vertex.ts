interface Neighbor {
    vertex: Vertex;
    cost: number;
}

export class Vertex {
    name: string;
    x: number;
    y: number;
    neighbors: Neighbor[];

    constructor(name: string, x: number, y: number) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.neighbors = [];
    }

    addNeighbor(neighbor: Vertex, cost: number) {
        this.neighbors.push({ vertex: neighbor, cost });
    }

    static euclideanDistance(v1: Vertex, v2: Vertex): number {
        return Math.sqrt(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2));
    }
}
