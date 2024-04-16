export interface ISwaggerInfo {
  name: string;
  type?: string;
  example?: string | Record<string, string>;
  description?: string;
  required?: boolean;
}
