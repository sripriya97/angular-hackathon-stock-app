import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  public routeToDashboard() {
    return this.router.navigate(['dashboard']);
  }

  public routeToSearch(companyCode) {
    return this.router.navigate(['search',companyCode]);
  }
}
