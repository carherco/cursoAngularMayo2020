import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormTemplateComponent } from '../components/form-template/form-template.component';

export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<HasUnsavedChanges> {

  canDeactivate(
    component: HasUnsavedChanges,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (component.hasUnsavedChanges() ) {
        return window.confirm('Tienes cambios sin guardar. ¿Seguro que quieres salir?');
      }

      return true;
  }

}
