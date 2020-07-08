import { Commerce } from "./commerce";

export class Layer {
  constructor(
    public type: string,
    public features: [
      {
        type: string;
        properties: Commerce;
        geometry: {
          type: string;
          coordinates: [];
        };
      }
    ]
  ) {}
}
