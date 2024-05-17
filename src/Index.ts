import { Vertex } from './Vertex';
import { AStar } from './AStar';

// Criar vértices
const start = new Vertex(0, 0);
const goal = new Vertex(10, 10);
const middle = new Vertex(5, 5);

// Adicionar vizinhos
start.addNeighbor(middle, 5);
middle.addNeighbor(goal, 5);

// Instanciar o algoritmo A* e encontrar o caminho
const aStar = new AStar();
const pathFound = aStar.findPath(start, goal);

console.log(pathFound ? "Caminho encontrado!" : "Caminho não encontrado.");
