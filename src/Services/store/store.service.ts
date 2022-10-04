import { Injectable } from '@nestjs/common';
import { IDataServices } from '../../core/IDataServices';
import { Store } from 'src/entities/StoreSchema';


@Injectable()
export class StoreService {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllStores(): Promise<Store[]> {
    return this.dataServices.stores.getAll();
  }
  getStoreByName(name:string): Promise<Store> {
    return this.dataServices.stores.getByName(name);
  }
  getStoreById(id: any): Promise<Store> {
    return this.dataServices.stores.get(id);
  }

  async createStore(Store: Store): Promise<Store> {
    try {
      // call to our dependencies
      const createdStore = await this.dataServices.stores.create(Store);
     // await this.crmServices.StoreAdded(createdStore);

      return createdStore;
    } catch (error) {
      throw error;
    }
  }

//   updateStore(StoreId: string, Store: Store): Promise<Store> {
//     return this.dataServices.stores.update(StoreId, Store);
//   }
}