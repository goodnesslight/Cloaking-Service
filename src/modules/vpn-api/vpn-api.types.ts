//#region Getted from response example (https://vpnapi.io/api-documentation)
export interface VpnApiCheckIpBasicStructure {
  ip: string;
  security: VpnApiSecurityBasicStructure;
  location: VpnApiLocationBasicStructure;
  network: VpnApiNetworkBasicStructure;
}

export interface VpnApiSecurityBasicStructure {
  vpn: boolean;
  proxy: boolean;
  tor: boolean;
  relay: boolean;
}

export interface VpnApiLocationBasicStructure {
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

export interface VpnApiNetworkBasicStructure {
  network: string;
  autonomous_system_number: string;
  autonomous_system_organization: string;
}
//#endregion

export interface VpnApiCheckIpCache extends VpnApiCheckIpBasicStructure {}
