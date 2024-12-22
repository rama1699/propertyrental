import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private propertiesSubject = new BehaviorSubject<Property[]>([]);
  properties$ = this.propertiesSubject.asObservable();

  searchProperties(filters: any) {
    // TODO: Implement actual search logic
    console.log('Searching properties with filters:', filters);
  }

  getPropertyById(id: string) {
    // TODO: Implement actual property retrieval
    console.log('Getting property:', id);
  }
}