//#region Getted from response example (https://vpnapi.io/api-documentation)
export interface VpnApiCheckIpStructure {
  ip: string;
  security: VpnApiSecurityStructure;
  location: VpnApiLocationStructure;
  network: VpnApiNetworkStructure;
}

export interface VpnApiSecurityStructure {
  vpn: boolean;
  proxy: boolean;
  tor: boolean;
  relay: boolean;
}

export interface VpnApiLocationStructure {
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

export interface VpnApiNetworkStructure {
  network: string;
  autonomous_system_number: string;
  autonomous_system_organization: string;
}
//#endregion

export interface VpnApiCheckIpCache extends VpnApiCheckIpStructure {}
