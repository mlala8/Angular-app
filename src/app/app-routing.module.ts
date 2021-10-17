import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionComponent } from './definition/definition.component';
import { ChooseProductsComponent } from './choose-products/choose-products.component';
import { ExcludeProductsComponent } from './exclude-products/exclude-products.component';
import { BonusProductsComponent } from './bonus-products/bonus-products.component';
import { ProductsLimitsComponent } from './products-limits/products-limits.component';
import { ChooseClientsComponent } from './choose-clients/choose-clients.component';
import { ExcludeClientsComponent } from './exclude-clients/exclude-clients.component';
import { ClientsLimitsComponent } from './clients-limits/clients-limits.component';
import { SummaryComponent } from './summary/summary.component';
import { SimpleGridComponent } from './simple-grid/simple-grid.component';


const routes: Routes = [
  { path: '', redirectTo: '/definition', pathMatch: 'full' },
  { path: 'definition', component: DefinitionComponent },
  { path: 'choose-products', component: ChooseProductsComponent },
  { path: 'exclude-products', component: ExcludeProductsComponent },
  { path: 'bonus-products', component: BonusProductsComponent },
  { path: 'products-limits', component: ProductsLimitsComponent },
  { path: 'choose-clients', component: ChooseClientsComponent },
  { path: 'exclude-clients', component: ExcludeClientsComponent },
  { path: 'clients-limits', component: ClientsLimitsComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'simple-grid', component: SimpleGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }