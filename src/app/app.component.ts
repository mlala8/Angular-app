import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'app';

  names= ['summary', 'summary'];

  menuDisabled = true;

  tabList = [{name: 'choose products', link: '/choose-products'}, 
  {name: 'exclude products', link: '/exclude-products'}, {name: 'bonus products', link: '/bonus-products'},
  {name: 'products limits', link: '/products-limits'}, {name: 'choose clients', link: '/choose-clients'},
  {name: 'exclude clients', link: '/exclude-clients'}, {name: 'clients limits', link: '/clients-limits'},
  {name: 'summary', link: '/summary'}];

  formValidSub!: Subscription;

  constructor (private dataService: DataService) {}

  ngOnInit() {
    this.formValidSub = this.dataService.getFormValidValue().subscribe(valid => {
      this.menuDisabled = !valid;  
    });
  }

  ngOnDestroy() {
    this.formValidSub.unsubscribe();
  }
}
