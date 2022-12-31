
export abstract class IGenericRepository<T> {
    abstract getAll(filter:any): Promise<T[]>;
    abstract getOne(filter:any): Promise<T>;

    abstract filter(filter:any): Promise<T[]>;

    abstract get(id: string): Promise<T>;
    abstract getByName(name: string): Promise<T>;

    abstract create(item: T): Promise<T>;
    abstract getFirstByAttr(attrbute:string,store: string,id:string): Promise<T> ;

   // abstract update(id: string, item: T);
  }