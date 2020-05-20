import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CrudComponent } from './components/crud/crud.component';
import { BindingComponent } from './components/binding/binding.component';
import { EjemploPipeComponent } from './components/ejemplo-pipe/ejemplo-pipe.component';
import { FirstComponent } from './components/first/first.component';
import { MasterComponent } from './components/master/master.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'first', component: FirstComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'crud/uncompomente', component: CrudComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'pipes', component: EjemploPipeComponent },
  { path: 'crud/varioscompomente', component: MasterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
