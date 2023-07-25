import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  { path: '404', component: ErrorComponent },
  { path: '', component: HomeComponent }, 
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
  { path: 'location', loadChildren: () => import('./location/location.module').then(m => m.LocationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
