import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericRepository } from './GenericRepository'
import { Store } from '../entities/StoreSchema';
import { IDataServices } from './IDataServices';
import { IGenericRepository } from './IGenericRepository';
import { Product } from '../entities/ProductSchema';
import { ProductRepository } from '../repositories/product.repository';


@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
    stores: GenericRepository<Store>;
    products: GenericRepository<Product>;

  constructor(
    @InjectModel(Store.name)
    private StoreRepository: Model<Store>,
    @InjectModel(Product.name)
    private ProductRepository: Model<Product>,
  ) {}

  onApplicationBootstrap() {
    this.stores = new GenericRepository<Store>(this.StoreRepository);
    this.products = new GenericRepository<Product>(this.ProductRepository);
  }
}