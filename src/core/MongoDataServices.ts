import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericRepository } from './GenericRepository'
import { Store, StoreDocument } from '../entities/StoreSchema';
import { IDataServices } from './IDataServices';
import { IGenericRepository } from './IGenericRepository';
import { Product, ProductDocument } from '../entities/ProductSchema';
import { ProductRepository } from '../repositories/product.repository';
import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';
//import { UserRepository } from './repositores/user.repository';
import { UserDocument } from '../entities/user.entity';


@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
    stores: GenericRepository<Store>;
    products: GenericRepository<Product>;
    users: GenericRepository<User>;

  constructor(
    @InjectModel(Store.name)
    private StoreRepository: Model<StoreDocument>,
    @InjectModel(Product.name)
    private ProductRepository: Model<ProductDocument>,
    @InjectModel(User.name)
     private UserRepository: Model<UserDocument>,
  ) {}

  onApplicationBootstrap() {
    this.stores = new GenericRepository<Store>(this.StoreRepository);
    this.products = new GenericRepository<Product>(this.ProductRepository);
    this.users = new GenericRepository<User>(this.UserRepository);

  }
}