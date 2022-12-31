import { IUserRepository } from 'src/repositories/user.repository.interface';
import { Product } from '../entities/ProductSchema';
import { Store } from '../entities/StoreSchema';
import { IGenericRepository } from './IGenericRepository';
//import { UserRepositoryInterface } from './repositores/user.repository.interface';
import {  UserDocument } from '../entities/user.entity';
import { User } from 'src/entities/entities';

export abstract class IDataServices {
  abstract stores: IGenericRepository<Store>;
  abstract products: IGenericRepository<Product>;
  abstract users: IGenericRepository<User>;

}

