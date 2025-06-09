import { VpnApiLocationBasicStructure } from '@modules/vpn-api/vpn-api.types';

export class VpnApiLocationResponse implements VpnApiLocationBasicStructure {
  city: string;
  region: string;
  country: string;
  continent: string;
  region_code: string;
  country_code: string;
  continent_code: string;
  latitude: string;
  longitude: string;
  time_zone: string;
  locale_code: string;
  metro_code: string;
  is_in_european_union: boolean;
}
