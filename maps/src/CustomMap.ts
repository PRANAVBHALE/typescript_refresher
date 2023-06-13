import { Company } from './Company';
import { User } from './User';

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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.customMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.customMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}
