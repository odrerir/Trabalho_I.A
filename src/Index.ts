import { Vertex } from './Vertex';
import { AStar } from './AStar';

// Suponha que você tenha um grafo existente
const graphData = {
    vertices: [
        { name: 'A', x: 0, y: 0 },
        { name: 'B', x: 2, y: 3 },
        { name: 'C', x: 5, y: 5 },
        { name: 'D', x: 7, y: 8 }
    ],
    edges: [
        { from: 'A', to: 'B', cost: 5 },
        { from: 'B', to: 'C', cost: 5 },
        { from: 'A', to: 'C', cost: 10 },
        { from: 'C', to: 'D', cost: 3 }
    ]
};

// Criação dos vértices
const verticesMap = new Map<string, Vertex>();
graphData.vertices.forEach(v => {
    verticesMap.set(v.name, new Vertex(v.name, v.x, v.y));
});

// Adição dos vizinhos (arestas)
graphData.edges.forEach(e => {
    const fromVertex = verticesMap.get(e.from);
    const toVertex = verticesMap.get(e.to);
    if (fromVertex && toVertex) {
        fromVertex.addNeighbor(toVertex, e.cost);
    }
});

// Definir vértices de início e fim
const start = verticesMap.get('A');
const goal = verticesMap.get('D');

if (start && goal) {
    // Instanciar o algoritmo A* e encontrar o caminho
    const aStar = new AStar();
    const pathFound = aStar.findPath(start, goal);
    console.log(pathFound ? "Caminho encontrado!" : "Caminho não encontrado.");
} else {
    console.log("Vértices de início ou fim não encontrados.");
}
