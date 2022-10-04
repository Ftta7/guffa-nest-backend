import { Model } from 'mongoose';
import { IGenericRepository } from './IGenericRepository';

export class GenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  get(id: any): Promise<T> {
    return this._repository.findById(id).exec();
  }
  getByName(name: string): Promise<T> {
    return this._repository.findOne().where('storeUniqName').equals(name).exec();
  }
  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  getByNames(name: string): Promise<T> {
    return this._repository.findOne().where('storeUniqName').equals(name).exec();
  }

  getFirstByAttr(attrbute:string,value: string): Promise<T> {    
    return this._repository.findOne().where(attrbute).equals(value).exec();
  }


 // update(id: string, item: T) {
   // return this._repository.findByIdAndUpdate(id, item);
  //}
}