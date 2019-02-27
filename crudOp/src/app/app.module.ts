import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudOpComponent } from './crud-op/crud-op.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from'@angular/common/http'
import { ProductsComponent } from './products/products.component';
import {FormsModule} from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component'


@NgModule({
  declarations: [
    AppComponent,
    CrudOpComponent,
    ProductsComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    {path: "", component:CrudOpComponent},
    {path:"products", component:ProductsComponent},
    {path:"updateProduct/:id",component:UpdateProductComponent}
    
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
