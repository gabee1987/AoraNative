// global.d.ts
declare module "*.png" {
  const value: any; // Use `string` if you want stricter typing for image URIs
  export default value;
}
