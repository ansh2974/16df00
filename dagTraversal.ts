import { FormNode } from './types';

export const getDirectDependencies = (formId: string, nodes: FormNode[], edges: any[]) => {
  return edges.filter((edge) => edge.target === formId).map((edge) => edge.source);
};

export const getTransitiveDependencies = (formId: string, nodes: FormNode[], edges: any[]) => {
  const visited = new Set<string>();
  const stack = getDirectDependencies(formId, nodes, edges);

  while (stack.length) {
    const current = stack.pop()!;
    if (!visited.has(current)) {
      visited.add(current);
      stack.push(...getDirectDependencies(current, nodes, edges));
    }
  }

  return Array.from(visited);
};
