import { Injectable } from '@nestjs/common';
import { IDataServices } from '../../core/IDataServices';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
    private dataServices: IDataServices,
  ) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() : Promise<Product[]> {
    return this.dataServices.products.getAll({});
  }


  findOne(store:string,id: string) {
    console.log({title:id,storeId:store});
    
    return this.dataServices.products.getOne({title:id,storeId:store});
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
