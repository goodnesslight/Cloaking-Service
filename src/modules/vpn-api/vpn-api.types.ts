export interface VpnApiCheckIpResponse {
  ip: string;
  security: VpnApiCheckIpResponseSecurity;
  location: VpnApiCheckIpResponseLocation;
  network: VpnApiCheckIpResponseNetwork;
}

export interface VpnApiCheckIpResponseSecurity {
  vpn: boolean;
  proxy: boolean;
  tor: boolean;
  relay: boolean;
}

export interface VpnApiCheckIpResponseLocation {
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

export interface VpnApiCheckIpResponseNetwork {
  network: string;
  autonomous_system_number: string;
  autonomous_system_organization: string;
}
