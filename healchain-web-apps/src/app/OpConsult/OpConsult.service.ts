import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { OpConsult } from '../com.healchain.network.hospital';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class OpConsultService {

	
		private NAMESPACE: string = 'OpConsult';
	



    constructor(private dataService: DataService<OpConsult>) {
    };

    public getAll(): Observable<OpConsult[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<OpConsult> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<OpConsult> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<OpConsult> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<OpConsult> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
