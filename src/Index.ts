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
vertices.A.addNeighbor(vertices.B, 5); 
vertices.A.addNeighbor(vertices.H, 10); 
vertices.A.addNeighbor(vertices.D, 10); 
vertices.B.addNeighbor(vertices.F, 5); 
vertices.C.addNeighbor(vertices.D, 5); 
vertices.D.addNeighbor(vertices.E, 5); 
vertices.D.addNeighbor(vertices.G, 10); 
vertices.E.addNeighbor(vertices.C, 10); 
vertices.E.addNeighbor(vertices.A, 5);  
vertices.E.addNeighbor(vertices.K, 10);  
vertices.F.addNeighbor(vertices.G, 15); 
vertices.G.addNeighbor(vertices.A, 10); 
vertices.G.addNeighbor(vertices.C, 5);
vertices.H.addNeighbor(vertices.B, 5);
vertices.H.addNeighbor(vertices.K, 20);
vertices.K.addNeighbor(vertices.B, 10);

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
