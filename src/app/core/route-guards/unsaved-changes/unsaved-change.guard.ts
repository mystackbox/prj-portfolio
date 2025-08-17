import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//define the interface for components that can be deactivated
export interface CanDeactivateIF {
  onUnsavedChanges: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

@Injectable({
  providedIn: 'root',
})

/* UnsavedChangesGuard checks if the component can be deactivated
 by implementing the canDeactivate method from CanDeactivate interface 
 */
export class UnsavedChangesGuard implements CanDeactivate<CanDeactivateIF> {
  canDeactivate(component: CanDeactivateIF): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.onUnsavedChanges ? component.onUnsavedChanges() : true;
  }
}
