
export abstract class IGenericRepository<T> {
    abstract getAll(): Promise<T[]>;
  
    abstract get(id: string): Promise<T>;
    abstract getByName(name: string): Promise<T>;

    abstract create(item: T): Promise<T>;
    abstract getFirstByAttr(attrbute:string,value: string): Promise<T> ;

   // abstract update(id: string, item: T);
  }