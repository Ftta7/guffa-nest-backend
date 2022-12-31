import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { StoreService } from 'src/modules/store/store.service';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class UserMiddleware implements NestMiddleware {

  constructor(private userService:UserService){}

  async use(req: any, res: any, next: () => void) {
    // let store= req.headers['x-store-id'];

    // if(store==null){

    //   throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);

    // }

    // let ss=await this.storeService.getStoreByName(store)
    //   if(ss==null){
    //     throw new HttpException('Not found.', HttpStatus.NOT_FOUND);
    //   }
    //   res.StoreData=ss;
    let userToken= req.headers['x-user-token'];

    if(userToken==null){

      throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);

    }

    let user=await this.userService.getOrCreateUserByGToken(userToken)
      // if(user==null){
      //   throw new HttpException('Not found.', HttpStatus.NOT_FOUND);
      // }
      res.User=user;
    next();

  }
}
