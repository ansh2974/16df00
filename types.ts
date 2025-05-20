export interface FormNode {
  id: string;
  data: {
    name: string;
    input_mapping?: { [key: string]: string };
  };
}

export interface Edge {
  source: string;
  target: string;
}
