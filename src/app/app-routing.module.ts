import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebAppComponent } from './web-app/web-app.component';
import { ProductListComponent } from './products/product-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'web-app', component: WebAppComponent },
  { path: 'app-products', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
