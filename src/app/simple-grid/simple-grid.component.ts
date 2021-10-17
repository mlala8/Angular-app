import { Component, OnInit } from '@angular/core';
import { Draft } from '../model/draft.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-simple-grid',
  templateUrl: './simple-grid.component.html',
  styleUrls: ['./simple-grid.component.sass']
})
export class SimpleGridComponent implements OnInit {

  marketingName = '';
  draft: Draft = {marketingName: '', technicalName: ''};  

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.draft = this.storageService.getDraftStorage();
    this.marketingName = this.draft.marketingName;
  }

}
