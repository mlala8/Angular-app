import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DefinitionComponent } from './definition/definition.component';
import { ChooseProductsComponent } from './choose-products/choose-products.component';
import { ExcludeProductsComponent } from './exclude-products/exclude-products.component';
import { BonusProductsComponent } from './bonus-products/bonus-products.component';
import { ProductsLimitsComponent } from './products-limits/products-limits.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleGridComponent } from './simple-grid/simple-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DefinitionComponent,
    ChooseProductsComponent,
    ExcludeProductsComponent,
    BonusProductsComponent,
    ProductsLimitsComponent,
    SimpleGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
