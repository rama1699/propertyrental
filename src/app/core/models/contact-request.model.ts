export interface ContactRequest {
  id: string;
  seekerId: string;
  propertyId: string;
  sharedDate: Date;
  followUpDate?: Date;
}