import { Vertex } from './Vertex';

export class AStar {
    private openSet: Set<Vertex>;
    private closedSet: Set<Vertex>;
    private gScore: Map<Vertex, number>;
    private fScore: Map<Vertex, number>;
    private cameFrom: Map<Vertex, Vertex | null>;

    constructor() {
        this.openSet = new Set();
        this.closedSet = new Set();
        this.gScore = new Map();
        this.fScore = new Map();
        this.cameFrom = new Map();
    }

    private getLowestFScoreVertex(): Vertex | undefined {
        let lowest: Vertex | undefined;
        let lowestFScore = Infinity;

        this.openSet.forEach(vertex => {
            const score = this.fScore.get(vertex) ?? Infinity;
            if (score < lowestFScore) {
                lowestFScore = score;
                lowest = vertex;
            }
        });

        return lowest;
    }

    public findPath(start: Vertex, goal: Vertex): boolean {
        this.gScore.set(start, 0);
        this.fScore.set(start, Vertex.euclideanDistance(start, goal));
        this.cameFrom.set(start, null);
        this.openSet.add(start);

        while (this.openSet.size > 0) {
            const current = this.getLowestFScoreVertex();
            if (current === goal) {
                return true;  // Path found
            }

            this.openSet.delete(current!);
            this.closedSet.add(current!);

            current!.neighbors.forEach(({ vertex: neighbor, cost }) => {
                if (this.closedSet.has(neighbor)) {
                    return;
                }

                const tentativeGScore = (this.gScore.get(current!) ?? Infinity) + cost;

                if (!this.openSet.has(neighbor)) {
                    this.openSet.add(neighbor);
                } else if (tentativeGScore >= (this.gScore.get(neighbor) ?? Infinity)) {
                    return;
                }

                this.cameFrom.set(neighbor, current);
                this.gScore.set(neighbor, tentativeGScore);
                this.fScore.set(neighbor, tentativeGScore + Vertex.euclideanDistance(neighbor, goal));
            });
        }

        return false;  // No path found
    }
}
