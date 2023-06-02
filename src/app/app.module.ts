import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './services/product.service';
import {ProductHttpService} from './services/product-http.service';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { SupplierAddComponent } from './components/supplier-add/supplier-add.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/add', component: ProductAddComponent},
  {path: 'suppliers/add', component: SupplierAddComponent},
  {path: 'products/edit/:id', component: ProductAddComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    ProductAddComponent,
    SupplierAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
