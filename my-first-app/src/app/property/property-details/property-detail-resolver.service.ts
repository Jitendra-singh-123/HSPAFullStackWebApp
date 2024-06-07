import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Property } from '../../model/Property';
import { HousingServiceService } from '../../Services/housingService.service';
import { Observable, catchError, of } from 'rxjs';
import { IProperty } from '../IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService  {

constructor(private router: Router,private housingService: HousingServiceService) { }

// A route resolver in Angular is a feature that allows you to fetch data before navigating to a particular route. It ensures that the necessary data is available before the route is activated, providing a smoother user experience because the view only loads once all the required data has been retrieved
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Property> | Property{
  const propId= route.params['id'];
  return this.housingService.getProperty(Number(propId)).pipe(
    catchError(err=>{
      this.router.navigate(['/']);
      return of(null);
    })
  );
}

}
