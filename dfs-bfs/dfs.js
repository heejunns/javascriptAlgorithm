function dfsFunc(graph, startnode) {
  const visited = [];
  const visit = [];

  visit.push(startnode);
  while (visit.length > 0) {
    const node = visit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      visit = [...graph[node], ...visit];
    }
  }

  return visited;
}
