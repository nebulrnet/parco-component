export type Fund = {
  id: string;
  name: string;
  value: number;
  parent: string | null;
  risk: number;
  examples: string;
  description: string;
};

export default Fund;