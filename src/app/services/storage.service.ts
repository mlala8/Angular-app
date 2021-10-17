import { Injectable } from '@angular/core';
import { Draft } from '../model/draft.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  draf: Draft = {marketingName: '', technicalName: ''};

  setDraftStorage(draft: Draft): void {    
    sessionStorage.setItem('draft', JSON.stringify(draft));
  }

  getDraftStorage(): Draft {
    if (sessionStorage.getItem('draft') !== null) {      
      return JSON.parse(sessionStorage.getItem('draft') || '{}');
    } else {
      return this.draf;
    }
  }
}
