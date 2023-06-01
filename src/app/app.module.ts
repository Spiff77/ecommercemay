import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './product.service';
import {ProductHttpService} from './product-http.service';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
