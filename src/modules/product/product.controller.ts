import { Controller, Get, Post, Body, Patch,Headers, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { StoreService } from '../store/store.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService,private storeServices: StoreService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':slug')
  async findOne(@Headers() headers,@Param('slug') slug: string) {
    const store: any = await this.storeServices.getStoreByName(headers['x-store-id']);   
    return this.productService.findOne(store._id ,slug);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productService.remove(+id);
  // }
}
