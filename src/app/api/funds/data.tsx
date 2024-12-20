import { Fund } from "@/types";

// funds
export const funds : Array<Fund> = [{
  id: "ecc42ce0-f941-4702-8c53-c822e4b8178c",
  name: "C Fund",
  value: 50150,
  risk: 10,
  parent: null,
  examples: "Apple, Google, Microsoft, Meta",
  description: "Very volatile, will reap the most rewards from good years and the worst losses of bad years.",
  expanded: true,
}, {
  id: "d0f90d4f-46a5-495a-a24f-ee82734eb703",
  name: "G Fund",
  value: 64198,
  risk: 10,
  parent: null,
  examples: "Apple, Google, Microsoft, Meta",
  description: "Very volatile, will reap the most rewards from good years and the worst losses of bad years.",
  expanded: false,
}, {
  id: "96a7bd22-c97e-4c07-aa70-56fe7dbdc3ec",
  name: "I Fund",
  value: 15640,
  risk: 10,
  parent: null,
  examples: "Apple, Google, Microsoft, Meta",
  description: "Very volatile, will reap the most rewards from good years and the worst losses of bad years.",
  expanded: false,
}, {
  id: "431009f1-1e32-4038-8b8e-be3cc9dc1c86",
  name: "Y Fund",
  value: 22739,
  risk: 10,
  parent: "ecc42ce0-f941-4702-8c53-c822e4b8178c",
  examples: "Apple, Google, Microsoft, Meta",
  description: "Very volatile, will reap the most rewards from good years and the worst losses of bad years.",
  expanded: false,
}, {
  id: "5cff024a-d7fd-4b58-a8ab-ecb6638be74b",
  name: "S Fund",
  value: 22739,
  risk: 10,
  parent: "d0f90d4f-46a5-495a-a24f-ee82734eb703",
  examples: "Apple, Google, Microsoft, Meta",
  description: "Very volatile, will reap the most rewards from good years and the worst losses of bad years.",
  expanded: false,
}, {
  id: "3a35ea11-4791-4477-8ced-18437d421ee2",
  name: "F Fund",
  value: 22739,
  risk: 10,
  parent: "96a7bd22-c97e-4c07-aa70-56fe7dbdc3ec",
  examples: "Apple, Google, Microsoft, Meta",
  description: "Very volatile, will reap the most rewards from good years and the worst losses of bad years.",
  expanded: false,
}];
