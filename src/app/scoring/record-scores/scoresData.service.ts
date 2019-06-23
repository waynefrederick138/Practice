import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

// key that is used to access the data in local storageconst
const STORAGE_KEY = 'local_shooterScores';

@Injectable()
export class LocalStorageService {
    scores = [];
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
     public storeOnLocalStorage(shooterName: string, shooterScore: string, shooterNotes: string, shooterOptions: string): void {

          // get array of tasks from local storage
          const currentTodoList = this.storage.get(STORAGE_KEY) || [];
          // push new task to array
          currentTodoList.push({
              name: shooterName,
              score: shooterScore,
              notes: shooterNotes,
              status: shooterOptions
          });
          // insert updated array to local storage
          this.storage.set(STORAGE_KEY, currentTodoList);
          console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
     }
}



