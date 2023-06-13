/// <reference types="@types/google.maps" />

// import { Company } from './Company';
// import { User } from './User';

// const company = new Company();
// const user = new User();

// console.log(user);
// console.log(company);

console.log(google);

new google.maps.Map(document.getElementById('map') as HTMLElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
