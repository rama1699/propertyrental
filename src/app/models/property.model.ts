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

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'Owner' | 'Seeker';
}

export interface ContactRequest {
  id: string;
  seekerId: string;
  propertyId: string;
  sharedDate: Date;
  followUpDate?: Date;
}