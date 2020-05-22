import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CrudComponent } from './components/crud/crud.component';
import { BindingComponent } from './components/binding/binding.component';
import { EjemploPipeComponent } from './components/ejemplo-pipe/ejemplo-pipe.component';
import { FirstComponent } from './components/first/first.component';
import { MasterComponent } from './components/master/master.component';
import { TemplateVariablesComponent } from './components/template-variables/template-variables.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmGuard } from './guards/confirm.guard';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';


const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full'},
  { path: 'first', component: FirstComponent, data: { title: 'First'}  },
  // { path: 'login', component: LoginComponent },
  { path: 'galeria', component: GaleriaComponent, data: { title: 'Galeria'} },
  { path: 'crud/uncompomente', component: CrudComponent, canActivate: [AuthGuard] },
  { path: 'binding', component: BindingComponent },
  { path: 'pipes', component: EjemploPipeComponent },
  { path: 'crud/varioscompomente', component: MasterComponent, canActivate: [AuthGuard] },
  { path: 'trv', component: TemplateVariablesComponent },
  { path: 'forms/template/:id', component: FormTemplateComponent, canDeactivate: [ConfirmGuard] },
  { path: 'forms/model/:id', component: FormReactiveComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: '**', component: FirstComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
