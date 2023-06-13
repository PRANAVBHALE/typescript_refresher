/// <reference types="@types/google.maps" />

import { CustomMap } from './CustomMap';

import { Company } from './Company';
import { User } from './User';

const company = new Company();
const user = new User();

// console.log(user);
// console.log(company);

const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
