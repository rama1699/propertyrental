export interface Property {
  id: string;
  county: string;
  state: string;
  city: string;
  propertyType: 'Apartment' | 'House';
  price: number;
  bedroomsCount: number;
  bathroomsCount: number;
  parkingIncluded: boolean;
  petsAllowed: boolean;
  furnished: 'None' | 'Semi' | 'Fully';
  availability: 'Immediate' | 'Later';
  additionalNotes?: string;
  ownerId: string;
  status: 'Available' | 'Rented';
}