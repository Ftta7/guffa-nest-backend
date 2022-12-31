import { Controller, Get, HttpStatus, Param, Headers, Query, Req, Res } from '@nestjs/common';
import { GetQueryDto } from '../../dto/getQueryDto';
import { Response } from 'express';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {


    constructor(
        private storeServices: StoreService
        ) {}

    @Get('/getStores')
    async getClients(@Query() getQueryDto: GetQueryDto, @Res() res: Response) {
       const stores: any = await this.storeServices.getAllStores();
       console.log("test");
       
        return res.status(HttpStatus.OK).send(stores);
    } 
    @Get('/getMenuItems')
    async getMenuItems(@Headers() headers ,@Res() res: Response) {
        const stores: any = await this.storeServices.getStoreByName(headers['x-store-id']);   
        console.log(stores);
                
        return res.status(HttpStatus.OK).send(stores.menuItems);
    } 

    @Get('/sliders')
    async sliders(@Headers() headers ,@Res() res: Response) {
        const store: any = await this.storeServices.getStoreByName(headers['x-store-id']);   
        console.log(store);
                
        return res.status(HttpStatus.OK).send(store.sliders);
    } 

    @Get('/website')
    async website(@Headers() headers , @Res() res: Response) {
        const stores: any = await this.storeServices.getStoreByName(headers['x-store-id']);
        console.log(stores);
  
      return res.status(HttpStatus.OK).send(stores);
    } 
}
