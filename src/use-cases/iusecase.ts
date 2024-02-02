export default interface IUsecase<T extends object> {
  execute(limit?: number): Promise<T[]>;
  executeSingle(id: string, limit?: number): Promise<T | T[]>;
}
