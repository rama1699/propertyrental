import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Property } from '../../core/models/property.model';
import { PropertyService } from '../../core/services/property.service';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  filters = {
    city: '',
    propertyType: '',
    minPrice: null as number | null,
    maxPrice: null as number | null
  };

  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.properties$.subscribe(
      properties => this.properties = properties
    );
  }

  searchProperties() {
    this.propertyService.searchProperties(this.filters);
  }

  viewProperty(property: Property) {
    this.propertyService.getPropertyById(property.id);
  }
}