import { Company } from './Company';
import { User } from './User';

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private customMap: google.maps.Map;

  constructor(divId: string) {
    this.customMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.customMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.customMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }
}
