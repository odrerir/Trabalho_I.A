import { Vertex } from './Vertex';
import { AStar } from './AStar';

// Definir vértices
const vertices: { [key: string]: Vertex } = {
    A: new Vertex('A', 10),
    B: new Vertex('B', 20),
    C: new Vertex('C', 10),
    D: new Vertex('D', 5),
    E: new Vertex('E', 10),
    F: new Vertex('F', 10),
    G: new Vertex('G', 10),
    H: new Vertex('H', 0),
    K: new Vertex('K', 0)
};

// Adicionar vizinhos (arestas)
vertices.A.addNeighbor(vertices.C, 2); // Custo de A para C é 2
vertices.A.addNeighbor(vertices.E, 1); // Custo de A para E é 1
vertices.B.addNeighbor(vertices.D, 3); // Custo de B para D é 3
vertices.C.addNeighbor(vertices.F, 2); // Custo de C para F é 2
vertices.D.addNeighbor(vertices.K, 4); // Custo de D para K é 4
vertices.E.addNeighbor(vertices.K, 2); // Custo de E para K é 2
vertices.F.addNeighbor(vertices.H, 3); // Custo de F para H é 3
vertices.G.addNeighbor(vertices.A, 10); // Custo de G para A é 10
vertices.G.addNeighbor(vertices.B, 7);  // Custo de G para B é 7
vertices.G.addNeighbor(vertices.C, 8);  // Custo de G para C é 8
vertices.H.addNeighbor(vertices.K, 2);  // Custo de H para K é 2

// Definir vértices de início e fim
const start = vertices.G;
const goal = vertices.K;

if (start && goal) {
    // Instanciar o algoritmo A* e encontrar o caminho
    const aStar = new AStar();
    const pathFound = aStar.findPath(start, goal);
    console.log(pathFound ? "Caminho encontrado!" : "Caminho não encontrado.");
} else {
    console.log("Vértices de início ou fim não encontrados.");
}
