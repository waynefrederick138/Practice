import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

// key that is used to access the data in local storageconst
const STORAGE_KEY = 'score-card-data';

@Injectable()
export class LocalStorageService2 {
    ship = '';
    division = '';
    weapons = '';
    location = '';
    dateOfShoot = '';
    email = '';


    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
     public storeOnLocalStorage(ship: string, division: string, weapons: string, location: string, dateOfShoot: string, email: string): void {

          // get array of tasks from local storage
          const currentGunShoot = this.storage.get(STORAGE_KEY) || [];
          // push new gun shoot data to array
          currentGunShoot.push({
              ship,
              division,
              weapons,
              location,
              dateOfShoot,
              email
          });
          // insert updated array to local storage
          this.storage.set(STORAGE_KEY, currentGunShoot);
          console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
     }
     public retrieveShip(): [] {
         if (!this.storage.get(STORAGE_KEY)) {
            console.log("Nothing in local storage.");
            return [];
         }
         const currentGunShoot = this.storage.get(STORAGE_KEY) || [];
         return currentGunShoot;
     }
}



