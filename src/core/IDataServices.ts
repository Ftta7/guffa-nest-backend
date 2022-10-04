import { Product } from '../entities/ProductSchema';
import { Store } from '../entities/StoreSchema';
import { IGenericRepository } from './IGenericRepository';

export abstract class IDataServices {
  abstract stores: IGenericRepository<Store>;
  abstract products: IGenericRepository<Product>;

}

