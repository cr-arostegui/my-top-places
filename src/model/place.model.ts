export interface Place {
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  }
}